Collection.Student = new Mongo.Collection('student');
Schema.Student = new SimpleSchema({
    khmername: {
        type: String,
        label: "Khmer Name"
    },
    latinname: {
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
        type: Number,
        label: "Telephone",
        optional: true
    },
    email: {
        type: Number,
        label: "Email",
        optional: true
    }
});
Collection.Student.attachSchema(Schema.Student);