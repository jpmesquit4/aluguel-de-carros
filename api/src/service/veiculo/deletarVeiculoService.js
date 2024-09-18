import { deletarVeiculo } from "../../repository/veiculoRepository.js";

export default async function deletarVeiculoService(id) {
  
  let linhasAfetadas = await deletarVeiculo(id);
  
  if (linhasAfetadas == 0)
    throw new Error("Nenhum veículo removido!");
    

}