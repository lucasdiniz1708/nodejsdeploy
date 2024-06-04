const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const convidados = ['Alice', 'Bob', 'Charlie', 'David'];

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/convidado/:nome', (req, res) => {
  const nome = req.params.nome;
  const estaNaLista = convidados.includes(nome);
  if (estaNaLista) {
    res.send({ mensagem: 'Sim, você está na lista!', nome: nome });
  } else {
    res.send({ mensagem: 'Não, você não está na lista!' });
  }
});

// Iniciar o servidor apenas se não estiver no ambiente de produção do Railway
if (!process.env.PORT) {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}