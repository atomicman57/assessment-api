import Base from './base.controller';
import User from '../models/user.model';
class UserController extends Base {
  constructor(model) {
    super(model);
  }
}

export default new UserController(User);
