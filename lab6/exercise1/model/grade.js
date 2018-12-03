
const mongoose = require('mongoose');

const gradeSchema = mongoose.Schema({
    name: { type: String, required: true},
    course: { type: String, required: true},
    grade: { type: Number, required: true}
})

module.exports = mongoose.model('Grade',gradeSchema);
