import { listarVeiculos } from "../../repository/veiculoRepository.js";

export default async function listarVeiculosService() {
  
  let resp = await listarVeiculos();
  return resp;

}