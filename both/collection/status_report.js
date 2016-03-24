Schema.StatusRpt = new SimpleSchema({
    asAt: {
        type: Date,
        label: "AsAt Date",
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
        type: String,
        label: 'Status',
        autoform: {
            type: 'select2',
            options: function () {
                return [
                    {label: 'ViewAll', value: 'ViewAll'},
                    {label: 'Active', value: 'Active'},
                    {label: 'Close', value: 'Close'},
                    {label: 'Suspend', value: 'Suspend'},
                    {label: 'Cancel', value: 'Cancel'}
                ];
            }
        }

    }
});
