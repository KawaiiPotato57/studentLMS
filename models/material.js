var mongoose = require('mongoose');

var schema = mongoose.Schema;

var materialSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    class:{
        type: mongoose.Types.ObjectId,
        ref: "Class",
    }
});
module.exports = mongoose.model('Material', materialSchema);