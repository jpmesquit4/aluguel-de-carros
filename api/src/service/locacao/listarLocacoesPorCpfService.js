import { listarLocacoesPorCpf } from "../../repository/locacaoRepository.js";

export default async function listarLocacoesPorCpfService(cpf) {
  
  let resp = await listarLocacoesPorCpf(cpf);

  if (resp.length == 0)
    throw new Error("Nenhuma Locação Encontrada!");
    

  return resp;

}