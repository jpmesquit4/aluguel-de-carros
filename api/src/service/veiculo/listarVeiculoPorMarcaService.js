import { listarVeiculosPorMarca } from "../../repository/veiculoRepository.js";
import { validarVeiculoUnico } from "../../validation/veiculo/veiculoValidation.js";


export default async function listarVeiculosPorMarcaService(marca) {
  
  let resp = await listarVeiculosPorMarca(marca);
  validarVeiculoUnico(resp);
  
  return resp;

}