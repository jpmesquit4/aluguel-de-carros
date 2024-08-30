import {inserirLocacao} from "../../repository/locacaoRepository.js";

export default async function inserirLocacaoService(locacaoObj) {
  
  let id = inserirLocacao(locacaoObj);
  return id;

}