import request from 'supertest';
import server from './';

describe('GET /', () => {
  afterAll(() => {
    server.close();
  });

  it('should status code equal 200', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  })
});
