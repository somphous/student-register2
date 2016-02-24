Template.teacherAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('teacherUpdate', {id: this._id});
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                // Collection.Teacher.remove({_id: self._id}); /// remove by _id?
                Meteor.call('teacher.remove', self._id, function (error, result) {
                    if (!error) {
                        alertify.success('Deleted');
                    }
                })
            },
            function () {
                alertify.error('Cancel');
            });
    }
});

// Insert
// Template.teacherInsert.onCreated(function () {
//     let self = this;
//
//     self.autorun(function () {
//         self.subscribe("teacherList", {});
//     })
// });

//Update
Template.teacherUpdate.onCreated(function () {
    let teacherId = FlowRouter.getParam("id");
    this.subscribe("teacher", teacherId);

    //let selector = {_id: teacherId};//dynamic
    //let selector={};// find all
    //this.subscribe("teacher", selector);
});
Template.teacherUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var teacher = Collection.Teacher.findOne({_id: id});
        return teacher;
    }
});
//hook
AutoForm.hooks({
        teacherInsert: {//id autoform
            // onSubmit: function (insertDoc, updateDoc, CurrentDoc) {
            //     this.event.preventDefault();
            //     Meteor.call('teacher.insert', insertDoc);
            //     this.done();
            // },
            before: {
                insert: function (doc) {
                    doc._id = idGenerator.gen(Collection.Teacher, 3);
                    return doc;
                }
            },
            onSuccess(formType, result){
                alertify.success('Successfully Added');
            },
            onError(formType, error){
                alertify.error(error.message);
            }
        },
        teacherUpdate: {//id autoform
            // onSubmit: function (insertDoc,updateDoc,currentDoc) {
            //     this.event.preventDefault();
            //     Meteor.call('teacher.update',currentDoc._id,updateDoc);
            //     this.done();
            // },

            onSuccess(formType, result){
                alertify.success('Successfully Added');
                FlowRouter.go('teacher');
            },
            onError(formType, error){
                alertify.error(error.message);
            }
        }
    }
)


