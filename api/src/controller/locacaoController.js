import { Router } from "express";
import inserirLocacaoService from "../service/locacao/inserirLocacaoService.js";
import listarLocacoesService from "../service/locacao/listarLocacoesService.js";
import listarLocacoesPorNomeService from "../service/locacao/listarLocacoesPorNomeService.js";
import listarLocacoesPorCpfService from "../service/locacao/listarLocacoesPorCpfService.js";

const endpoints = Router();

endpoints.post('/locacao', async (req, resp) => {

  try {
    
    let locacaoObj = req.body;

    let id = await inserirLocacaoService(locacaoObj);

    resp.send({
      id: id
    });

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.get('/locacao', async (req, resp) => {

  try {
    
    let x = await listarLocacoesService();
    resp.send(x);

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.get('/locacao/nome/buscar', async (req, resp) => {

  try {

    let nome = req.query.nome;

    let x = await listarLocacoesPorNomeService(nome);
    resp.send(x);

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.get('/locacao/cpf/buscar', async (req, resp) => {

  try {

    let cpf = req.query.cpf;

    let x = await listarLocacoesPorCpfService(cpf);
    resp.send(x);

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})



export default endpoints;