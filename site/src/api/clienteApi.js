import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function inserirCliente(nome, email, telefone, cpf, cnh) {
  
  const response = await api.post('/cliente', {
    nome: nome,
    email: email,
    telefone: telefone,
    cpf: cpf,
    cnh: cnh
  })

  return response.data;

}

export async function deletarCliente(id) {
  const response = await api.delete(`/cliente/deletar/${id}`);
  return response.data;
}

export async function alterarInfoCliente( nome, email, telefone, cpf, cnh, id) {
  
  const response = await api.put(`cliente/alterar/${id}`, {
    nome: nome,
    email: email,
    telefone: telefone,
    cpf: cpf,
    cnh: cnh,
    id: id
  })

  return response.data;

}

export async function listarClientePorNome(nome) {
  
  const response = await api.get(`/cliente/buscar?nome=${nome}`);
  return response.data;

}

export async function listarClientePorId(id) {
  
  const response = await api.get(`/cliente/buscar/${id}`);
  return response.data;

}