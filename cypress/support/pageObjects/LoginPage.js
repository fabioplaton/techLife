class LoginPage {
    
    visit(){
        cy.visit('http://13.37.224.17:4200/')
    }

    alunoEmail(email){
        cy.get('[id="email"]').type(email)
    }

    alunoSenha(senha){
        cy.get('[id="password"]').type(senha)
    }

    clicarEntrar(){
        cy.get('[class="btn btn-dark w-100"]').click()
    }

    verificarLogin(){
        cy.get('[class="mt-5"]').should('contains.text', 'Painel do Aluno')
    }

    verificarErrorLogin(){
        cy.get('[class="error"]').should('contains.text', 'Login ou senha invalidos')
    }

    verificarAlunoBloqueado() {
        cy.get('[class="error"]').should('contains.text', 'Usuário bloqueado')
    }
}

export default LoginPage