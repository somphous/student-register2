rabbitRoutes.route('/attendanceRpt', {
    name: "attendanceRpt",
    action: function (params, queryParams) {
        if(Roles.userIsInRole(Meteor.userId(),['Report'])){
            BlazeLayout.render('mainLayout', {content: "attendanceRpt"});
        }
        else {
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: 'Attendance Report',
        parent:'home'
    }
});
rabbitRoutes.route('/attendanceRptGen', {
    name: "attendanceRptGen",
    action: function (params, queryParams) {
        // if(Roles.userIsInRole(Meteor.userId(),['Report'])){
        BlazeLayout.render('reportLayout', {content: "attendanceRptGen"});
        // }
        // else {
        //     FlowRouter.go('home');
        // }
    }
});