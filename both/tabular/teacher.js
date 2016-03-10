TabularTables.Teacher = new Tabular.Table({
    name: "Teacher",
    collection: Collection.Teacher,
    columns: [
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
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
        {data: "telephone", title: "Telephone"},
        {data: "subject", title: "Subject"},
        // {
        //     data: "_subject",
        //     title: "Subject Name",
        //     render(val){
        //         if(!_.isUndefined(val)){
        //             return val.name;
        //         }
        //         return '';
        //     }
        // },
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.teacherAction
        }
    ]
});