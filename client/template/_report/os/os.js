// Generate
Template.osRptGen.helpers({
    data(){
        let data = {};
        let total = 0;

        let asAt = FlowRouter.getQueryParam('asAt');
        asAt = moment(asAt).toDate();

        data.header = {
            date: moment(asAt).format('DD/MM/YYYY')
        };

        let selector = {
            regDate: {$lte: asAt}
        };
        let option = {$sort: {regDate: 1}};

        let tempContent = Collection.Register.find(selector, option);
        let content = [];
        tempContent.forEach(function (obj) {
            // check  last payment
            let lastPaid = Collection.Payment.findOne({registerId:obj._id}, {$sort:{paidDate:-1}});
            if(lastPaid){
                // check os amount
                if(lastPaid.osAmount >0){
                    obj.sumAmount=obj.amount-lastPaid.osAmount;
                    obj.osAmount=lastPaid.osAmount;
                    content.push(obj);
                }
            }else {
                obj.sumAmount=0;
                obj.osAmount=obj.amount;
                content.push(obj);
            }
        });

        data.content = content;
        data.paidAmount = total;

        return data;
    },
    no(index){
        console.log(index);
        return index + 1;
    }
});

//hook
AutoForm.hooks({
        osRpt: {
            onSubmit(insertDoc, updateDoc, currentDoc){
                this.done(null, insertDoc);
            },
            onSuccess(formType, result){
                let query = result;
                let path = FlowRouter.path('osRptGen', {}, query);

                window.open(path, '_blank');
            },
            onError(formType, error){
                alertify.error(error.message);
            }
        }
    }
);
