Meteor.methods({
   paymentRpt(fromDate,toDate){
       let data = {};
       let total = 0;

       fromDate = moment(fromDate).toDate();
       toDate = moment(toDate).toDate();

       data.header = {
           date: moment(fromDate).format('DD/MM/YYYY') + ' - ' + moment(toDate).format('DD/MM/YYYY')
       };

       let selector = {
           paidDate: {$gte: fromDate, $lte: toDate}
       };
       let option = {$sort: {paidDate: 1}};

       let tempContent = Collection.Payment.find(selector, option);
       let content = [];
       tempContent.forEach(function (obj) {

           total += obj.paidAmount;
           // find student
           let studentDoc = Collection.Student.findOne(obj.studentId);
           obj._student = studentDoc;

           // find subject
           let subjectDoc = Collection.Subject.findOne(obj.subjectId);
           obj._subject = subjectDoc;

           content.push(obj);
       });

       data.content = content;
       data.paidAmount = total;

       return data;

   }
});