Meteor.publish('payment', function (id) {
    //console.log(selector);

    //waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Payment.find({_id:id});
    return data;
});

//dyanmic
//Meteor.publish('payment', function (selector) {
//    //console.log(selector);
//
//    //waiting
//    Meteor._sleepForMs(1000);
//
//    let data = Collection.Payment.find(selector);
//    return data;
//});

//Meteor.publish('payments',()=>{
//   let data=Collection.Payment.find();
//    return data;
//});