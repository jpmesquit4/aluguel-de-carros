import { listarClientePorId } from "../../repository/clienteRepository.js";

export default async function listarClientePorIdService(id) {
  
  let response = await listarClientePorId(id);
  return response[0];


}