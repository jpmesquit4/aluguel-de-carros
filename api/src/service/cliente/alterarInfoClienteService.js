import { alterarInfoCliente } from "../../repository/clienteRepository.js";
import { validarCliente } from "../../validation/cliente/clienteValidation.js";

export default async function alterarInfoClienteService(clienteObj, id) {
  validarCliente(clienteObj);

  let linhasAfetadas = await alterarInfoCliente(clienteObj, id);

  if (linhasAfetadas == 0)
    throw new Error("Nenhum cliente alterado.");

}

