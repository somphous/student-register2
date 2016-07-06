Collection.Attendance.before.insert((userId, doc) => {
    doc._id = idGenerator.gen(Collection.Attendance, 3);
});