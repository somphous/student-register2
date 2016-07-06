//static
Meteor.publish('attendance', function (id) {
    //waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Attendance.find({_id: id});
    return data;
});
//Global
Meteor.publish('attendances', ()=>{
    let data=Collection.Attendance.find();
    return data;
});