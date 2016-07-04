Meteor.methods({
    attendent(){
        let total = 0;
        let data = {};

        // title
        data.title = Collection.Company.findOne();

        // hearer
        data.header = new Date();

        // content
        let tempcontent = Collection.Status.find();
        let content = [];
        tempcontent.forEach(function (obj) {
            if (obj.status == 'Active') {
                // total = total + 1;
                content.push(obj);

            }
            // content.push(obj);


            //find student
            let studentDoc = Collection.Student.findOne(obj.studentId);
            obj._student = studentDoc;

        });
        // footer
        // data.footer = total;

        data.content = content;
        return data;


    }
});