// Meteor.methods({
//     'register.remove': function (id) {
//         Collection.Register.remove(id)
//     }
// });

Meteor.methods({
    search: function(query, options) {
        options = options || {};

        // guard against client-side DOS: hard limit to 50
        if (options.limit) {
            options.limit = Math.min(50, Math.abs(options.limit));
        } else {
            options.limit = 50;
        }

        // TODO fix regexp to support multiple tokens
        var regex = new RegExp(query, 'i');
        // console.log(options)
        let students =  Collection.Student.find({
            $or: [{
                khmerName: {
                    $regex: regex
                }
            },{
                latinName: {
                    $regex: regex
                }
            },{
                telephone: {
                    $regex: regex
                }
            }]
        }, options);
        if(students.count()> 0) {
            students.forEach(function (student) {
                let file = Files.findOne(student.photo);
                student.img =  file ? file.url() : '';
                // console.log(student);
            });
            return students.fetch();
        }
        return [];
    }
});