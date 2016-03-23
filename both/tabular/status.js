TabularTables.Status = new Tabular.Table({
    name: "Status",
    collection: Collection.Status,
    // autowidth: false,
    // columnDefs:[
    //     {
    //         'width': '1px',
    //         'targets': 0
    //     }
    // ],
    columns: [
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.statusAction
        },
        {data: "_id", title: "ID"},
        {
            data: "statusDate",
            title: "Status Date",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('YYYY/MM/DD');
                } else {
                    return "Never";
                }
            }
        },
        {
            data: "status",
            title: "Status"
        },
        {
            data: "description",
            title: "Description"
        },
        {
            data: "_student",
            title: "Student Name",
            render(val){
                if (!_.isUndefined(val)) {
                    return val.latinName;
                }
                return '';
            }
        },
        {
            data: "registerId",
            title: "RegisterId"
        }
    ]
});