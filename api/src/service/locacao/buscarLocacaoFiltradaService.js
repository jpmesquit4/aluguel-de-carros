import { buscarClientes } from "../../repository/locacaoRepository.js";


export default async function buscarClientesFiltradoService(filtro) {
  
  let response = await buscarClientes(filtro);

  if (response.length == 0)
    throw new Error("Locação não encontrado!");
    
  return response;

}