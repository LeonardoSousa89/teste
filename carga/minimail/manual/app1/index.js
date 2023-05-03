const port=8081

const axios=require('axios')

const obj={
    url_login: 'http://127.0.0.1:34568/login',
    user1: {
        email: 'alura@gmail.com',
        password:  '1234'
    },
    user2: {
        email: 'akitaonrails@gmail.com',
        password:  '12345678'
    },
    user3: {
        email: 'mendesdev89@gmail.com',
        password:  '1234'
    },
}

const user=(url, payload)=>{
        
    axios.default
         .post(url, payload)
         .then(response=>response.data)
         .catch(error=>error)
}

//teste de carga com 9 acessos/s 
/**
 * relatório: com esta carga, 
 *            suporta poucos segundos a alguns minutos 
 *            e depois crashea
 */
function login(){
    setInterval(function(){
      
        //user 1 5 requisições/s
        user(obj.url_login, obj.user1)
        user(obj.url_login, obj.user1)
        user(obj.url_login, obj.user1)

        //user 2 5 requisições/s
        user(obj.url_login, obj.user2)
        user(obj.url_login, obj.user2)
        user(obj.url_login, obj.user2)

        //user 3 5 requisições/s
        user(obj.url_login, obj.user3)
        user(obj.url_login, obj.user3)
        user(obj.url_login, obj.user3)
       
    }, 1000)
}

login()

