Template.userToRoleAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('userToRoleUpdate', {id: this._id});
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Meteor.call('userToRole.remove', self._id, function (error, result) {
                    if (!error) {
                        alertify.success('Deleted');
                    }
                })
            },
            function () {
                alertify.error('Cancel');
            });
    }
});

Template.userToRoleUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var user = Meteor.users.findOne({_id: id});
        // console.log(user);
        return user;
    }
});

//hook
AutoForm.hooks({
    userToRoleUpdate: {//id autoform
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();
            Meteor.call('userToRole.update', currentDoc._id, updateDoc);
            this.done();
        },
        onSuccess(formType, result){
            alertify.success('Successfully Added');
            FlowRouter.go('teacher');
        },
        onError(formType, error){
            alertify.error(error.message);
        }
    }

});


