import { Router } from "express";
import inserirVeiculoService from "../service/veiculo/inserirVeiculoService.js";
import listarVeiculosService from "../service/veiculo/listarVeiculosService.js";
import listarVeiculosPorModeloService from "../service/veiculo/listarVeiculoPorModeloService.js";
import listarVeiculosPorMarcaService from "../service/veiculo/listarVeiculoPorMarcaService.js";
import listarVeiculosPorPlacaService from "../service/veiculo/listarVeiculoPorPlacaService.js";
import alterarInfoVeiculoService from "../service/veiculo/alterarInfoVeiculoService.js";

const endpoints = Router();


endpoints.post('/veiculo', async (req, resp) => {

  try {
    
    let veiculoObj = req.body;

    let id = await inserirVeiculoService(veiculoObj);

    resp.send({
      id: id
    })

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.get('/veiculo', async (req, resp) => {

  try {

    let x = await listarVeiculosService();
    resp.send(x);

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.get('/veiculo/modelo/buscar', async (req, resp) => {

  try {

    let modelo = req.query.modelo;

    let x = await listarVeiculosPorModeloService(modelo);
    resp.send(x);

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.get('/veiculo/marca/buscar', async (req, resp) => {

  try {

    let marca = req.query.marca;

    let x = await listarVeiculosPorMarcaService(marca);
    resp.send(x);

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.get('/veiculo/placa/buscar', async (req, resp) => {

  try {

    let placa = req.query.placa;

    let x = await listarVeiculosPorPlacaService(placa);
    resp.send(x);

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.put('/veiculo/:id', async (req, resp) => {

  try {
    
    let id = req.params.id;
    let veiculoObj = req.body;

    await alterarInfoVeiculoService(veiculoObj, id);

    resp.status(200).send();

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})



export default endpoints;