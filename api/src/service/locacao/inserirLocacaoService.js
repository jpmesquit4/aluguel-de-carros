import {inserirLocacao, listarLocacoesPorIdCliente } from "../../repository/locacaoRepository.js";
import { validarLocacao } from "../../validation/locacao/locacaoValidation.js";


export default async function inserirLocacaoService(locacaoObj) {
  
  validarLocacao(locacaoObj);

  let registros = await listarLocacoesPorIdCliente(locacaoObj.idCliente);
  console.log(registros)
  if (registros.length > 0)
    throw new Error("Ja existe locação cadastrado com esse nome.");
    

  let id = inserirLocacao(locacaoObj);
  return id;

}