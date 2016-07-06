Collection.Attendance.permit(['insert', 'update', 'remove'])
    .ifHasRole('Setting')
    .apply();