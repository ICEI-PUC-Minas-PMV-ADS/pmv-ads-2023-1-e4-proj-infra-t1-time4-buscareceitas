
const supertest = require('supertest');
const app = require('../../src/server');


// TESTE DO GET
test(`GET /api/v1/recipe?titulo=Atum`, async () => {
    const response = await supertest(app).get(`/api/v1/recipe?titulo=Atum`);

    expect(response.statusCode).toEqual(200);
    expect(response.body.lenght).toEqual(1);
})

// TESTE DO POST
test(`POST /api/v1/recipe`,  {
    "titulo": "Teste123456",
    "tempoPreparo": "Teste123456",
    "rendimento": "Teste123456",
    "ingredientes": "Teste123456",
    "modoPreparo": "Teste123456",
    "categoria": "Teste123456",
    "informacoesAdicionais": "Teste123456",
    "usuarioNome": "Teste123456",
    "usuarioEmail": "Teste123456"
  } ,async () => {
    const response = await supertest(app).post(`/api/v1/recipe`);
    expect(response.statusCode).toEqual(200);
})

// TESTE DO PUT
test(`PUT /api/v1/recipe/1`,  {
    "titulo": "Atum com shoyu2",
    "ingredientes": "Uma lata de atum, uma ou duas colheres de shoyu. Se curtir, um pouco de limão também (umas gotinhas).",
    "modoPreparo": "Pega o que você tem - o arroz requentado, a saladinha improvisada e/ou o que for - e coloca no prato. Nele mesmo, você joga o atum que estava na lata (depois de escorrer a água ou o óleo) e tempera com o shoyu. Pronto.",
    "categoria": "Peixe",
    "informacoesAdicionais": "Essa é para os dias quentes, quando sobrou arroz do outro dia. A dica é montar uma saladinha com o que tiver também e ficar feliz de ter uma refeição balanceada em pouquíssimos minutos.",
    "usuarioNome": "Pedro",
    "usuarioEmail": "ryu.123@bol.com.br",
    "tempoPreparo": 5,
    "rendimento": "1 porções"
} ,async () => {
    const response = await supertest(app).put(`/api/v1/recipe/1`);
    expect(response.statusCode).toEqual(200);
})

// TESTE DO DELETE
test(`DELETE /api/v1/recipe/1`, async () => {
    const response = await supertest(app).delete(`/api/v1/recipe/1`);
    expect(response.statusCode).toEqual(200);
})
