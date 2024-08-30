import { listarLocacoes } from "../../repository/locacaoRepository.js";

export default async function listarLocacoesService() {
  
  let resp = await listarLocacoes();
  return resp;

}