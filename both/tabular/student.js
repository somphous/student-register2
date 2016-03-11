TabularTables.Student = new Tabular.Table({
    name: "Student",
    collection: Collection.Student,
    columns: [
        {data: "_id", title: "ID"},
        {data: "khmername", title: "Khmer Name"},
        {data: "latinname", title: "Latin Name"},
        {data: "gender", title: "Gender"},
        {
            data: "birthDate",
            title: "Date Of Birth",
            render: function(val,type,doc){
                if(val instanceof Date){
                    return moment(val).format('YYYY/MM/DD');
                }else{
                    return "Never";
                }
            }
        },
        {data: "maritalStatus", title: "Marital Status"},
        {data: "telephone", title: "Telephone"},
        {data: "email", title: "Email"},
        {data: "currentAddress", title: "Current Address"},
        {data: "emergencyContact", title: "Emergency Contact"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.studentAction
        }
    ]
});