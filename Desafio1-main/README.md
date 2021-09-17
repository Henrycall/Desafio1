# Desafio 01

## Tecnologias
- Nodejs LTS
- Mongodb latest

## Introdução da problemática

Resumo: Criar uma API REST de consulta de cep.

### Utéis.

Links que serão usados para consumir dados de cep no brasil.

- [Viacep](viacep.com.br/ws/01001000/json/)
- [ApiCep](https://apicep.com/api-de-consulta/)
- [CorreiosApi](https://correiosapi.apphb.com/)

### Critérios

O desenvolvedor terá que criar uma API REST para pesquisar CEP e a mesma terá que retornar o cep do 
usuário solicitante.

API terá um ponto de entrada (ENDPOINT) que receberá o cep digitado pelo o usuário, segue abaixo o modelo.

Exemplo da chamada do endpoint para API criada.
```shell
$ curl http://localhost:3000/api/cep/_aqui_o_cep_do_usuario
```

Exemplo do retorno da solicitação do cliente(usuário).
```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP"
}
```

API terá que integrar com um dos links marcados em úteis.

### Bonus

Caso algum usuário pesquise um cep que já foi pesquisado por outro usuário API terá que retornar-lo sem precisar
realizar a integração novamente.

Exemplo.

- Usuário 1: Pesquisou o cep 63050-222.
  - Na primeira pesquisa API Rest terá que se integrar com um dos links do úteis para trazer o cep correspondente.
- Usuário 2: Pesquisou o cep 63050-222.
  - Na segunda pesquisa API Rest terá que pesquisar esse cep no banco de dados para caso tenha, retornar-lo.



