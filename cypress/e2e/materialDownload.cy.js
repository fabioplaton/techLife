import LoginPage from "../support/pageObjects/LoginPage"
import PainelDoAluno from "../support/pageObjects/PaineldoAluno"

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