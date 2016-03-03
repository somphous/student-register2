Meteor.methods({
    outStandingRpt(asAt){
        let data = {};
        let totalOsAmount = 0;

        asAt = moment(asAt).toDate(); //convert to international date

        data.header = {
            date: moment(asAt).format('DD/MM/YYYY') // format tov jea 02/03/2016
        };

        let selector = {
            regDate: {$lte: asAt} //ស្វែងរក Register ដែលតូចជាងឬស្មើ asAt ex: Wed Mar 02 2016 00:00:00 GMT+0700 (ICT)
        };
        let option = {sort: {regDate: 1}};

        let tempContent = Collection.Register.find(selector, option);
        //[{_id: '1', regDate: '02/04/2016'}, {_id: '2', regDate: '03/04/2016'}]
        let content = [];
        tempContent.forEach(function (obj) {
            //check  last payment
            let lastPaid = Collection.Payment.findOne({
                registerId: obj._id,
                paidDate: {$lte: asAt}
            }, {sort: {paidDate: -1}}); //{_id: '1', regDate: '02/04/2016', osAmount: 10}, undefined
            if (lastPaid) {
                // check os amount
                if (lastPaid.osAmount > 0) {
                    obj.osAmount = lastPaid.osAmount;
                    content.push(obj);
                }
            } else {
                obj.osAmount = obj.amount;
                content.push(obj);
            }

            // let registerId = Collection.Register.find(obj.registerId);
            // //check lastpaid
            // let lastPaid = Collection.Payment.findOne(
            //     {registerId: obj._id},
            //     {sort:{_id: -1}}
            // ); //PaymentID
            //
            // if(lastPaid){
            //     if(lastPaid.osAmount>0){
            //         totalOsAmount += lastPaid.osAmount;
            //         content.push(lastPaid);
            //     }
            // }

            //find student
            let studentDoc = Collection.Student.findOne(obj.studentId);
            obj._student = studentDoc;

            //find subject
            let subjectDoc = Collection.Subject.findOne(obj.subjectId);
            obj._subject = subjectDoc;


        });
        data.content = content;
        data.osAmount =totalOsAmount ;

        return data;

    }
});