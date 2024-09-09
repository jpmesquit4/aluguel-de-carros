import { listarAllInfoLocacoes } from "../../repository/locacaoRepository.js";

export default async function listarAllInfoLocacoesService(id) {
  
  let resp = await listarAllInfoLocacoes(id);

  return resp[0];

}