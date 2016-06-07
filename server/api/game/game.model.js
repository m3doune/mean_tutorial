'use strict';

import mongoose from 'mongoose';

var GameSchema = new mongoose.Schema({
  name: String,
  plateform: String,
  genre: Boolean
});

export default mongoose.model('Game', GameSchema);
