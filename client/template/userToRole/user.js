Template.userToRoleAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('userToRoleUpdate', {id: this._id});
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {

                alertify.error('Cancel');
            });
    }
});

Template.userToRoleUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var user = Meteor.users.findOne({_id: id});
        return user;
    }
});

//hook
AutoForm.hooks({
    userToRole: {//id autoform
        onSubmit: function (insertDoc, updateDoc, CurrentDoc) {
            this.event.preventDefault();
            Meteor.call('userToRole.insert', insertDoc);
            this.done();
        },
        onSuccess(onSubmit, result)
        {
            alertify.success('Successfully Added');

        }
        ,
        onError(formType, error)
        {
            alertify.error(error.message);
            //Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    },
    userToRoleUpdate: {//id autoform
        onSubmit: function (insertDoc,updateDoc,currentDoc) {
            this.event.preventDefault();
            Meteor.call('userToRole.update',currentDoc._id,updateDoc);
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


