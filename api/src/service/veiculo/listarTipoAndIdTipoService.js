import { listarTipoAndIdTipo } from "../../repository/veiculoRepository.js";

export default async function listarTipoAndIdTipoService() {
  
  let response = listarTipoAndIdTipo();
  return response;

}