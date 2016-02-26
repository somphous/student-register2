Meteor.methods({
    //Update
    'userToRole.update': function (updateDoc) {
        Roles.setUserRoles(updateDoc.usersId, updateDoc.roles);
    },
    // //Remove
    // 'userToRole.remove': function (removeDoc) {
    //     Roles.removeUsersFromRoles(removeDoc._userId,removeDoc.roles)
    // }
});
