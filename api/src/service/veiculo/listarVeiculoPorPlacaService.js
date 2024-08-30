import { listarVeiculosPorPlaca } from "../../repository/veiculoRepository.js";
import { validarVeiculoUnico } from "../../validation/veiculo/veiculoValidation.js";

export default async function listarVeiculosPorPlacaService(placa) {
  
  let resp = await listarVeiculosPorPlaca(placa);
  validarVeiculoUnico(resp);

  return resp;

}