import mongoose, { Schema } from 'mongoose';

const todo = {
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ['HIGH', 'MEDIUM', 'LOW'],
    default: 'LOW',
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
  },
  completed_at: {
    type: Date,
  },
  user: {
    type: Schema.Types.ObjectId, ref: 'User',
  },
};

const todoSchema = Schema(todo);
const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
