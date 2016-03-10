Template.teacherAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('teacherUpdate', {id: this._id});
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Teacher.remove({_id: self._id}); /// remove by _id?
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    }
});
// Insert
Template.teacherInsert.onCreated(function () {
    this.subscribe("subjects");
});

//Update
Template.teacherUpdate.onCreated(function () {
    let teacherId = FlowRouter.getParam("id");
    this.subscribe("teacher", teacherId);
    this.subscribe("subjects", teacherId);

});
Template.teacherUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var teacher = Collection.Teacher.findOne({_id: id});
        return teacher;
    }
});
//hook
AutoForm.hooks({
        teacherInsert: {//id autofor
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.success('Successfully Added');
                // FlowRouter.go('teacher');
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }
        },
        teacherUpdate: {//id autoform
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.success('Successfully Added');
                FlowRouter.go('teacher');
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }
        }
    }
);
