rabbitRoutes.route('/registerRpt', {
    name: "registerRpt",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "registerRpt"});
        if(Roles.userIsInRole(Meteor.userId(),['Report'])){
        }
        else {
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: 'Register Report',
        parent:'home'
    }
});
rabbitRoutes.route('/registerRptGen', {
    name: "registerRptGen",
    action: function (params, queryParams) {
        if(Roles.userIsInRole(Meteor.userId(),['Report'])){
            BlazeLayout.render('reportLayout', {content: "registerRptGen"});
        }
        else {
            FlowRouter.go('home');
        }
    }
});