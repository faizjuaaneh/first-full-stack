var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    ID: {
        type: Number,
        required: true
    },

    FullName: {
        type: String,
        requireed: true
    },
    Age: {
        type: Number,
        requireed: true
    },
    Date: {
        type: Date,
        requireed: true
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    married: {
        type: Boolean,
        default: false
    },
  
});
module.exports = mongoose.model("student", studentSchema);