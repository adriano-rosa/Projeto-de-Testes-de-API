/// <reference types="cypress" />

const payloadUpdateUsers = require('../payloads/update-users.json');

function updateUser(idUser) {
    return cy.request({
        method: 'PUT', 
        url: `https://jsonplaceholder.typicode.com/users/${idUser}`,
        failOnStatusCode: false, 
        body: payloadUpdateUsers
   })
}

export { updateUser };