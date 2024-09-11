import {inserirLocacao} from "../../repository/locacaoRepository.js";
import { validarLocacao } from "../../validation/locacao/locacaoValidation.js";


export default async function inserirLocacaoService(locacaoObj) {
  
  validarLocacao(locacaoObj);

  let id = inserirLocacao(locacaoObj);
  return id;

}