// verbo/metodo - endpoint/ motivo(request)
///<reference types="cypress"/>

function allComments() {
    // Responsável por fazer a requisição ao serviço
    return cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/comments',
        failOnStatusCode: false, // Para não quebrar o teste quando status code <> de 200
    }) 
}

function getNameComment(nameComment) {
    return cy.request({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/comments/${nameComment}`,
        failOnStatusCode: false, // Para não quebrar o teste quando status code <> de 200
        body: payloadGetComments,
    })
}

export { allComments };
export { getNameComment };
