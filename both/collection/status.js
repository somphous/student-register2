Collection.Status=new  Mongo.Collection('status');
Schema.Status=new SimpleSchema({
    statusDate:{
        type:Date,
        label:'Status Date',
        defaultValue: moment().toDate(),
        autoform: {
            type: "bootstrap-datetimepicker",
            afFieldInput: {
                dateTimePickerOptions: {
                    format: 'DD/MM/YYYY',
                    pickTime: false
                }
            }
        }
    },
    status:{
        type:String,
        label:'Status'
    },
    // description:{
    //     type: String,
    //     label: 'Description',
    //     optional: true
    // },
    description: {
        type: String,
        label: "Description",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'summernote',
                class: 'editor',
                settings: {
                    height: 130,
                    placeholder:'Text here',
                    toolbar: [
                        //[groupname, [button list]]
                        ['style', ['bold', 'italic', 'underline']],
                        ['font', ['strikethrough']],
                        ['fontsize', ['fontsize']],
                        ['color', ['color']],
                        ['para', ['ul', 'ol', 'paragraph']],
                        ['misc', ['fullscreen']]
                    ]
                }
            }
        }
    },

    studentId:{
        type: String,
        label: 'Stduent Id'
    },
    registerId:{
        type: String,
        label: 'Register Id'
    },
    _student: {
        type: Object,
        optional: true,
        blackbox: true
    }
});
Collection.Status.attachSchema(Schema.Status);