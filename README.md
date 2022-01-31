# Projeto-de-Testes-de-API
Exercício para realizar testes automatizados de API


Projeto de Testes de API
Cenários:
1 - Realizar uma requisição do tipo GET
Realizar uma requisição no endpoint https://jsonplaceholder.typicode.com/comments
pesquisando pelo atributo name: alias odio sit
Validar o statuscode = 200 e o email do objeto retornado

2 – Realizar uma requisição do tipo POST
Realizar um post no endpoint https://jsonplaceholder.typicode.com/users enviando os valores
no body
Validar o statuscode = 201 e o id retornado
OBS: Os dados enviados via POST NÃO são persistidos no server, fique tranquilo.

3 - Realizar uma requisição do tipo PUT
Realizar um put no endpoint https://jsonplaceholder.typicode.com/users alterando os valores
dos campos: email, lat e lng do usuário com id = 5
Validar o statuscode = 200 e os dados alterados

OBS: Os dados enviados via POST NÃO são persistidos no server, fique tranquilo.
OBSERVAÇÕES

a) O projeto deve ser publicado no github ou gitlab.
b) Salvar evidencias do teste (report).