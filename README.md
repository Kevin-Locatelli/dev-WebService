# dev-WebService
 
# Movie API

This is a RESTful API for managing movies. It allows you to perform CRUD operations on a collection of movies.

## Endpoints

### GET /movies

Returns a list of all movies.

### GET /movies/:id

Returns a single movie by ID.

### GET /movies?page=1&pageSize=10

Returns movies on page one.

### GET /movies/category/:category

Returns movies by category.

### GET /movies/namesearch/:name:

Returns movies by description.

### GET /movies/descsearch/:name:

Returns movies by name.

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
2. Install dependencies with `npm i`.
3. Start the server with `node .`.