import { listarClientePorNome } from "../../repository/clienteRepository.js";


export default async function listarClientePorNomeService(nome) {
  
  let resp = listarClientePorNome(nome);
  return resp;

}

