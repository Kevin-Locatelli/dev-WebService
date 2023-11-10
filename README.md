# dev-WebService
 
# Movie API

This is a RESTful API for managing movies. It allows you to perform CRUD operations on a collection of movies.

## Endpoints

### GET /movies

Returns a list of all movies.

### GET /movies/:id

Returns a single movie by ID.

### PUT /movies/:id

Updates a movie by ID.

### POST /movies

Creates a new movie.

### DELETE /movies/:id

Deletes a movie by ID.

## Error Handling

The API handles validation errors by returning a 422 status code with a "Validation error" message.

## Dependencies

- express
- body-parser
- sequelize

## Usage

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the server with `npm start`.