import mongoose, { Schema } from 'mongoose';

const user = {
  name: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
  },
  todos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Todo',
      autopopulate: true,
    },
  ],
};

const userSchema = Schema(user);
userSchema.plugin(require('mongoose-autopopulate'));

const User = mongoose.model('User', userSchema);

export default User;
