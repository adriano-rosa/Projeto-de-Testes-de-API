/*
    Esta requisição do tipo DELETE não foi solicitada no exercício,
    foi feita somente para fins de aprendizado.
*/

import * as DELETEusers from '../requests/DELETEusers.request'
import * as GETusers from '../requests/GETusers.request'

describe('DELETE User', () => {
    it('Realizar uma requisição do tipo DELETE', () => {
        GETusers.GetAllUsers().then((resAllUser) => {
            DELETEusers.deleteUser(resAllUser.body[0].id).should((resDeleteUser) => {
                expect(resDeleteUser.status).to.eq(200);
            })
        })
    });
});