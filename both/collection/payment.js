Collection.Payment = new Mongo.Collection('payment');
Schema.Payment = new SimpleSchema({
    paidDate: {
        type: Date,
        label: "PaidDate",
        defaultValue: moment().toDate(),
        autoform: {
            type: "bootstrap-datetimepicker",
            afFieldInput: {
                dateTimePickerOptions: {
                    format: 'DD/MM/YYYY',
                    pickTime: false
                }
            }
        }
    },
    studentId: {
        type: String,
        label: "StudentID",
        autoform: {
            type: "select2",
        //     options: function () {
        //         var data = Collection.Student.find();
        //         var list = [
        //             {label: '(Select One)', value: ''}
        //         ];
        //
        //         data.forEach(function (obj) {
        //             list.push({label: obj._id + ' : ' + obj.latinName, value: obj._id})
        //         });
        //
        //         return list;
        //     }
        }
    },
    registerId: {
        type: String,
        label: "Register ID",
        autoform: {
            type: "select2",
        //     options: function () {
        //         var studentId = AutoForm.getFieldValue('studentId');
        //         //console.log(studentId);
        //
        //         var data = Collection.Register.find({studentId: studentId});
        //         var list = [
        //             {label: '(Select One)', value: ''}
        //         ];
        //
        //         if (data) {
        //             data.forEach(function (obj) {
        //                 var label;
        //                 // Get subject
        //                 var subject = Collection.Subject.findOne(obj.subjectId);
        //
        //                 // Check last paid
        //                 var lastPaid = Collection.Payment.findOne({registerId: obj._id}, {sort: {_id: -1}});
        //
        //                 // console.log(lastPaid);
        //
        //                 if (lastPaid) {
        //                     if (math.round(lastPaid.osAmount, 2) > 0) {
        //                         label = obj._id + ' | ' + subject.name + ' | ' + lastPaid.osAmount;
        //                         list.push({label: label, value: obj._id});
        //                     }
        //                 } else {
        //                     label = obj._id + ' | ' + subject.name + ' | ' + obj.amount;
        //                     list.push({label: label, value: obj._id});
        //                 }
        //             });
        //         }
        //
        //         return list;
        //     }
        }
    },
    dueAmount: {
        type: Number,
        label: "Due Amount",
        decimal: true,
        defaultValue:0
        // autoform: {
        //     type: "inputmask",
        //     afFieldInput: {
        //         inputmaskOptions: inputmaskOptions.currency()
        //     },
        //     readonly: true,
        //     value: function () {
        //         let dueAmount = 0;
        //         let registerId = AutoForm.getFieldValue('registerId');
        //
        //         if (registerId) {
        //             let data = Collection.Register.findOne(registerId);
        //             // if (data) {
        //             dueAmount = data.amount;
        //
        //             // Check last paid
        //             var lastPaid = Collection.Payment.findOne(
        //                 {registerId: registerId},
        //                 {sort: {_id: -1}}
        //             ); // _id in payment
        //
        //             if (lastPaid) {
        //                 // dueAmount = lastPaid.osAmount;
        //                 dueAmount = lastPaid.osAmount;
        //                 // return dueAmount;
        //             }
        //             // }
        //         }
        //         return dueAmount;
        //     }
        // }

    },
    paidAmount: {
        type: Number,
        label: "Paid Amount",
        decimal: true
    },
    osAmount: {
        type: Number,
        label: "OS Amount",
        defaultValue: 0,
        decimal: true,
        autoform: {
            //readonly: true,
            value: function () {
                let osAmount = 0;
                let dueAmount = AutoForm.getFieldValue('dueAmount');
                let paidAmount = AutoForm.getFieldValue('paidAmount');
                return dueAmount - paidAmount;

            },
            type: "inputmask",
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            }

        }

    },
    voucherId: {
        type: String,
        label: "VoucherId",
        decimal: true,
        optional: true
    },
    _student: {
        type: Object,
        optional: true,
        blackbox: true
    },
    _subject: {
        type: Object,
        optional: true,
        blackbox: true
    }
});
Collection.Payment.attachSchema(Schema.Payment);