import { inserirVeiculo, listarVeiculosPorPlaca } from "../../repository/veiculoRepository.js";
import { validarPlacaIgual, validarInsercaoVeiculo } from "../../validation/veiculo/veiculoValidation.js";

export default async function inserirVeiculoService(veiculoObj) {
  
  validarInsercaoVeiculo(veiculoObj);

  let registros = await listarVeiculosPorPlaca(veiculoObj.placa);
  validarPlacaIgual(registros);
    

  let id = await inserirVeiculo(veiculoObj);
  return id;

}