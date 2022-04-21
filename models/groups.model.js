const mongoose = require('mongoose');

const groupsSchema = mongoose.Schema({
    student_id:[
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref:"students"
        }
    ],
       
    
    time:String

})

const Groups = mongoose.model('groups', groupsSchema);
module.exports = Groups;