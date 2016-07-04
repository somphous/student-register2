rabbitRoutes.route('/attendent', {
    name: "attendent",
    action: function (params, queryParams) {
        // if(Roles.userIsInRole(Meteor.userId(),['Report'])){
        BlazeLayout.render('reportLayout', {content: "attendent"});
        // }
        // else {
        //     FlowRouter.go('home');
        // }
    }
});