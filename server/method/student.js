// //Remove
// Meteor.methods({
//     'student.remove': function(id) {
//         Collection.Student.remove(id)
//
//     }
// });
//
// //Insert
// Meteor.methods({
//     'student.insert': function (insertDoc) {
//         insertDoc._id= idGenerator.gen(Collection.Student, 3);
//         Collection.Student.insert(insertDoc)
//     }
// });
Meteor.methods({
    getStudentList(){
        var list = [];
        // list.push({label: "(Select All)", value: ""});
        Collection.Student.find()
            .forEach(function (obj) {
                list.push({label: obj._id + " | " + obj.latinName + ' | ' + obj.khmerName, value: obj._id});
            });

        return list;
    }
});