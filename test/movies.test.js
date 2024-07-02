// movies.test.js
import request from 'supertest';
import { expect } from 'chai';
import { sequelize, Movie } from '../models/models.js';
import app from '../index.js';

describe('Movies API', () => {
  before(async () => {
    await sequelize.sync({ force: true });
  });

  beforeEach(async () => {
    await Movie.destroy({ where: {} });
  });

  it('should create a new movie', async () => {
    const res = await request(app)
      .post('/movies')
      .send({
        name: 'Inception',
        description: 'A mind-bending thriller',
        date_creation: '2010-07-16',
        note: 9,
        category: 'Sci-Fi'
      });
    expect(res.status).to.equal(201);
    expect(res.body.message).to.equal('Movie created successfully');
  });

  it('should get a movie by id', async () => {
    const movie = await Movie.create({
      name: 'Inception',
      description: 'A mind-bending thriller',
      date_creation: '2010-07-16',
      note: 9,
      category: 'Sci-Fi'
    });

    const res = await request(app).get(`/movies/${movie.id}`);
    expect(res.status).to.equal(200);
    expect(res.body.name).to.equal('Inception');
  });

});
