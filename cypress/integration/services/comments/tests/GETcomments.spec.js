// importar a requiest
import * as GETComments from '../requests/GETcomments.request';

describe('GET Comments', () => {
    it('Realizar uma requisição do tipo GET', () => {       
        GETComments.allComments().then((resGetAllComments) => { 

            // Encontrar a forma de fazer um foreach no json
            // para encontrar o usuário 'alias odio sit'
            // e validar o email retornado no objeto
            expect(resGetAllComments.status).to.eq(200);
            expect(resGetAllComments.body).to.be.not.null;
            
        }).then(response => {
            cy.log(response.body.id);
        })
    });
});