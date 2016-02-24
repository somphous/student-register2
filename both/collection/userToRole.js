Schema.UserToRole = new SimpleSchema({
    usersId: {
        type: String,
        label: "User",
        autoform: {
            type: "select",
            options: function () {
                let users = Meteor.users.find();
                let list = [];
                users.forEach(function (obj) {

                    var userId = obj._id;
                    // obj.emails.forEach((email)=> { //es6
                    obj.emails.forEach(function (email) {
                        list.push({label: email.address, value: obj._id})
                    });
                });

                return list;
            }
        }
    },

    roles: {
        type: [String],
        label: "Roles",
        autoform: {
            type: "select",
            multiple: true,
            options: function () {
                return [
                    {label: "Data", value: 'Data'},
                    {label: "Setting", value: 'Setting'},
                    {label: "Report", value: 'Report'}
                ];
            }
        }
    }
});