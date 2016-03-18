Template.paymentAction.events({
    'click #js-update': function () {
        FlowRouter.go('paymentUpdate', {id: this._id});
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Payment.remove({_id: self._id}); /// remove by _id?
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    }
});
//Insert
Template.paymentInsert.onCreated(function () {
    this.subscribe("registers");
    this.subscribe("students");
    this.subscribe("payments");
    this.subscribe("subjects");
});
Template.paymentInsert.helpers({
    studentId: function () {
        var list = [];
        // list.push({label: "(Select All)", value: ""});
        Collection.Student.find()
            .forEach(function (obj) {
                list.push({label: obj._id + " | " + obj.latinName + ' | ' + obj.khmerName, value: obj._id});
            });

        return list
    },
    registerId: function () {
                var studentId = AutoForm.getFieldValue('studentId');
                //console.log(studentId);

                var data = Collection.Register.find({studentId: studentId});
                var list = [
                    // {label: '(Select One)', value: ''}
                ];

                if (data) {
                    data.forEach(function (obj) {
                        var label;
                        // Get subject
                        var subject = Collection.Subject.findOne(obj.subjectId);

                        // Check last paid
                        var lastPaid = Collection.Payment.findOne({registerId: obj._id}, {sort: {_id: -1}});

                        // console.log(lastPaid);

                        if (lastPaid) {
                            if (math.round(lastPaid.osAmount, 2) > 0) {
                                label = obj._id + ' | ' + subject.name + ' | ' + lastPaid.osAmount;
                                list.push({label: label, value: obj._id});
                            }
                        } else {
                            label = obj._id + ' | ' + subject.name + ' | ' + obj.amount;
                            list.push({label: label, value: obj._id});
                        }
                    });
                }

                return list;
    },
    dueAmount: function () {
            let dueAmount = 0;
            let registerId = AutoForm.getFieldValue('registerId');

            if (registerId) {
                let data = Collection.Register.findOne(registerId);
                // if (data) {
                dueAmount = data.amount;

                // Check last paid
                var lastPaid = Collection.Payment.findOne(
                    {registerId: registerId},
                    {sort: {_id: -1}}
                ); // _id in payment

                if (lastPaid) {
                    // dueAmount = lastPaid.osAmount;
                    dueAmount = lastPaid.osAmount;
                    // return dueAmount;
                }
                // }
            }
            return dueAmount;
        },
        osAmount: function () {
            let osAmount = 0;
            let dueAmount = AutoForm.getFieldValue('dueAmount');
            let paidAmount = AutoForm.getFieldValue('paidAmount');
            return dueAmount - paidAmount;
    
        },
        type: "inputmask",
        afFieldInput: {
            inputmaskOptions: inputmaskOptions.currency()
        }



});
Template.paymentInsert.events({
    'keyup .jsPaidAmount': function () {
        let paidAmount= $('.jsPaidAmount').val();
        let dueAmount =$('.jsDueAmount').val();
        $('.jsOsAmount').val(dueAmount-paidAmount);
    }
});

// Update
Template.paymentUpdate.onCreated(function () {
    let paymentId = FlowRouter.getParam("id");
    this.subscribe("payment", paymentId);
    this.subscribe("registers");
    this.subscribe("students");
    this.subscribe("subjects");
});
Template.paymentUpdate.events({
    'keyup .jsPaidAmount': function () {
        let paidAmount= $('.jsPaidAmount').val();
        let dueAmount =$('.jsDueAmount').val();
        $('.jsOsAmount').val(dueAmount-paidAmount);
    }
});
Template.paymentUpdate.helpers({
    paymentDoc: function () {
        var id = FlowRouter.getParam('id');
        var payment = Collection.Payment.findOne({_id: id});
        return payment;
    },
    // studentId:function () {
    //   
    // }
});
//hook
AutoForm.hooks({
        paymentInsert: {//id autoform
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.success('Successfully Added');
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            },
            paymentUpdate: {//id autoform
                onSuccess(formType, id){
                    //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                    alertify.success('Successfully Updated');
                    FlowRouter.go('payment');
                },
                onError(formType, error){
                    alertify.error(error.message);
                    //Bert.alert(error.message, 'danger', 'growl-top-right');
                }
            }

        }
    }
);


