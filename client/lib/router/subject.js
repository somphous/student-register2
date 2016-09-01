rabbitRoutes.route('/subject', {
    name: "subject",
    action: function (params, queryParams) {
        if(Roles.userIsInRole(Meteor.userId(),['Setting'])){
            BlazeLayout.render('mainLayout', {content: "subject"});
        }
        else {
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: 'Subject',
        parent:'home'
    }
});
