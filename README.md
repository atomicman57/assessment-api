# Todo-api

# Setup

- Rename `.env.sample` to `.env` and update the content
- `npm start` for production and `npm run start:dev` for development

# API Endpoints

This API is versioned.

## V1 Endpoints
Prefix the endpoint with `/api/v1/`
### Users
- `GET /users` - get all users
- `POST /users` - create a user
- `PUT /users/:id` - update a user with the user id
- `DELETE /users/:id` - delete a user with the user id

### Todo
- `GET /todos` - get all todos
- `POST /todos` - create a todo
- `PUT /todos/:id` - update a todo with the todo id
- `DELETE /todos/:id` - delete a todo with the todo id