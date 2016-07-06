rabbitRoutes.route('/attendance', {
    name: "attendance",
    action: function (params, queryParams) {
        if(Roles.userIsInRole(Meteor.userId(),['Setting'])){
            BlazeLayout.render('mainLayout', {content: "attendance"});
        }
        else {
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: 'Attendance',
        parent:'home'
    }
});
rabbitRoutes.route('/attendanceInsert', {
    name: "attendanceInsert",
    action: function (params, queryParams) {
        if(Roles.userIsInRole(Meteor.userId(),['Setting'])){
            BlazeLayout.render('mainLayout', {content: "attendanceInsert"});
        }
        else {
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: 'Attendance Insert',
        parent:'attendance'
    },
});
rabbitRoutes.route('/attendanceUpdate/:id', {
    name: "attendanceUpdate",
    action: function (params, queryParams) {
        if(Roles.userIsInRole(Meteor.userId(),['Setting'])){
            BlazeLayout.render('mainLayout', {content: "attendanceUpdate"});
        }
        else {
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: 'Attendance Update',
        parent:'attendance'
    }
});

