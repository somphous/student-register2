Schema.UserToRole = new Tabular.Table({
    name: "Role",
    collection: Meteor.users,
    columns: [
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.usersAction
        }
    ]
});