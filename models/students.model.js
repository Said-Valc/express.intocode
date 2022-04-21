const mongoose = require('mongoose');
const StudentSchema = mongoose.Schema({
    name:String,
    notes:[
        {
            type:String
        }
    ],
    payment:String,
    status:String,
})

const Students = mongoose.model('students', StudentSchema);
module.exports = Students;