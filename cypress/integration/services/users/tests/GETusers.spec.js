import * as GETusers from '../requests/GETusers.request'


describe('GET Users', () => {
    it('Realizar uma requisição do tipo GET', () => {
        GETusers.GetAllUsers().then((resAllUsers) => {
            expect(resAllUsers.status).to.eq(200);
            expect(resAllUsers.body).to.be.not.null;
        })
    });
});

