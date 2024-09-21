import LoginPage from "../support/pageObjects/LoginPage"
import PainelDoAluno from "../support/pageObjects/PaineldoAluno"

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

describe('Acessar a lista de aulas e os materiais das aulas - Access the list of classes and class materials', () => {
  let config
  const paineldoaluno = new PainelDoAluno()
  const loginpage = new LoginPage()

  before(() => {
    cy.fixture('config').then((data) => {
      config = data
    })
  })  

  beforeEach(() => {
    loginpage.visit()
    loginpage.alunoEmail(config.email)
    loginpage.alunoSenha(config.password)
    loginpage.clicarEntrar()
  })

  it('TC01 - Acessando uma aula - Accessing a class', () => {
    //verificando se estou na página da lista de aulas
    //checking if I'm on the class list page
    paineldoaluno.verificarListaAulas()
    //Clicando na Aula 1 
    //Clicking on Class 1 
    paineldoaluno.Aula1()
    //verificar se esta na página para assistir a aula selecionada
    //check if you are on the page to watch the selected class
    paineldoaluno.verificarAssistirAula()
    //verificar se esta na página da aula 1 
    //check if you are on the class 1 page
    paineldoaluno.verificarSeAula9QA()
  })

})

describe('acessando/download de materiais em PDF - accessing/downloading PDF materials', () => {
  let config
  const paineldoaluno = new PainelDoAluno()
  const loginpage = new LoginPage()

  before(() => {
    cy.fixture('config').then((data) => {
      config = data
    })
  })  

  beforeEach(() => {
    loginpage.visit()
    loginpage.alunoEmail(config.email)
    loginpage.alunoSenha(config.password)
    loginpage.clicarEntrar()
    paineldoaluno.Aula1()
  })

  it('TC01 - verificando se existe materiais para download - checking if there are download materials', () => {
    // verifica se existe uma lista
    // checkin if a list exist
    paineldoaluno.verficarArquivosDownloads()
    //verifica se existe um link dentro da lista
    //checks if there is a link within the list
    paineldoaluno.verificarExistenciaDeLink()
    //clicando no arquivo para downlod
    //clicking on the file to download
    paineldoaluno.clicarNoLinkArquivo()
    //verifica se arquivo abre em nova aba
    //check if file opens in new tab
    paineldoaluno.verificaArquivoEmNovaAba()
    //verifica se arquivo foi baixado
    //checks if file has been downloaded
    paineldoaluno.verificaDowloadArquivo()
  })
    
})

describe('acessando/download dos videos da aula - accessing/downloading class videos', () => {
  let config
  const paineldoaluno = new PainelDoAluno()
  const loginpage = new LoginPage()

  before(() => {
    cy.fixture('config').then((data) => {
      config = data
    })
  })  

  beforeEach(() => {
    loginpage.visit()
    loginpage.alunoEmail(config.email)
    loginpage.alunoSenha(config.password)
    loginpage.clicarEntrar()
    paineldoaluno.Aula1()
  })

  it('TC01 - Verificar se o video está rodando na página - Check if the video is playing on the page', () => {
    //verificar se existe um video
    //check if there is a video
    paineldoaluno.verificiarVideo()
    //clicar no vídeo
    //click on video
    paineldoaluno.clicarNoVideoAula9QA()
    //verificar se o vídeo abriu em nova aba
    //check if the video opened in a new tab
    paineldoaluno.VerificarVideoAbertoNovaAba()
    //verificar dowload de video
    //check video download
    paineldoaluno.verificarDownloadVideo()
  })
})

describe('Interação com comentários - Interaction with comments', () => {
  let config
  const paineldoaluno = new PainelDoAluno()
  const loginpage = new LoginPage()

  before(() => {
    cy.fixture('config').then((data) => {
      config = data
    })
  })  

  beforeEach(() => {
    loginpage.visit()
    loginpage.alunoEmail(config.email)
    loginpage.alunoSenha(config.password)
    loginpage.clicarEntrar()
    paineldoaluno.Aula1()
  })

  it('TC01 - Interagindo com a seção de comentários - Interacting with the comments section', () => {
    paineldoaluno.VerificarCampoComentarios()
    paineldoaluno.VerificarCampoParaDigitar()
    paineldoaluno.VerificarComentario()
    
  })

  it('TC02 - escrever um comentário na aula - write a comment in class', () =>  {
    //escrevendo um comentário
    //writing a comment
    //paineldoaluno.fazerComentario('Excelente conteúdo! Foi uma aula muito enriquecedora')
    //paineldoaluno.clicarBotaoAdicionarComentario()
    paineldoaluno.verificarComentarioIncluido()
  })

})