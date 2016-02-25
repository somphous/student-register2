TabularTables.User = new Tabular.Table({
    name: "User",
    collection: Meteor.users,
    columns: [
        {data: "_id", title: "ID"},
        {data: "usersId", title: "Email"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.userToRoleAction
        }
    ]
});