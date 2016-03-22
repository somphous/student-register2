// Generate
Template.registerRptGen.helpers({
    registerRptDoc(){
        let fromDate = FlowRouter.getQueryParam('fromDate');
        let toDate = FlowRouter.getQueryParam('toDate');
        Meteor.call('registerRpt', fromDate, toDate, function (error, result) {
            if (!error) {
                //console.log(result.content);
                Session.set('registerRptResult', result);
            }
        });

        return Session.get('registerRptResult');
    },
    no(index) {
        console.log(index);
        return index + 1;
    }
});

//hook
AutoForm.hooks({
        registerRpt: {
            onSubmit(insertDoc, updateDoc, currentDoc){
                this.done(null, insertDoc);
                return false;
            },
            onSuccess(formType, result){
                let query = result;
                let path = FlowRouter.path('registerRptGen', {}, query);

                window.open(path, '_blank');
            },
            onError(formType, error){
                alertify.error(error.message);
            }
        }
    }
);
