import Todo from "../models/todo.model";
import User from "../models/user.model";

class Validator {
    static validateUser = (req, res, next) => {
        const body = req.body;
        let errors = {};
        if (!body.name) {
            errors.name = 'Name is required';
        }

        if (Object.keys(errors).length > 0) {
            return res.status(400).json(errors);
        }
        next();
    }

    static validateTodo = async (req, res, next) => {
        const body = req.body;
        let user;
        let errors = {};

        if (!body.title) {
            errors.title = "Title is required";
        }

        if (!body.description) {
            errors.description = "Description is required";
        }

        if (!body.userId) {
            errors.userId = "User is required";
        }

        try {
            const todo = await Todo.findOne({ name: body.title }).exec();
            if (todo) {
              errors.title = "A Todo with that title already exists";
            }
        } catch (e) {
            console.log(e.message);
        }

        try {
            user = await User.findById(body.userId)
            req.body.user = user
        } catch (e) {
            console.log(e)
            errors.user = 'User does not exist'
        }

        if (Object.keys(errors).length > 0) {
            return res.status(400).json(errors);
        }
        next();
    }
}

export default Validator;