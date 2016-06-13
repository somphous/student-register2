rabbitRoutes.route('/activeStudentRpt', {
    name: "activeStudentRpt",
    action: function (params, queryParams) {
        // if(Roles.userIsInRole(Meteor.userId(),['Report'])){
        BlazeLayout.render('mainLayout', {content: "activeStudentRpt"});
        // }
        // else {
        //     FlowRouter.go('home');
        // }
    },
    breadcrumb: {
        title: 'Active Student Report',
        parent:'home'
    }
});
rabbitRoutes.route('/activeStudentRptGen', {
    name: "activeStudentRptGen",
    action: function (params, queryParams) {
        // if(Roles.userIsInRole(Meteor.userId(),['Report'])){
        BlazeLayout.render('reportLayout', {content: "activeStudentRptGen"});
        // }
        // else {
        //     FlowRouter.go('home');
        // }
    }
});