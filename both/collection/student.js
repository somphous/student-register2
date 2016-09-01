Collection.Student = new Mongo.Collection('student');
Schema.Student = new SimpleSchema({
    khmerName: {
        type: String,
        label: 'Khmer Name'
    },
    latinName: {
        type: String,
        label: 'Latin Name'
    },
    gender: {
        type: String,
        label: 'Gender',
        autoform: {
            type: 'select2',
            options: function () {
                return [
                    {label: '(Select One)', value: ''},
                    {label: 'Male', value: 'M'},
                    {label: 'Female', value: 'F'}
                ];
            }
        }
    },
    birthDate: {
        type: Date,
        label: 'Date Of Birth',
        autoform: {
            type: 'bootstrap-datetimepicker',
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
        label: 'Marital Status',
        autoform: {
            type: 'select2',
            options: function () {
                return [
                    {label: '(Select One)', value: ''},
                    {label: 'Single', value: 'single'},
                    {label: 'Married', value: 'married'}
                ];
            }
        }
    },
    telephone: {
        type: String,
        label: 'Telephone',
    },
    email: {
        type: String,
        label: 'Email',
        optional: true
    },
    currentAddress: {
        type: Object,
        optional: true
    },
    'currentAddress.numberHouse': {
        type: String,
        optional: true
    },
    'currentAddress.groupHouse': {
        type: String,
        optional: true
    },
    'currentAddress.village': {
        type: String,
        optional: true
    },
    'currentAddress.commune': {
        type: String,
        optional: true
    },
    'currentAddress.district': {
        type: String,
        optional: true
    },
    'currentAddress.province': {
        type: String,
        optional: true
    },
    emergencyContact: {
        type: Object,
        optional: true
    },
    'emergencyContact.name': {
        type: String,
        optional: true
    },
    'emergencyContact.gender': {
        type: String,
        optional: true,
        autoform: {
            type: 'select2',
            options: function () {
                return [
                    {label: '(Select One)', value: ''},
                    {label: 'Male', value: 'M'},
                    {label: 'Female', value: 'F'}
                ];
            }
        }
    },
    'emergencyContact.relation': {
        type: String,
        optional: true
    },
    'emergencyContact.telephone': {
        type: String,
        optional: true
    },
    'emergencyContact.email': {
        type: String,
        optional: true
    },
    photo: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Files',
                accept: 'image/*'
            }
        },
        optional: true
    }

});
Collection.Student.attachSchema(Schema.Student);

Files.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function(userId, doc, fieldNames, modifier){
        return true;
    },
    download: function (userId) {
        return true;
    }
})