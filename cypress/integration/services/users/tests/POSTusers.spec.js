import * as POSTUsers from '../requests/POSTusers.request';

describe('POST Users', () => {
    it('Realizar uma requisição do tipo POST', () => {
        POSTUsers.addUsers().should((response) => {
            
            expect(response.status).to.eq(201);
            
        }).then(response => {
            cy.log(response.body.id);
        })
    });
} );