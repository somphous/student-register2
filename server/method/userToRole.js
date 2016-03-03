Meteor.methods({
    //insert
    'userToRole.insert': function(insertDoc) {
        Roles.addUsersToRoles(insertDoc.usersId, insertDoc.roles);
    },

    //Update
    'userToRole.update': function(updateDoc) {
        console.log(updateDoc);
        Roles.setUserRoles(updateDoc.$set.usersId, updateDoc.$set.roles);
    },
    //Remove
    'userToRole.remove': function (userId) {
        let roles=['Setting','Data','Report','Role'];
        Roles.removeUsersFromRoles(userId, roles)    }
});
