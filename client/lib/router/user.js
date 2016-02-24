
rabbitRoutes.route('/userToRole', {
    name: "userToRole",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "userToRole"});
    }
});
