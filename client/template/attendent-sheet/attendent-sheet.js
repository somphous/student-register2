Template.attendent.helpers({
    data(){
        Meteor.call('attendent', function (error, result) {
            if (!error) {
                Session.set('attendentResult', result);
            }
            else {
                Bert.alert(error.message, 'danger', 'growl-button-right');
            }
        });
        return Session.get('attendentResult');
    },
    no(index){
        return index + 1;
    },
    th(){
        var str="";
        for(i=1;i<=31;i++){
          str += '<th style="width:27px">' + i + '</th>';
        }
        return new Spacebars.SafeString(str);
    },
    td(){
        var str="";
        for(i=1;i<=31;i++){
          str += '<td style="width:27px">' +""+ '</td>';
        }
        return new Spacebars.SafeString(str);
    },
    thismonth(){
        let today= new Date();
        return today;
        // return moment(today.format('mmmm'));
    }

    
});