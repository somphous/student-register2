rabbitRoutes.route('/userToRole', {
    name: "userToRole",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "userToRole"});
    },
    breadcrumb: {
        title: 'userToRole',
        parent:'home'
    }
});
rabbitRoutes.route('/userToRoleInsert', {
    name: "userToRoleInsert",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "userToRoleInsert"});
    },
    breadcrumb: {
        title: 'userToRoleInsert',
        parent:'userToRole'
    }
});

rabbitRoutes.route('/userToRoleUpdate/:id', {
    name: "userToRoleUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "userToRoleUpdate"});
    },
    breadcrumb: {
        title: 'userToRoleUpdate',
        parent:'userToRole'
    }

});
