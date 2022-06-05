import supertest from 'supertest';

import { faas } from './index';

const request = supertest(faas);

describe('GET /', () => {
  it('responds with JSON', async () => {
    const res = await request.get('/');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'ok' });
  });
});
