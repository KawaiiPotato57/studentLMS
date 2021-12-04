var mongoose = require('mongoose');

var schema = mongoose.Schema;

var assignmentSchema = new schema({
    name: {
        type: String,
        required: true
    },
    submissionDate:{
     type: Date,
     required: true
    },
    assignDate:{
        type: Date,
        required: true,
    },
    submmissions:[
        {
            student:{
                type:mongoose.Types.ObjectId,
                ref:"student"
            },
            class:{
                type: mongoose.Types.ObjectId,
                ref:"class",
            },
            marks:{
                type: Number,
                default:0
            }
        }        
    ],


});
module.exports = mongoose.model('Assignment', assignmentSchema);
