//Alertify
Template.student.onRendered(function () {
    // Create new  alertify
    createNewAlertify('student');
});

Template.studentAction.events({
    'click #js-update': function () {
        FlowRouter.go('studentUpdate', {id: this._id});
    },
    'click .jsRemove': function (error, result) {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Student.remove({_id: self._id});
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    },
    'click #js-show': function () {
        Meteor.call('findOne', 'Collection.Student', {_id: this._id}, {}, function (error, student) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.student(renderTemplate(Template.studentShow, student))
                    .set({
                        title: fa('eye', ' Student')
                    });
            }
        });
    }

});
//Update
Template.studentUpdate.onCreated(function () {
    let studentId = FlowRouter.getParam("id");
    this.subscribe("student", studentId);
});

Template.studentUpdate.helpers({
    studentDoc: function () {
        var studentId = FlowRouter.getParam('id');
        var student = Collection.Student.findOne(studentId);
        return student;
    }
});
//Show
Template.studentShow.onCreated(function () {
    this.subscribe('students');

});

Template.studentShow.helpers({
    data: function () {
        return Collection.Student.findOne(this._id);

    },
    currentAddress: function () {
        var str = "<table class='table table-bordered'><thead>" +
            // "<tr>" +
            "House Number :" + this.currentAddress.numberHouse+"<br>"+
            "Group Number :" + this.currentAddress.groupHouse +"<br>"+
            "Village :" + this.currentAddress.village +"<br>"+
            "Commune :" + this.currentAddress.commune +"<br>"+
            "District :" + this.currentAddress.district +"<br>"+
            "Province :" + this.currentAddress.province +

            // "</tr>" +
            "</thead><tbody>";
            str += '<tr>' +
        '</tr>';
        str += "</tbody></table>";
        return new Spacebars.SafeString(str);
    },
    emergencyContact: function () {
        var str = "<table class='table table-bordered'><thead>" +
            // "<tr>" +
            "Name :" + this.emergencyContact.name+"<br>"+
            "Gender :" + this.emergencyContact.gender +"<br>"+
            "Relation :" + this.emergencyContact.relation +"<br>"+
            "Telephone :" + this.emergencyContact.telephone +"<br>"+
            "Email :" + this.emergencyContact.email +

            // "</tr>" +
            "</thead><tbody>";
            str += '<tr>' +
        '</tr>';
        str += "</tbody></table>";
        return new Spacebars.SafeString(str);
    }
});

//hook
AutoForm.hooks({
    studentInsert: {//id autoform
        onSuccess(formType, id){
            //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            alertify.success('Successfully Added');
            // FlowRouter.go('student');
        },
        onError(formType, error){
            alertify.error(error.message);
            //Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    },

    studentUpdate: {//id autoform
        onSuccess(formType, id){
            //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            alertify.success('Successfully Added');
            FlowRouter.go('student');
        },
        onError(formType, error){
            alertify.error(error.message);
            //Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    }
});


