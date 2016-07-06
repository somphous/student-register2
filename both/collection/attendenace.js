Collection.Attendance = new Mongo.Collection('attendance');
Schema.Attendance = new SimpleSchema({
    attendanceDate: {
        type: Date,
        label: 'Attendance Date',
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
    studentId: {
        type: String,
        label: 'Student Name',
        autoform: {
            type: 'select2',

        }
    },
    absent: {
        type: Number,
        label: 'Absent'
        // optional: true
    },
    _student: {
        type: Object,
        optional: true,
        blackbox: true
    }
});
Collection.Attendance.attachSchema(Schema.Attendance);