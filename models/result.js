var mongoose = require('mongoose');

var schema = mongoose.Schema;

var resultSchema = new schema({
   
    name: {
        type: String,
        requried: true,
    },
    class:{
        type: mongoose.Types.ObjectId,
        ref : "Class",
    },
    student:{
        type: mongoose.Types.ObjectId,
        ref : "Student",
    },
    marks: {
        type : Number,
        default:0,
        required: true, 
        }
    // results:[
    //     {
    //         sid:{
    //             type:mongoose.Types.ObjectId,
    //             ref:"student"
    //         },
    //         classid:{
    //             type: mongoose.Types.ObjectId,
    //             ref:"class",
    //         },
    //         subjectid:{
    //             type:mongoose.Types.ObjectId,
    //             ref:"class",
    //         },
    //         marks:[{
    //             quizMarks : {
    //                 type:mongoose.Types.ObjectId,
    //                 ref:"quiz",
    //             },
    //             assignmentMarks :{
    //                 type: mongoose.Types.ObjectId,
    //                 ref:"assignment",
    //             }}
    //         ]
    //     }        
    // ],
});
module.exports = mongoose.model('Result', resultSchema);