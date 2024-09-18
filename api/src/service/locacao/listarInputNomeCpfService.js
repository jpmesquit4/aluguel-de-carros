import { listarInputNomeCpf } from "../../repository/locacaoRepository.js";

export default async function listarInputNomeCpfService(nome) {
  
  let response = await listarInputNomeCpf(nome);

  if (response.length == 0)
    throw new Error("Cliente nao encontrado!");
    

  return response;

}