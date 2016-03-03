Template.registerAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('registerUpdate', {id: this._id});
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Register.remove({_id: self._id}); /// remove by _id?
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    }
});

// Insert
Template.registerInsert.onCreated(function () {
    this.subscribe("teachers");
    this.subscribe("students");
    this.subscribe("subjects");
});

//Update
Template.registerUpdate.onCreated(function () {
    let registerId = FlowRouter.getParam("id");
    this.subscribe("register", registerId);

    this.subscribe("teachers", registerId);
    this.subscribe("students", registerId);
    this.subscribe("subjects", registerId);
});

Template.registerUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var register = Collection.Register.findOne({_id: id});
        return register;
    }
});
//hook
AutoForm.hooks({
    registerInsert: {//id autoform
        onSuccess(formType, id){
            //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            alertify.success('Successfully Added');
            // FlowRouter.go('register');
        },
        onError(formType, error){
            alertify.error(error.message);
            //Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    },
    registerUpdate: {//id autoform
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
});


