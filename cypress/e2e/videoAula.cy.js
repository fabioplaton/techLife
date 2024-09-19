import LoginPage from "../support/pageObjects/LoginPage"
import PainelDoAluno from "../support/pageObjects/PaineldoAluno"

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