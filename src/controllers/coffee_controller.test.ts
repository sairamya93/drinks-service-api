import request from 'supertest';
import { app } from '../app';

describe('Test coffeelover API endpoint request', () => {
test('GET should return correct message', async () => {
const res = await request(app).get('/coffeelover');
expect(res.statusCode).toEqual(200);
expect(res.text).toEqual('I like coffee!');
});

test('GET /coffee should return correct object with name Latte', async () => {
    const res = await request(app)
    .get('/coffee')
    .query({ coffeeName: 'Latte' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({drinkType: 'Coffee',name: 'Latte',});
    });

test('GET /coffee should return correct object with name Cappucinno', async () => {
        const res = await request(app)
        .get('/coffee')
        .query({ coffeeName: 'Cappucinno' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({drinkType: 'Coffee',name: 'Cappucinno',});
        });

test('GET /coffee should return default coffee name if no parameter is specified', async () => {
            const res = await request(app)
            .get('/coffee')
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual({drinkType: 'Coffee',name: 'Latte',});
            });
});