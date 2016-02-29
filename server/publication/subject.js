//static
Meteor.publish('subjectById', function (id) {
    //waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Subject.find({_id: id});
    return data;
});


// Meteor.publish('subjects',function(){
//     return Collection.Subject.find();
// });


////dynamic
//Meteor.publish('subject', function (selector) {
//    //console.log(selector);
//
//    //waiting
//    Meteor._sleepForMs(1000);
//    let data = Collection.Subject.find(selector);
//    return data;
//});

//Global
//Meteor.publish('subjects', ()=>{
//   let data=Collection.Subject.find();
//    return data;
//});