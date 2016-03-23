// Generate
Template.subjectRptGen.onCreated(function () {
    this.subscribe('subjects');
});
Template.subjectRptGen.helpers({
    data(){
        return Collection.Subject.find({},{sort: {_id:1}});
    },
    no(index) {
        console.log(index);
        return index + 1;
    }

});

// Template.subjectRptGen.helpers({
//     subjectRptGen(){
//         let data = Collection.Subject.findOne();
//         return data;
//     }
// });

//hook
AutoForm.hooks({
        subjectRpt: {
            onSubmit(insertDoc, updateDoc, currentDoc){
                this.done(null, insertDoc);
                return false;
            },
            onSuccess(formType, result){
                let query = result;
                let path = FlowRouter.path('subjectRptGen', {}, query);

                window.open(path, '_blank');
            },
            onError(formType, error){
                alertify.error(error.message);
            }
        }
    }
);
