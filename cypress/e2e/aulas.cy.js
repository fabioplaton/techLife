import LoginPage from "../support/pageObjects/LoginPage"
import PainelDoAluno from "../support/pageObjects/PaineldoAluno"

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