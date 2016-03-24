// Generate
Template.statusRptGen.helpers({
    statusRptDoc(){
        let asAt = FlowRouter.getQueryParam('asAt');
        let status = FlowRouter.getQueryParam('status');
        Meteor.call('statusRpt', asAt,status, function(error, result){
            if(!error){
                Session.set('statusRptResult', result);
            }
        });
        return Session.get('statusRptResult');
    },
    no(index){
        console.log(index);
        return index + 1;
    }
});

//hook
AutoForm.hooks({
        statusRpt: {
            onSubmit(insertDoc, updateDoc, currentDoc){
                this.done(null, insertDoc);
            },
            onSuccess(formType, result){
                let query = result;
                let path = FlowRouter.path('statusRptGen', {}, query);

                window.open(path, '_blank');
            },
            onError(formType, error){
                alertify.error(error.message);
            }
        }
    }
);
