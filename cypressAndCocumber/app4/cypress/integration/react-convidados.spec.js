
describe('should be test correctly',()=>{
    it('should be run ok', ()=>{
        cy.visit('http://localhost:3000/')
    })

    it('should be insert data', ()=>{
        cy.visit('http://localhost:3000/')

        cy.get("#inputNome")
          .type('fulano')
        cy.get("#inputIdade")
          .type(15)

        cy.get('.MuiButton-label').click()
    })

    it('should be delete data', ()=>{
        cy.visit('http://localhost:3000/')

        cy.get('.MuiButtonBase-root').click()
    })

    it('should be denie insert', ()=>{
        cy.visit('http://localhost:3000/')

        cy.get("#inputNome")
          .type('ful')
        cy.get("#inputIdade")
          .type(5)

        cy.get('.MuiButton-label').click()  
    })
})

