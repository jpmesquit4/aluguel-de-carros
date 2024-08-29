import { listarVeiculosPorPlaca } from "../../repository/veiculoRepository.js";

export default async function listarVeiculosPorPlacaService(placa) {
  
  let resp = await listarVeiculosPorPlaca(placa);
  return resp;

}