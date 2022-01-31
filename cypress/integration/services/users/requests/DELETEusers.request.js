/// <reference types="cypress"/>

function deleteUser(idUser) {
    return cy.request({
        method: 'DELETE',
        url: `https://jsonplaceholder.typicode.com/users/${idUser}`,
        failOnStatusCode: false
    })
}

export { deleteUser };