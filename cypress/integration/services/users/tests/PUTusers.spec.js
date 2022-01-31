import * as PUTusers from '../requests/PUTusers.request'
import * as GETusers from '../requests/GETusers.request'

describe('PUT User', () => {
    it('Realizar uma requisição do tipo PUT', () => {
        GETusers.GetAllUsers().then((resAllUser) => {
            PUTusers.updateUser(resAllUser.body[4].id).should((resUpdateUser) => {
                expect(resUpdateUser.status).to.eq(200);
                expect(resUpdateUser.body).to.be.not.null;
                expect(resUpdateUser.body.email).to.eq('adriano@testeapi.com');
                expect(resUpdateUser.body.address.geo.lat).to.eq('-77.7777');
                expect(resUpdateUser.body.address.geo.lng).to.eq('88.8888');
            })
        })
    })
})