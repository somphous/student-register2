Template.studentAction.events({
    'click #js-update': function () {
        FlowRouter.go('studentUpdate', {id: this._id});
    },
    'click .jsRemove': function (error, result) {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Student.remove({_id: self._id});
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    }
});
//Update
Template.studentUpdate.onCreated(function () {
    let studentId = FlowRouter.getParam("id");
    this.subscribe("student", studentId);
});

Template.studentUpdate.helpers({
    studentDoc: function () {
        var studentId = FlowRouter.getParam('id');
        var student = Collection.Student.findOne(studentId);
        return student;
    }
});
//hook
AutoForm.hooks({
    studentInsert: {//id autoform
        // before: {
        //     insert: function (doc) {
        //         doc._id = idGenerator.gen(Collection.Student, 3);
        //         return doc;
        //     }
        // },
        onSuccess(formType, id){
            //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            alertify.success('Successfully Added');
            // FlowRouter.go('student');
        },
        onError(formType, error){
            alertify.error(error.message);
            //Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    },

    studentUpdate: {//id autoform
        onSuccess(formType, id){
            //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            alertify.success('Successfully Added');
            FlowRouter.go('student');
        },
        onError(formType, error){
            alertify.error(error.message);
            //Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    }
});


