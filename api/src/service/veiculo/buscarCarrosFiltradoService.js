import { buscarCarros } from "../../repository/veiculoRepository.js";


export default async function buscarCarrosFiltradoService(filtro) {
  
  let response = await buscarCarros(filtro);

  if (response.length == 0)
    throw new Error("Veículo não encontrado!");
    
  return response;

}