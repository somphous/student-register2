//Alertify
Template.attendance.onRendered(function () {
    // Create new  alertify
    createNewAlertify('attendance'); //attendance is name of alertify

});

//insert
Template.attendance.events({
    'click #js-insert': function (error, result) {

        alertify.attendance(renderTemplate(Template.attendanceInsert))
            .set({
                title: fa('plus', ' Attendance')
            })
            .maximize();
    }
});

Template.attendanceAction.events({
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.Attendance', {_id: this._id}, {}, function (error, attendance) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.attendance(renderTemplate(Template.attendanceUpdate, attendance))
                    .set({
                        title: fa('edit', ' Attendance')
                    })
                    .maximize();
            }
        });
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Attendance.remove({_id: self._id}); /// remove by _id?
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    },
    'click #js-show': function () {
        Meteor.call('findOne', 'Collection.Attendance', {_id: this._id}, {}, function (error, attendance) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.attendance(renderTemplate(Template.attendanceShow, attendance))
                    .set({
                        title: fa('eye', ' Attendance')
                    });
            }
        });
    }
});

//Insert
Template.attendanceInsert.helpers({
    studentId: function () {
        var list = [];
        // list.push({label: "(Select All)", value: ""});
        Collection.Student.find()
            .forEach(function (obj) {
                list.push({label: obj._id + " | " + obj.latinName + ' | ' + obj.khmerName, value: obj._id});
            });

        return list;
        
    }
});

Template.attendanceUpdate.onRendered(function () {
    // $('#register-id').val(this.data.registerId);
});

//Update
Template.attendanceUpdate.helpers({
    // attendance: function () {
    //     return [
    //         {label: 'Active', value: 'Active'},
    //         {label: 'Close', value: 'Close'},
    //         {label: 'Suspend', value: 'Suspend'},
    //         {label: 'Cancel', value: 'Cancel'}
    //     ]
    // }
});

Template.attendanceInsert.onCreated(function () {
    this.subscribe('students');
    this.subscribe('attendances');
    // this.subscribe('registers');
});

//hook
AutoForm.hooks({
        attendanceInsert: {//id autoform
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.success('Successfully Added');
                // FlowRouter.go('attendance');
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }
        },
        attendanceUpdate: {//id autoform
            // before:{
            //     update(doc){
            //         return doc;
            //     }
            //
            // },
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.success('Successfully Added');
                alertify.attendance().close();
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }
        }
    }
);
