Meteor.methods({
    statusRpt(asAt,status){
        let data = {};

        asAt = moment(asAt).toDate(); //convert to international date

        data.header = {
            date: moment(asAt).format('DD/MM/YYYY') // format tov jea 02/03/2016
        };
        let selector = {
            statusDate: {$lte: asAt} //ស្វែងរក status ដែលតូចជាងឬស្មើ asAt ex: Wed Mar 02 2016 00:00:00 GMT+0700 (ICT)
        };
        let option = {sort: {regDate: 1}};
        let temp = Collection.Status.find(selector,option);
        let content = [];
        temp.forEach(function (obj) {
            if(obj.status == status){
                content.push(obj);
            }
            else {
                content.push(obj);
            }
        });
        data.content = content;
        // console.log(data.content);
        return data;
    }
});