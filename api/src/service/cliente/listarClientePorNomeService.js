import { listarClientePorNome } from "../../repository/clienteRepository.js";


export default async function listarClientePorNomeService(nome) {
  
  let resp = await listarClientePorNome(nome);
  
  if (resp.length === 0)
    throw new Error("Cliente não existe!")

  return resp;

}

