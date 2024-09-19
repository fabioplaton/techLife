import LoginPage from "../support/pageObjects/LoginPage"
import PainelDoAluno from "../support/pageObjects/PaineldoAluno"

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