import { listarVeiculosPorMarca } from "../../repository/veiculoRepository.js";

export default async function listarVeiculosPorMarcaService(marca) {
  
  let resp = await listarVeiculosPorMarca(marca);
  return resp;

}