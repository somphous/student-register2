TabularTables.User = new Tabular.Table({
    name: "User",
    collection: Meteor.users,
    columns: [
        {data: "_id", title: "ID"},
        {
            data: "emails",
            title: "Email",
            render: function (val, type, doc) {
                let address = '';
                val.forEach(function (email) {
                    address = email.address;
                });

                return address;
            }
        },
        {data: "roles", title: "Roles"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.userToRoleAction
        }
    ]
});