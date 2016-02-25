//insert
Meteor.methods({
    'userToRole.insert': function (insertDoc) {
        Roles.addUsersToRoles(insertDoc.usersId, insertDoc.roles);
    },
    'userToRole.update': function (updateDoc) {
        Roles.setUserRoles(updateDoc.usersId, updateDoc.roles);
    }
});
