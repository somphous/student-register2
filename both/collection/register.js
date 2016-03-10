Collection.Register = new Mongo.Collection('register');
Schema.Register = new SimpleSchema({
    studentId: {
        type: String,
        label: "StudentID",
        autoform: {
            type: "select",
            options: function () {
                var data = Collection.Student.find();
                var list = [];

                data.forEach(function (obj) {
                    list.push({label: obj._id + ' : ' + obj.name, value: obj._id})
                });
                return list;
            }
        }
    },
    subjectId: {
        type: String,
        label: "SubjectID",
        autoform: {
            type: "select",
            options: function () {
                var data = Collection.Subject.find();
                var list = [];

                data.forEach(function (obj) {
                    list.push({label: obj._id + ' : ' + obj.name + ' | Price: ' + obj.price, value: obj._id});
                });
                return list;
            }
        }
    },
    teacherId: {
        type: String,
        label: "TeacherID",
        autoform: {
            type: "select",
            options: function () {
                var data = Collection.Teacher.find();
                var list = [];

                data.forEach(function (obj) {
                    list.push({label: obj._id + ' : ' + obj.name, value: obj._id})
                });

                return list;
            }
        }
    },
    regDate: {
        type: Date,
        label: "Register Date",
        defaultValue: moment().toDate(),
        autoform: {
            type: "bootstrap-datetimepicker",
            afFieldInput: {
                dateTimePickerOptions: {
                    format: 'DD/MM/YYYY',
                    pickTime: false
                }
            }
        }
    },
    day: {
        type: String,
        label: "Study Day",
        autoform: {
            type: "select",
            options: function () {
                return [
                    {label: "Monday-Friday", value: 'mondayFriday'},
                    {label: "Saturday-Sunday", value: 'saturdaySunday'}
                ];
            }

        }
    },
    time: {
        type: String,
        label: "Study Time",
        autoform: {
            type: "select",
            options: function () {
                let day = AutoForm.getFieldValue('day');
                if (day == "mondayFriday") {
                    return [
                        {label: "8:00-9:00am", value: '8:00-9:00'},
                        {label: "9:00-10:00am", value: '9:00-10:00'},
                        {label: "10:00-11:00am", value: '10:00-11:00'},
                        {label: "11:00-12:00am", value: '11:00-12:00'},
                        {label: "2:00-3:00pm", value: '2:00-3:00'},
                        {label: "3:00-4:00pm", value: '3:00-4:00'},
                        {label: "4:00-5:00pm", value: '4:00-5:00'},
                        {label: "5:00-6:00pm", value: '5:00-6:00'}
                    ];
                }
                else {
                    return [
                        {label: "8:00-10:00am", value: '8:00-10:00'},
                        {label: "10:00-12:00am", value: '10:00-12:00'},
                        {label: "2:00-4:00pm", value: '2:00-4:00'},
                        {label: "4:00-6:00pm", value: '4:00-6:00'},
                    ];
                }
            }
        }
    },
    price: {
        type: Number,
        decimal: true,
        label: "Price",
        autoform: {
            type: "inputmask",
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            },
            readonly: true,
            value: function () {
                let subjectId = AutoForm.getFieldValue('subjectId');
                let data = Collection.Subject.findOne(subjectId);
                if (data) {
                    return data.price;
                }
                return 0;
            }
        }
    },
    discount: {
        type: Number,
        label: "Discount Amount",
        defaultValue: function () {
            let discount = AutoForm.getFieldValue('discount');
        },
        autoform: {
            type: "inputmask",
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            }
        }
    },
    amount: {
        type: Number,
        label: "Amount",
        decimal: true,

        autoform: {
            readonly: true,
            value: function () {
                let price = AutoForm.getFieldValue('price');
                let discount = AutoForm.getFieldValue('discount');
                return price - discount;
            },
            type: "inputmask",
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            }

        }
    },
    additionalInfo: {
        type: String,
        label: "Additional Info",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'summernote',
                class: 'editor',
                settings: ''
            }
        }
    }

});
Collection.Register.attachSchema(Schema.Register);