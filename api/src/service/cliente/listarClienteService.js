import { listarCliente } from "../../repository/clienteRepository.js";

export default async function listarClienteService() {
  
  let resp = await listarCliente();
  return resp;

}