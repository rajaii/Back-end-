const request = require('supertest');
const server = require('../api/server.js');

describe('todoList route is working properly', () => {
    it('returns the proper http status code on get', async () => {
        const code = 500; 
        const res = await request(server).get('/api/todolist');
        expect(res.status).toBe(code);
    })
    
    it('returns proper data type', async () => {
        const d = "application/json"
        const res = await request(router).post('/api/todolist');
        expect(res.type).toBe(d)
    })
})