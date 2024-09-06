# Social Network API

## Description
This is a RESTful API for a social network web application where users can share their thoughts, react to friends' thoughts, and add friends to their friends list. The API allows the following operations:

- Create, update, delete users and thoughts
- Add reactions to thoughts
- Add or remove friends

## Technologies
- Node.js
- Express.js
- MongoDB
- Mongoose ODM

## How to Run
1. Clone the repository.
2. Install dependencies by running `npm install`.
3. Start the MongoDB server using `mongod`.
4. Start the application by running `npm run start`.
5. Use Insomnia or Postman to test the API routes.

## API Endpoints
### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update user by ID
- `DELETE /api/users/:id` - Delete user by ID

### Thoughts
- `GET /api/thoughts` - Get all thoughts
- `GET /api/thoughts/:id` - Get thought by ID
- `POST /api/thoughts` - Create a new thought
- `PUT /api/thoughts/:id` - Update thought by ID
- `DELETE /api/thoughts/:id` - Delete thought by ID

## Future Improvements
- Add authentication for users
- Implement user notifications
