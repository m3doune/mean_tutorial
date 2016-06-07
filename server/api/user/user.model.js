'use strict';

import mongoose from 'mongoose';

var UserSchema = new mongoose.Schema({
  provider: String,
  name: String,
  email: String,
  password: String
});

export default mongoose.model('User', UserSchema);
