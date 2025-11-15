// Importação dos módulos necessários
const http = require('http');
const url = require('url');
const Krisley = require('./krisley.js')

// Instanciação da classe npc Krisley
const krisley = new Krisley();

// Definição do servidor
const myServer = (request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const params = parsedUrl.query;
  if(params.npc === "krisley"){
    const message = params.message
    response.end(krisley.lerMensagem(message))
  }
}

// Função de callback inicial
const initialCallback = () => console.info(`SPIN-BORDER STARTED AT ${new Date().toLocaleString()}`);

http.createServer(myServer).listen(3000, initialCallback)