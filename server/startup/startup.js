Meteor.startup(function () {
    if (Meteor.users.find().count() <= 0) {
        let superId = Accounts.createUser({
            username: 'super',
            email: 'super@learn.com',
            password: 'super123',
            approved: true
        });
        Roles.addUsersToRoles(superId, ['Setting', 'Data', 'Report'])
    }
});