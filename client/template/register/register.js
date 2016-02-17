Template.registerAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('registerUpdate', {id: this._id});
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                //Collection.Register.remove({_id: self._id}); /// remove by _id?
                Meteor.call('register.remove',self._id,function (error,result) {
                    if(!error){
                        alertify.success('Deleted');
                    }
                });
            },
            function () {
                alertify.error('Cancel');
            });
    }
});
//Update
Template.registerUpdate.onCreated(function () {
    let registerId = FlowRouter.getParam("id");
    this.subscribe("register", registerId);

    //let selector = {_id: registerId};//dynamic
    //this.subscribe("register", selector);
    //let selector={};// find all

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
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Register, 3);
                return doc;
            }
        },
        onSuccess(formType, id){
            //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            alertify.alert('Successfully Added');
            FlowRouter.go('register');
        },
        onError(formType, error){
            alertify.error(error.message);
            //Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    },
    registerUpdate: {//id autoform
        onSuccess(formType, id){
            //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            alertify.alert('Successfully Updated');
            FlowRouter.go('register');
        },
        onError(formType, error){
            alertify.error(error.message);
            //Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    }
});


