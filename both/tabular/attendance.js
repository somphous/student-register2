TabularTables.Attendance = new Tabular.Table({
    name: "Attendance",
    collection: Collection.Attendance,
    autowidth: false,
    columnDefs:[
        {
            'width': '1px',
            'targets': 0
        }
    ],
    columns: [
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.attendanceAction
        },
        {data: "_id", title: "ID"},
        {
            data: "attendanceDate",
            title: "Attendance Date",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('YYYY/MM/DD');
                } else {
                    return "Never";
                }
            }
        },
        {
            data: "_student",
            title: "Name",
            render(val){
                if (!_.isUndefined(val)) {
                    return val.khmerName;
                }
                return '';
            }
        },

        {data: "absent", title: "Absent"},
    ]
});