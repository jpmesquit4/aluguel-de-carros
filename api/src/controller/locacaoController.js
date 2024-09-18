import { Router } from "express";
import inserirLocacaoService from "../service/locacao/inserirLocacaoService.js";
import listarLocacoesService from "../service/locacao/listarLocacoesService.js";
import listarLocacoesPorNomeService from "../service/locacao/listarLocacoesPorNomeService.js";
import listarLocacoesPorCpfService from "../service/locacao/listarLocacoesPorCpfService.js";
import deletarLocacaoService from "../service/locacao/deletarLocacaoService.js";
import alterarInfoLocacaoService from "../service/locacao/alterarInfoLocacaoService.js";
import finalizarLocacaoService from "../service/locacao/finalizarLocacaoService.js";
import listarAllInfoLocacoesService from "../service/locacao/listarAllInfoLocacoesService.js";
import listarInputNomeCpfService from "../service/locacao/listarInputNomeCpfService.js";
import listarInputModeloService from "../service/locacao/listarInputModeloService.js";
import buscarClientesFiltradoService from "../service/locacao/buscarLocacaoFiltradaService.js";

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

endpoints.get('/locacao/input/:nome', async (req, resp) => {

  try {

    let nome = req.params.nome;

    let x = await listarInputNomeCpfService(nome);
    resp.send(x);

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.get('/locacao/input', async (req, resp) => {

  try {

    let modelo = req.query.modelo;

    let x = await listarInputModeloService(modelo);
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

endpoints.get('/locacao/buscar', async (req, resp) => {
  try {
    let filtro = req.query.filtro;

    let veiculos = await buscarClientesFiltradoService(filtro);
    resp.send(veiculos);
  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }
});

endpoints.delete('/locacao/:id', async (req, resp) => {

  try {
    
    let id = req.params.id;

    await deletarLocacaoService(id);

    resp.status(200).send();

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.put('/locacao/:id', async (req, resp) => {

  try {
    
    let locacaoObj = req.body;
    let id = req.params.id;

    await alterarInfoLocacaoService(locacaoObj, id);
    resp.status(200).send();

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.put('/locacao/finalizar/:id', async (req, resp) => {

  try {
    
    let locacaoObj = req.body;
    let id = req.params.id;

    await finalizarLocacaoService(locacaoObj, id);
    resp.status(200).send();

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.get('/locacao/allinfo/:id', async (req, resp) => {

  try {
    
    let id = req.params.id;

    let response = await listarAllInfoLocacoesService(id);
    resp.send(response)

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})



export default endpoints;