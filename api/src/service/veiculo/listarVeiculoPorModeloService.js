import { listarVeiculosPorModelo } from "../../repository/veiculoRepository.js";

export default async function listarVeiculosPorModeloService(modelo) {
  
  let resp = await listarVeiculosPorModelo(modelo);
  return resp;

}