const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

module.exports = {
  e2e: {
    // Configuração para eventos do Cypress
    setupNodeEvents(on, config) {
      on('task', {
        // Tarefa para verificar se o arquivo foi baixado
        isFileDownloaded(fileName) {
          const downloadsFolder = config.downloadsFolder;
          const filePath = path.join(downloadsFolder, fileName);

          // Verifica se o arquivo existe no diretório de downloads
          if (fs.existsSync(filePath)) {
            return true;  // Arquivo foi encontrado
          }
          return false;  // Arquivo não foi encontrado
        },
      });

      return config;
    },
    downloadsFolder: 'cypress/downloads',  // Configuração do diretório de downloads
  },
};