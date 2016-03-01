Template.paymentAction.events({
    'click .jsUpdate': function () {
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

//Update
Template.paymentUpdate.onCreated(function () {
    let paymentId = FlowRouter.getParam("id");
    this.subscribe("payment", paymentId);
    this.subscribe("registers");
    this.subscribe("students");
    this.subscribe("subjects");

});
Template.paymentUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var payment = Collection.Payment.findOne({_id: id});
        return payment;
    }
});
//hook
AutoForm.hooks({
        paymentInsert:{//id autoform
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.success('Successfully Added');
                // FlowRouter.go('payment');
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            },
            paymentUpdate: {//id autoform
                onSuccess(formType, id){
                    //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                    alertify.success('Successfully Updated');
                    FlowRouter.go('register');
                },
                onError(formType, error){
                    alertify.error(error.message);
                    //Bert.alert(error.message, 'danger', 'growl-top-right');
                }
            }

        }
    }
)


