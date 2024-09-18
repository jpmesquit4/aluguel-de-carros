import { listarInputModelo } from "../../repository/locacaoRepository.js";

export default async function listarInputModeloService(modelo) {
  
  let response = await listarInputModelo(modelo);

  if (response.length == 0) {
    throw new Error("Veículo não encontrado!");
    
  }

  return response;

}