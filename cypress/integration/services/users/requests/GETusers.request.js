/// <reference types='cypress'/>

function GetAllUsers() {
    return cy.request({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/users/`,
        failOnStatusCode: false,

    })
}

function GetUsersId(idUser) {
    return cy.request({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/users/${idUser}`,
        failOnStatusCode: false,

    })
}

export { GetAllUsers };
export { GetUsersId };