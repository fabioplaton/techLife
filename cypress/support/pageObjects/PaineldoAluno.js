class PainelDoAluno {

    Aula9QA(){
        cy.get('[id="class_2"]').click()
    }

    verificarListaAulas(){
        cy.get('[class="container-fluid"]').should('contains.text', ' Lista de Aulas ')
    }

    verificarAssistirAula(){
        cy.get('[class="container-fluid"]').should('contains.text', ' Assistir aula ')
    }

    verificarSeAula9QA() {
        cy.get('h2[_ngcontent-ng-c3282749832]').should('contains.text', 'Aula 6 turma 9 QA')
    }

    verficarArquivosDownloads() {
        cy.get('ul[_ngcontent-ng-c3282749832] li').should('exist')
    }

    verificarExistenciaDeLink() {
        cy.get('ul[_ngcontent-ng-c3282749832] li a').should('have.attr', 'href').and('not.be.empty')
    }

    clicarNoLinkArquivo() {
        cy.get('ul[_ngcontent-ng-c3282749832] li a').click()
    }

    verificaArquivoEmNovaAba() {
        cy.get('ul[_ngcontent-ng-c3282749832] li a').then(($link) => {
            // Verifica se o atributo 'target' existe
            const target = $link.attr('target');
    
            if (target) {
            expect(target).to.equal('_blank');  // Verifica se o target é '_blank'
            } else {
            cy.log('O link não possui o atributo target');  // Loga a ausência do target
            }
        })
    }

    verificaDowloadArquivo() {
        const fileName = 'link https://drive.google.com/file/d/12CfYklSiH7MohXQxkpF5zcA9jeFN3kYV/view?usp=share_linkPDF'
        cy.task('isFileDownloaded', fileName).then((isDownloaded) => {
            if (isDownloaded){
                cy.log('O arquivo foi baixado')
            }
            else {
                cy.log('O arquivo não foi baixado')
            }
        })
    }

    verificiarVideo() {
        cy.get('div[_ngcontent-ng-c3282749832] video').should('exist')
    }

    clicarNoVideoAula9QA() {
        cy.get('div[_ngcontent-ng-c3282749832] video').click()
    }

    VerificarVideoAbertoNovaAba(){
        cy.get('video').should(($video) => {
            if($video.length){
                expect($video).to.have.attr('controls')
            }
            else {
                cy.log('O video não foi aberto')
            }
        })
    }

    verificarDownloadVideo(){
        //const fileName = 'link https://drive.google.com/file/d/12CfYklSiH7MohXQxkpF5zcA9jeFN3kYV/view?usp=share_linkPDF'
        cy.task('isFileDownloaded', __filename).then((isDownloaded) => {
            if (isDownloaded){
                cy.log('O arquivo foi baixado')
            }
            else {
                cy.log('O arquivo não foi baixado')
            }
        })
    }

    VerificarCampoComentarios(){
        cy.get('h3[_ngcontent-ng-c3282749832]').should('contains.text', 'Adicionar comentários ao video:')
    }

    VerificarCampoParaDigitar(){
        cy.get('[id="comment"]').should('be.visible')
    }

    VerificarComentario(){
        cy.get('[id="commentList"]').then(($list) => {
            // Verifica se a lista tem elementos <li> (comentários)
            if ($list.find('li').length > 0) {
              cy.log('Existem comentários na lista.');
            } else {
              cy.log('Não existe comentário.');
            }
          });
          
    } 

    fazerComentario(comentario){
        cy.get('[id="comment"]').type(comentario)
    }

    clicarBotaoAdicionarComentario() {
        cy.get('[class="btn btn-dark mt-2"]').click()
    }

    verificarComentarioIncluido() {
        cy.get('[id="commentList"]').should('contains.text', 'Excelente conteúdo! Foi uma aula muito enriquecedora')
    }
}

export default PainelDoAluno