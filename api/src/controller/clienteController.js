import alterarInfoClienteService from "../service/cliente/alterarInfoClienteService.js";
import deletarClienteService from "../service/cliente/deletarClienteService.js";
import inserirClienteService from "../service/cliente/inserirClienteService.js";
import listarClientePorIdService from "../service/cliente/listarClientePorIdService.js";
import listarClientePorNomeService from "../service/cliente/listarClientePorNomeService.js";
import listarClienteService from "../service/cliente/listarClienteService.js";

import { Router } from "express";

const endpoints = Router();

endpoints.post('/cliente', async (req, resp) => {
  
  try {
    
    let clienteObj = req.body;
    let id = await inserirClienteService(clienteObj);

    resp.send({
      id: id
    })

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.get('/cliente', async (req, resp) => {

  try {
    
    let x = await listarClienteService();

    resp.status(200).send(x);

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.get('/cliente/buscar', async (req, resp) => {

  try {

    let nome = req.query.nome;

    let x = await listarClientePorNomeService(nome);

    resp.status(200).send(x);

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.get('/cliente/buscar/:id', async (req, resp) => {

  try {

    let id = req.params.id;

    let x = await listarClientePorIdService(id);

    resp.status(200).send(x);

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.put('/cliente/alterar/:id', async (req, resp) => {

  try {
    
    let id = req.params.id;
    let clienteObj = req.body;

    await alterarInfoClienteService(clienteObj, id);

    resp.status(200).send();

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.delete('/cliente/deletar/:id', async (req, resp) => {

  try {
    
    let id = req.params.id;

    await deletarClienteService(id);

    resp.status(200).send();

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})





export default endpoints;