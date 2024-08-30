import { listarVeiculosPorModelo } from "../../repository/veiculoRepository.js";
import { validarVeiculoUnico } from "../../validation/veiculo/veiculoValidation.js";

export default async function listarVeiculosPorModeloService(modelo) {
  
  let resp = await listarVeiculosPorModelo(modelo);
  validarVeiculoUnico(resp);

  return resp;

}