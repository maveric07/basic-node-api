// const request = require('supertest'); // Library to test HTTP APIs
// const app = require('../index');      // Import our API

// // Test Suite
// describe('GET /', () => {
//     it('should return Hello, CI/CD!', async () => {
//         const res = await request(app).get('/');  // Simulate GET request to '/'
//         expect(res.statusCode).toEqual(200);      // Check if response status is 200 (OK)
//         expect(res.body).toHaveProperty('message', 'Hello, CI/CD!'); // Check response message
//     });
// });
const server = require('../index'); // Import the server
const request = require('supertest');

describe('GET /', () => {
    it('should return Hello, CI/CD!', async () => {
        const res = await request(server).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello, CI/CD!');
    });

    afterAll(() => {
        server.close(); // Close the server after the test
    });
});
