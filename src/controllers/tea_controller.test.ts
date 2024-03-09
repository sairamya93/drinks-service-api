import request  from "supertest";
import { app } from "../app";

describe ('Test tea lover API endpoint request' ,() => {
    test('GET should return correct message', async () => {
        const res = await request(app).get('/tealover');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('I like Tea!');
    });

    test('GET /tea should return correct object with name Green', async () => {
        const res = await request(app)
        .get('/tea')
        .query({ teaName: 'Green' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({drinkType: 'Tea',name: 'Green',});
        });

    test('GET /tea should return default object with name Black', async () => {
            const res = await request(app)
            .get('/tea')
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual({drinkType: 'Tea',name: 'Black',});
            });
});