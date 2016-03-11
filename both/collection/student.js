Collection.Student = new Mongo.Collection('student');
Schema.Student = new SimpleSchema({
    khmerName: {
        type: String,
        label: "Khmer Name"
    },
    latinName: {
        type: String,
        label: "Latin Name"
    },
    gender: {
        type: String,
        label: "Gender",
        autoform: {
            type: "select",
            options: function () {
                return [
                    {label: "Male", value: 'M'},
                    {label: "Female", value: 'F'}
                ];
            }
        }
    },
    birthDate: {
        type: Date,
        label: "Date Of Birth",
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
    maritalStatus: {
        type: String,
        label: "Marital Status",
        autoform: {
            type: "select",
            options: function () {
                return [
                    {label: "Single", value: 'single'},
                    {label: "Married", value: 'married'}
                ];
            }
        }
    },
    telephone: {
        type: String,
        label: "Telephone",
        optional: true
    },
    email: {
        type: String,
        label: "Email",
        optional: true
    },
    currentAddress: {
        type: Number,
        label: "Crrent Address",
        optional: true
    },
    emergencyContact: {
        type: Number,
        label: "Emergency Contact",
        optional: true
    }
});
Collection.Student.attachSchema(Schema.Student);