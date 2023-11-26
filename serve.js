const express = require('express');
const livereload = require('livereload');

const app = express();
const server = livereload.createServer();

// Defina a pasta raiz do seu projeto
const publicDir = __dirname;

// Configure o servidor Express para servir arquivos estáticos
app.use(express.static(publicDir));

// Monitorar os arquivos HTML, CSS e JavaScript e recarregar a página quando necessário
server.watch(publicDir);

// Inicie o servidor na porta 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor de desenvolvimento está rodando na porta ${port}.`);
});