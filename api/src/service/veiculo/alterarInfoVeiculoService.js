import { alterarInfoVeiculo } from "../../repository/veiculoRepository.js";
import { validarInsercaoVeiculo } from "../../validation/veiculo/veiculoValidation.js";

export default async function alterarInfoVeiculoService(veiculoObj, id) {

  validarInsercaoVeiculo(veiculoObj);

  let linhasAfetadas = await alterarInfoVeiculo(veiculoObj, id);

  if (linhasAfetadas == 0)
    throw new Error("Nenhum veiculo alterado.");
    
  
}