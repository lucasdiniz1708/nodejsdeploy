const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const convidados = ['alice', 'bob', 'charlie', 'david'];

app.get('/', function (req, res) {
  res.send('Hello Worlds');
});

app.get('/convidado/:nome', (req, res) => {
  const nome = req.params.nome;
  const estaNaLista = convidados.includes(nome);
  if (estaNaLista) {
    res.send({ mensagem: 'Sim, você está na lista!' });
  } else {
    res.send({ mensagem: 'Não, você não está na lista!' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});