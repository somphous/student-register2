Template.activeStudentRptGen.onCreated(function () {
    this.subscribe('company');
});
// Generate
Template.activeStudentRptGen.helpers({
    activeStudentRptDoc(){
        let asAt = FlowRouter.getQueryParam('asAt');
        Meteor.call('activeStudentRpt', asAt, function(error, result){
            if(!error){
                Session.set('activeStudentRptResult', result);
            }
        });
        return Session.get('activeStudentRptResult');
    },
    company(){
        return Collection.Company.find();
    },
    no(index){
        console.log(index);
        return index + 1;
    }
});

//hook
AutoForm.hooks({
        activeStudentRpt: {
            onSubmit(insertDoc, updateDoc, currentDoc){
                this.done(null, insertDoc);
            },
            onSuccess(formType, result){
                let query = result;
                let path = FlowRouter.path('activeStudentRptGen', {}, query);

                window.open(path, '_blank');
            },
            onError(formType, error){
                alertify.error(error.message);
            }
        }
    }
);
