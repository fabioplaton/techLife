import LoginPage from "../support/pageObjects/LoginPage"

describe('login', () => {
  let config
  const loginpage = new LoginPage()

  before(() => {
    cy.fixture('config').then((data) => {
      config = data
    })
  })  

  beforeEach(() => {
    loginpage.visit()
  })
  
  it('TC01 - Login com sucesso - login successfully', () => {
    //preenchendo o campo email
    //filling in the email field
    loginpage.alunoEmail(config.email)
    //preenchendo o campo senha
    //filling in the password field
    loginpage.alunoSenha(config.password)
    //clicando no botão entrar 
    //clicking the enter button 
    loginpage.clicarEntrar()
    //conferindo se está na página painel do aluno pelo título
    //checking if it is on the student dashboard page by title
    loginpage.verificarLogin()
  })

  it('TC02 - Login com email inválido - Login with invalid email', () => {
   //preenchendo o campo email
    //filling in the email field
    loginpage.alunoEmail('techlife@techlife.pt')
    //preenchendo o campo senha
    //filling in the password field
    loginpage.alunoSenha(config.password)
    //clicando no botão entrar 
    //clicking the enter button 
    loginpage.clicarEntrar()
    //verificando mensagem de erro de login ou senha
    //checking login or password error message
    loginpage.verificarErrorLogin()
  })

  it('TC03 - Login com senha inválida - Login with invalid password', () => {
    //preenchendo o campo email
     //filling in the email field
     loginpage.alunoEmail(config.email)
     //preenchendo o campo senha
     //filling in the password field
     loginpage.alunoSenha('1362389')
     //clicando no botão entrar 
     //clicking the enter button 
     loginpage.clicarEntrar()
     //verificando mensagem de erro de login ou senha
     //checking login or password error message
     loginpage.verificarErrorLogin()
  })

  it('TC04 - Login com campos vazios - Login with empty fields', () => {
    //clicando no botão entrar 
    //clicking the enter button 
    loginpage.clicarEntrar()
    //verificando mensagem de erro de login ou senha
    //checking login or password error message
    loginpage.verificarErrorLogin()
  })

  it('TC05 - Login com email vazio - Login with empty email', () => {
    //preenchendo o campo senha
    //filling in the password field
    loginpage.alunoSenha(config.password)
    //clicando no botão entrar 
    //clicking the enter button 
    loginpage.clicarEntrar()
    //verificando mensagem de erro de login ou senha
    //checking login or password error message
    loginpage.verificarErrorLogin()
  })

  it('TC06 - Login com senha vazia - Login with empty password', () => {
    //preenchendo o campo email
    //filling in the email field
    loginpage.alunoEmail(config.email)
    //clicando no botão entrar 
    //clicking the enter button 
    loginpage.clicarEntrar()
    //verificando mensagem de erro de login ou senha
    //checking login or password error message
    loginpage.verificarErrorLogin()
  })

  it('TC07 - Login com senha em caixa alta - Login with capital password', () => {
    //preenchendo o campo email
    //filling in the email field
    loginpage.alunoEmail(config.email)
    //preenchendo o campo senha
    //filling in the password field
    loginpage.alunoSenha('TECHLIFE')
    //clicando no botão entrar 
    //clicking the enter button 
    loginpage.clicarEntrar()
    //verificando mensagem de erro de login ou senha
    //checking login or password error message
    loginpage.verificarErrorLogin()
  })

  it('TC08 - Login com senha com caracteres especiais - Login with password with special characters', () => {
    //preenchendo o campo email
    //filling in the email field
    loginpage.alunoEmail(config.email)
    //preenchendo o campo senha
    //filling in the password field
    loginpage.alunoSenha('><?!!/\\.;')
    //clicando no botão entrar 
    //clicking the enter button 
    loginpage.clicarEntrar()
    //verificando mensagem de erro de login ou senha
    //checking login or password error message
    loginpage.verificarErrorLogin()
  })

  it('TC09 - Login com senha curta - Login with short password', () => {
    //preenchendo o campo email
    //filling in the email field
    loginpage.alunoEmail(config.email)
    //preenchendo o campo senha
    //filling in the password field
    loginpage.alunoSenha('1234')
    //clicando no botão entrar 
    //clicking the enter button 
    loginpage.clicarEntrar()
    //verificando mensagem de erro de login ou senha
    //checking login or password error message
    loginpage.verificarErrorLogin()
  })

  it('TC10 - Login com usuário bloqueado - Login with blocked user', () => {
    //preenchendo o campo email
    //filling in the email field
    loginpage.alunoEmail('fabio.bloqueado@techlife.com')
    //preenchendo o campo senha
    //filling in the password field
    loginpage.alunoSenha(config.password)
    //clicando no botão entrar 
    //clicking the enter button 
    loginpage.clicarEntrar()
    //verificando se o usuário está bloqueado
    //checking if the user is blocked 
    loginpage.verificarAlunoBloqueado()
  })
  
})