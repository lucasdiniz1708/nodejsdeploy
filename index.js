const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const convidados = ['Alice', 'Bob', 'Charlie', 'David'];

// Rota para listar todos os convidados
app.get('/convidados', (req, res) => {
  res.json({ convidados });
});

// Rota para procurar um convidado pelo nome
app.get('/convidado/:nome', (req, res) => {
  const nome = req.params.nome.toLowerCase(); // Convertendo para minúsculas para garantir correspondência insensível a maiúsculas e minúsculas
  const estaNaLista = convidados.includes(nome);
  if (estaNaLista) {
    res.json({ mensagem: 'Sim, você está na lista!' });
  } else {
    res.json({ mensagem: 'Não, você não está na lista!' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});