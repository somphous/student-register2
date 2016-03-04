TabularTables.UserToRole = new Tabular.Table({
    name: "UserToRole",
    collection: Meteor.users,
    columns: [
        {data: "_id", title: "ID"},
        {data: "username", title: "Name"},
        {data: "roles", title: "Roles"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.userToRoleAction
        }

    ]
});