import { listarLocacoesPorIdCliente } from "../../repository/locacaoRepository.js";

export default async function listarLocacoesPorIdClienteService(idCliente) {
  
  let registros = await listarLocacoesPorIdCliente(idCliente);
  return registros;

}