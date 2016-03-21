Meteor.methods({
    subjectRpt(){
        let data = Collection.Subject.findOne();
        return data;
    }
});