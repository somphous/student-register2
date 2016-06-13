Meteor.methods({
    activeStudentRpt(asAt){
        let data = {};
        let total = 0;

        asAt = moment(asAt).toDate(); //convert to international date

        data.header = {
            date: moment(asAt).format('DD/MM/YYYY') // format tov jea 02/03/2016
        };

        let selector = {
            statusDate: {$lte: asAt} //ស្វែងរក Register ដែលតូចជាងឬស្មើ asAt ex: Wed Mar 02 2016 00:00:00 GMT+0700 (ICT)
        };
        let option = {sort: {statusDate: 1}};

        // let tempContent = Collection.Status.find(selector, option);
        // //[{_id: '1', regDate: '02/04/2016'}, {_id: '2', regDate: '03/04/2016'}]
        // let content = [];
        // tempContent.forEach(function (obj) {
        //     if (obj.status == 'Active') {
        //         total = total + 1;
        //         content.push(obj);
        //     }
        //
        // });
        // data.footer = total;
        // data.content = content;
        // return data;

        let tempContent = Collection.Status.aggregate([{$match: {status: {$in: ['Active']}}}, {
            $group: {
                _id: '$status',
                count: {$sum: 1},
                students:{
                    $addToSet: '$$ROOT'
                }
            }
        }]);
        data.content = tempContent;
        return data;
    }
});