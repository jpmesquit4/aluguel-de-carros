import express from 'express';

import clienteController from './controller/clienteController.js'
import veiculoController from './controller/veiculoController.js'
import locacaoController from './controller/locacaoController.js'

export default function adicionarRotas(servidor) {
  servidor.use(clienteController);
  servidor.use(veiculoController);
  servidor.use(locacaoController);
}