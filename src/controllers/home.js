import { getTodosHome, setTodosHome, verificadorHome } from '../services/home.js';

function getHome(req, res) {
    try {
        const dadosAtuais = getTodosHome();
        res.send(dadosAtuais);
    } catch (error) {
        res.status(500).send('Erro no servidor');
        res.send(error.message);
    }
}

function getHomeID(req, res) {
    try {
        const dadosAtuais = getTodosHome();
        const id = req.params.id;
        const resultado = dadosAtuais.find((dado) => dado.id === id);
        if (resultado === null || resultado === undefined) {
            res.status(404).send('ID não encontrado');
            return;
        }
        res.send(resultado);
    } catch (error) {
        res.status(500).send('Erro no servidor');
        res.send(error.message);
    }
}

function postHome(req, res) {
    try {
        const dadosAtuais = getTodosHome(); // Puxa os dados atuais
        const novoDado = req.body; // Puxa o novo dado
        verificadorHome(req, res, dadosAtuais, novoDado); // Verifica se o novo dado é válido

        dadosAtuais.push(novoDado); // Insere o novo dado
        setTodosHome(dadosAtuais); // Salva os novos dados

        res.send('Dado inserido com sucesso');
    } catch (error) {
        res.status(500).send('Erro no servidor');
        res.send(error.message);
    }
}

function patchHome(req, res) {
    try {
        let dadosAtuais = getTodosHome(); // Puxa os dados atuais
        const novoDado = req.body; // Puxa o novo dado
        // verificadorHome(req, res, dadosAtuais, novoDado); // Verifica se o novo dado é válido

        const indexDado = dadosAtuais.findIndex((dado) => dado.id === novoDado.id); // Pega o índice do registro a ser modificado
        if (indexDado === -1) {
            return res.status(404).send('Registro não encontrado');
        }

        const dadosAtualizados = { ...dadosAtuais[indexDado], ...novoDado }; // Atualiza os dados
        dadosAtuais[indexDado] = dadosAtualizados; // Atualiza o registro no array

        setTodosHome(dadosAtuais); // Salva todos os dados atualizados

        res.send('Dado atualizado com sucesso');
    } catch (error) {
        res.status(500).send('Erro no servidor');
        res.send(error.message);
    }
}

function deleteHome(req, res) {
    try {
        let dadosAtuais = getTodosHome(); // Puxa os dados atuais
        const id = req.params.id; // Puxa o ID do registro a ser deletado

        const indexDado = dadosAtuais.findIndex((dado) => dado.id === id); // Pega o índice do registro a ser deletado
        if (indexDado === -1) {
            return res.status(404).send('Registro não encontrado');
        }

        dadosAtuais = dadosAtuais.filter((dado) => dado.id !== id); // Remove o registro do array

        setTodosHome(dadosAtuais); // Salva todos os dados atualizados

        res.send('Dado removido com sucesso');
    } catch (error) {
        res.status(500).send('Erro no servidor');
        res.send(error.message);
    }
}

export { getHome, getHomeID, postHome, patchHome, deleteHome };