const express=require('express')
const app=express()

const axios=require('axios')

app.use(express.json())
app.use(express.urlencoded({extended:true}))




let response=async()=>{


    //GET ALL

    await axios.default.get('http://127.0.0.1:8766/loja/itens?page=1&size=2')
               .then(res=>{

                if(res.status === 200){
                    console.log(res.data)
                }
                    
            })
            .catch(err=>console.log(err))



    //GET BY ID

    // await axios.default.get('http://localhost:8766/loja/85/item')
    //            .then(res=>{

    //             if(res.status === 200){
    //                 console.log(res.data)
    //             }
                    
    //         })
    //         .catch(err=>console.log(err))



    //GET BY PESQUISA POR TAMANHO

    // await axios.default.get('http://localhost:8766/loja/item/tamanho/busca?tamanho=M&page=0')
    //            .then(res=>{

    //             if(res.status === 200){
    //                 console.log(res.data)
    //             }
                    
    //         })
    //         .catch(err=>console.log(err))



    //GET BY PESQUISA POR COR

    // await axios.default.get('http://localhost:8766/loja/item/cor/busca?cor=lilás&page=0')
    //            .then(res=>{

    //             if(res.status === 200){
    //                 console.log(res.data)
    //             }
                    
    //         })
    //         .catch(err=>console.log(err))



    //GET BY PESQUISA POR COR

    // await axios.default.get('http://localhost:8766/loja/item/cor-e-tamanho/busca?cor=grafite&tamanho=M&page=0')
    //            .then(res=>{

    //                 if(res.status === 200){
    //                     console.log(res.data)
    //             }
              
    //     })
    //     .catch(err=>console.log(err))



    // DELETE ALL 

    // await axios.default.delete('http://localhost:8766/loja/deletar-todos-itens')
    //         .then(_=>_)
    //         .catch(err=>console.log(err))


        
    // DELETE BY ID 

    // await axios.default.delete('http://localhost:8766/loja/79/deletar-item')
    //            .then(_=>_)
    //            .catch(err=>console.log(err))



    // INSERT DATA 

    // let pecas={

    //     preco: 789.89,
    //     tipo: "Vestido de Linho lilás",
    //     tamanho: "M",
    //     cor: "lilás",
    //     image_url: "https://firebasestorage.googleapis.com/v0/b/loja-de-moda-4fa2b.appspot.com/o/moda%2Fvestido_lilas.jpg?alt=media&token=062d8ecd-1590-42e8-b4e6-e4e03ad59b3d"

    // }

    // await axios.default.post('http://localhost:8766/loja/inserir-item', pecas)
    //            .then(pecas=>console.log(pecas))
    //            .catch(err=>console.log(err))



    // UPDATE DATA 

    // let novaPeca={

    //     preco: 1025.89,
    //     tipo: "Vestido lilás",
    //     tamanho: "P",
    //     cor: "roxo",
    //     image_url: "https://firebasestorage.googleapis.com/v0/b/loja-de-moda-4fa2b.appspot.com/o/moda%2Fvestido_lilas.jpg?alt=media&token=062d8ecd-1590-42e8-b4e6-e4e03ad59b3d"

    // }

    // await axios.default.put('http://localhost:8766/loja/81/alterar-item', novaPeca)
    //            .then(_=>_)
    //            .catch(err=>console.log(err))


 }




app.listen(4200, ()=>{

    console.log(response())

})