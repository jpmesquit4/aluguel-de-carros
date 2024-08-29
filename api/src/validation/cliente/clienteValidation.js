
export function validarCliente(clienteObj) {
  
  if (!clienteObj.nome)
    throw new Error("Nome do cliente obrigatório!");
  
  if (!clienteObj.email)
    throw new Error("Email do cliente obrigatório!");
  
  if (!clienteObj.telefone)
    throw new Error("Telefone do cliente obrigatório!");
  
  if (!clienteObj.cpf)
    throw new Error("CPF do cliente obrigatório!");
  
  if (!clienteObj.cnh)
    throw new Error("CNH do cliente obrigatório!");

}