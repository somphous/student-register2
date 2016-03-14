Meteor.startup(function () {
    if (Meteor.users.find().count() <= 0) {
        let superId = Accounts.createUser({
            username: 'super',
            email: 'super@learn.com',
            password: 'super123'
        });
        Roles.addUsersToRoles(superId, ['Setting', 'Data', 'Report', 'super'])
    }
});