//insert
Meteor.methods({
    'userToRole.insert': function (insertDoc) {
        Roles.addUsersToRoles(insertDoc.usersId, insertDoc.roles);
    },
    'userToRole.udpate': function (udpateDoc) {
        Roles.setUserRoles(udpateDoc.userId, udpateDoc.roles);
    }
});
