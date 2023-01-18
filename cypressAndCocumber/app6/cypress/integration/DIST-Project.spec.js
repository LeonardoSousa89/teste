/**
 * artigos e aulas para devOps

    artigos:
    https://dev.to/llxd/iniciando-em-testes-automatizados-em-jsreact-cypress-e-playwright-pt-br-4hg9
    Capcom.com
    https://aws.amazon.com/pt/getting-started/hands-on/deploy-react-app-cicd-amplify/


    aulas:
    CI/CD with jenkins:https://www.youtube.com/watch?v=Fu-zLPzh7Rc
    CI/CD with jenkins:https://www.youtube.com/watch?v=xWCQpSDArb4
    deploy netlify/nginx:https://www.youtube.com/watch?v=0iWOynMAYio
    CI/CD:https://www.youtube.com/watch?v=ySFRmoa0rsk
    CI/CD with jenkins and AWS:https://www.youtube.com/watch?v=9Nc_xhjZP2Y&t=41s
    CI/CD with github ACTIONS:https://www.youtube.com/watch?v=Oe-Yu3YP0YQ
*/


describe('should be test correctly',()=>{
    it('should be run ok', ()=>{
        cy.visit('https://dist-project.netlify.app/signup')
    })

    // it('should be insert data', ()=>{
    //     cy.visit('http://localhost:3000/')

    //     cy.get("#inputNome").type('fulano')
    //     cy.get("#inputIdade").type(15)

    //     cy.get('.MuiButton-label').click()
    // })

    // it('should be delete data', ()=>{
    //     cy.visit('http://localhost:3000/')

    //     cy.get('.MuiButtonBase-root').click()
    // })

    // it('should be denie insert', ()=>{
    //     cy.visit('http://localhost:3000/')

    //     cy.get("#inputNome").type('ful')
    //     cy.get("#inputIdade").type(5)

    //     cy.get('.MuiButton-label').click()  
    // })
})

