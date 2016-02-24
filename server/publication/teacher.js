Meteor.publish('teacher', function (id) {
    //console.log(selector);

    //waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Teacher.find({_id:id});
    return data;
});
// Meteor.publish('teacherList', function (selector) {
//    //console.log(selector);
//
//    //waiting
//    // Meteor._sleepForMs(1000);
//
//    let data = Collection.Teacher.find(selector);
//
//     return data;
// });

//Global
//Meteor.publish('teachers', ()=>{
//   let data=Collection.Teacher.find();
//    return data;
//});