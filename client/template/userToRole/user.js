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
});


