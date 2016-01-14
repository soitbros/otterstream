var mongoose = require('mongoose');

var otterSchema = mongoose.Schema({
  name: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Otter', otterSchema);
