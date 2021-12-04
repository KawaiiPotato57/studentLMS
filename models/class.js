var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var classSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    // subject:{
    //     type: String,
    //     enum: ['Science','Maths','Urdu']
    // },
    teacher: {
       type:[{
           tid: {type: mongoose.Types.ObjectId,
        ref: 'Teacher'}
}    ]
    },
    students: {
    type:[
        {
            
            sid: {
                type: mongoose.Types.ObjectId,
                ref: 'Student'
            }
        }
    ]
    }});

module.exports = mongoose.model('Class', classSchema);