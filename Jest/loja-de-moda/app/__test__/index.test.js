const axios=require('axios')



let ID=143

// CMD [ npm test ]

describe('Should be send data from API',()=>{

    it('Should be send data Object from API with method POST', async()=>{

        const response=await axios.default
                                  .post('http://127.0.0.1:8766/loja/inserir-item', {
                                        preco: 789.89,
                                        tipo: "Vestido de Linho lilás",
                                        tamanho: "M",
                                        cor: "lilás",
                                        image_url: "https://firebasestorage.googleapis.com/v0/b/loja-de-moda-4fa2b.appspot.com/o/moda%2Fvestido_lilas.jpg?alt=media&token=062d8ecd-1590-42e8-b4e6-e4e03ad59b3d"
                                    })
                                  .then(res=>res)

        expect(response.status).toBe(201)

    })

})



describe('Should be got data from API',()=>{

    it('Should be get data Object from API with method GET', async()=>{

        const response=await axios.default
                                  .get('http://127.0.0.1:8766/loja/itens')
                                  .then(res=>res)

        expect(response.data).not.toBeNull()
        expect(response.status).toBe(200)

    })

})



describe('Should be got data from API',()=>{

    it('Should be get data Object from API with method GET using by ID', async()=>{

        const response=await axios.default
                                  .get(`http://127.0.0.1:8766/loja/${ID}/item`)
                                  .then(res=>res)

        expect(response.data).not.toBeNull()
        expect(response.status).toBe(200)

    })

})



describe('Should be got data from API',()=>{

    it('Should be get data Object from API with method GET search by size', async()=>{

        const response=await axios.default
                                  .get('http://127.0.0.1:8766/loja/item/tamanho/busca?tamanho=M&page=0')
                                  .then(res=>res)

        expect(response.data).not.toBeNull()
        expect(response.status).not.toBe(404)
        expect(response.status).not.toBe(400)

    })

})



//está falhando
describe('Should be got data from API',()=>{

    it('Should be get data Object from API with method GET search by color', async()=>{

        const response=await axios.default
                                  .get('http://127.0.0.1:8766/loja/item/cor/busca?cor=lilás&page=0')
                                  .then(res=>res)

        expect(response.data).not.toBeNull()
        expect(response.status).toBe(200)

    })

})



describe('Should be update data from API',()=>{

    it('Should be update data Object from API with method PUT', async()=>{

        
        const response=await axios.default
                                  .put(`http://127.0.0.1:8766/loja/${ID}/alterar-item`,{
                                        preco: 1054.75,
                                        tipo: "Vestido de Linho",
                                        tamanho: "P",
                                        cor: "roxo",
                                        image_url: "https://firebasestorage.googleapis.com/v0/b/loja-de-moda-4fa2b.appspot.com/o/moda%2Fvestido_lilas.jpg?alt=media&token=062d8ecd-1590-42e8-b4e6-e4e03ad59b3d"
                                  })
                                  .then(_=>_)

        expect(response.status).toBe(201)

    })

})



describe('Should be del ALL data from API',()=>{

    it('Should be del ALL data Object from API with method DELETE', async()=>{

        const response=await axios.default
                                  .delete('http://127.0.0.1:8766/loja/deletar-todos-itens')
                                  .then(_=>_)

        expect(response.status).toBe(204)

    })

})