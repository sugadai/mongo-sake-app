"use strict";

var mongoose = require('mongoose');

var sakeSchema = new mongoose.Schema({
  sakename: {
    type: String,
    required: [true, "日本酒名を入れてください。"],
    unique: true
  },
  saketype: {
    type: String,
    required: [true, "酒の種類を入力して下さい。"],
    match: [/\.*[純米吟醸,純米,純米大吟醸]\.*/]
  },
  completed: {
    type: Boolean,
    "default": false
  }
});
module.exports = mongoose.model("sake", sakeSchema);
//# sourceMappingURL=Task.dev.js.map
