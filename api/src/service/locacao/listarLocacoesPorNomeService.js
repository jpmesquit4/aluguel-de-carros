import { listarLocacoesPorNome } from "../../repository/locacaoRepository.js";

export default async function listarLocacoesPorNomeService(nome) {
  
  let resp = await listarLocacoesPorNome(nome);
  return resp;

}