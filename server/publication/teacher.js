Meteor.publish('teacher', function (id) {
    //console.log(selector);

    //waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Teacher.find({_id:id});
    return data;
});


Meteor.publish('teachers', function() {
  let data=Collection.Teacher.find();
    console.log(data.fetch());
   return data;
});
