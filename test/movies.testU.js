import { expect } from 'chai';
import request from 'supertest';
import app from '../index.js';

describe('Movies API', () => {

  it('should create a new movie', async () => {
    const newMovie = {
      name: 'Inception',
      description: 'A mind-bending thriller',
      date_creation: '2010-07-16',
      note: 9,
      category: 'Science Fiction'
    };

    const res = await request(app)
      .post('/movies')
      .send(newMovie);

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('message').equal('Movie created successfully');
    expect(res.body).to.not.have.property('movie');
  });

});
