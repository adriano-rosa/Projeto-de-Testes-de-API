/// <reference types="cypress"/>

const payloadAddUsers = require('../payloads/add-users.json')

function addUsers() {
    return cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/users',
        failOnStatusCode: false,
        body: payloadAddUsers
    })
}

export { addUsers };