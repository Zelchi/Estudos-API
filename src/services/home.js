import fs from "fs";

function verificadorHome(req, res, dadosAtuais, novoDado) {
  // Verifica se o novo dado tem ID e NOME
  let id = novoDado.id;
  const nome = novoDado.nome;
  if (id === null || id === undefined || nome === null || nome === undefined) {
    res.status(400).send('ID e NOME são obrigatórios.');
    return;
  }

  // Verifica se o ID e NOME são strings
  if (typeof novoDado.id !== 'string' || typeof novoDado.nome !== 'string') {
    res.status(400).send('ID e NOME devem ser strings.');
    return;
  }

  if (isNaN(parseFloat(id))) {
    res.status(400).send('ID deve ser um número.');
    return;
  }

  // Verifica se o ID já existe
  const idExiste = dadosAtuais.find((dado) => dado.id === novoDado.id);
  if (idExiste !== null && idExiste !== undefined) {
    res.status(409).send('ID já existe');
    return;
  }
}

function getTodosHome() {
  return JSON.parse(fs.readFileSync("home.json"));
}

function setTodosHome(dados) {
  fs.writeFileSync("home.json", JSON.stringify(dados));
}

export { getTodosHome, setTodosHome, verificadorHome };