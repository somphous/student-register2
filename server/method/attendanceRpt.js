Meteor.methods({
    attendanceRpt(fromDate, toDate){
        let data = {};
        let total = 0;

        fromDate = moment(fromDate).toDate();
        toDate = moment(toDate).toDate();

        data.header = {
            date: moment(fromDate).format('DD/MM/YYYY') + ' - ' + moment(toDate).format('DD/MM/YYYY')
        };

        let selector = {
            attendanceDate: {$gte: fromDate, $lte: toDate}
        };
        let option = {sort: {attendanceDate: 1}};

        let tempContent = Collection.Attendance.find(selector, option);

        let content = [];
        tempContent.forEach(function (obj) {

            total +=obj.absent;
            content.push(obj);
    });

        data.footer = {total: total};
        data.content = content;
        return data;
    }
})
;