const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const movies = require('./films.json');
const { Sequelize, DataTypes } = require('sequelize');

app.use(bodyParser.json());

// Connexion à la base de données
const sequelize = new Sequelize('sabergrou_webservice', 'sabergrou', 'WebS3rvice', {
  host: 'mysql-sabergrou.alwaysdata.net',
  dialect: 'mysql',
});

// Récupération des films (listing)
app.get('/movies', (req, res) => {
  res.json(movies);
});

app.use(bodyParser.json());

// Synchronisation du modèle avec la base de données
sequelize.sync()
  .then(() => {
    console.log('Database and tables synced');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

// Récupération d'un film par ID
app.get('/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  const movie = movies.find((m) => m.id === movieId);

  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
});

// Modification d'un film par ID
app.put('/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  const index = movies.findIndex((m) => m.id === movieId);

  if (index !== -1) {
    movies[index] = { ...movies[index], ...req.body };
    res.json({ message: 'Movie updated successfully' });
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
});

// Création d'un nouveau film
app.post('/movies', (req, res) => {
  const newMovie = req.body;
  newMovie.id = movies.length + 1;
  movies.push(newMovie);
  res.status(201).json({ message: 'Movie created successfully' });
});

// Suppression d'un film par ID
app.delete('/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  movies = movies.filter((m) => m.id !== movieId);
  res.json({ message: 'Movie deleted successfully' });
});

// Gestion des erreurs de validation
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    res.status(422).json({ message: 'Validation error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});