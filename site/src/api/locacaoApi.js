import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function inserirLocacao(idCliente, idVeiculo, dataLocacao, kmRetirada, seguro, observacoes) {
  
  const response = await api.post('/locacao', {
    idCliente: idCliente,
    idVeiculo: idVeiculo,
    dataLocacao: dataLocacao,
    kmRetirada: kmRetirada,
    seguro: seguro,
    observacoes: observacoes
  })

  return response.data;

}

export async function deletarLocacao(id) {
  const response = await api.delete(`/locacao/${id}`);
  return response.data;
}

export async function listarLocacoes() {
  const response = await api.get(`/locacao`);
  return response.data;
}

export async function listarInfoInputNome(nome) {
  const response = await api.get(`/locacao/input/${nome}`);
  return response.data;
}

export async function listarInfoInputModelo(modelo) {
  const response = await api.get(`/locacao/input?modelo=${modelo}`);
  return response.data;
}

export async function alterarInfoLocacao( idCliente, idVeiculo, kmRetirada, dataLocacao, seguro, observacoes, id) {
  
  const response = await api.put(`/locacao/${id}`, {
    idCliente: idCliente,
    idVeiculo: idVeiculo,
    kmRetirada: kmRetirada,
    dataLocacao: dataLocacao,
    seguro: seguro,
    observacoes: observacoes,
    id: id
  })

  return response.data;

}

export async function listarClientePorNome(nome) {
  
  const response = await api.get(`/cliente/buscar?nome=${nome}`);
  return response.data;

}

export async function listarLocacoesPorCpf(id) {
  
  const response = await api.get(`/locacao/cpf/buscar?cpf=${id}`);
  return response.data;

}

export async function listarAllInfoLocacoes(id) {
  
  const response = await api.get(`/locacao/allinfo/${id}`);
  return response.data;

}

export async function finalizarLocacao(situacao, kmEntrega, dataEntrega, valorTotal, id) {
  
  const response = await api.put(`/locacao/finalizar/${id}`, {
    situacao: situacao,
    kmEntrega: kmEntrega,
    dataEntrega: dataEntrega,
    valorTotal: valorTotal
  });
  return response.data;

}

export async function listarClientesFiltrado(filtro) {
  
  const response = await api.get(`/locacao/buscar?filtro=${filtro}`);
  return response.data;

}
