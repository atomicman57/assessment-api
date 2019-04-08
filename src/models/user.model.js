import mongoose, { Schema } from 'mongoose';

const user = {
  name: {
    type: String,
    required: true,
  },
};

const userSchema = Schema(user);
const User = mongoose.model('User', userSchema);

export default User;
