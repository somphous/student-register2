// let SelectOptMethods = {};
// SelectOptMethods.fee = new ValidatedMethod({
//     name: 'selectOptMethods.register',
//     validate: null,
//     run(options) {
//         if (!this.isSimulation) {
//             this.unblock();
//
//             let list = [], selector = {};
//             let searchText = options.searchText;
//             let values = options.values;
//
//             if (searchText) {
//                 selector = {
//                     _id: {$regex: searchText, $options: 'i'},
//                     // branchId: params.branchId
//                 };
//             } else if (values.length) {
//                 selector = {_id: {$in: values}};
//             }
//
//             let data = Collection.Student.find(selector, {limit: 10});
//             data.forEach(function (value) {
//                 let label = value._id + ' | Name: ' + value.KhmerName;
//                 list.push({label: label, value: value._id});
//             });
//
//             return list;
//         }
//     }
// });