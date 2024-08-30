import { listarLocacoesPorCpf } from "../../repository/locacaoRepository.js";

export default async function listarLocacoesPorCpfService(cpf) {
  
  let resp = await listarLocacoesPorCpf(cpf);
  return resp;

}