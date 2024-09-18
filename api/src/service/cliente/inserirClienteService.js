import { inserirCliente } from "../../repository/clienteRepository.js";
import { validarCliente} from "../../validation/cliente/clienteValidation.js";

export default async function inserirClienteService(clienteObj) {
  validarCliente(clienteObj);

  let id = await inserirCliente(clienteObj);
  return id;

}

