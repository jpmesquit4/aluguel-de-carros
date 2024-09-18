import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function inserirVeiculo(idTipo, modelo, marca, ano, placa) {
  
  const response = await api.post('/veiculo', {
    idTipo: idTipo,
    modelo: modelo,
    marca: marca,
    ano: ano,
    placa: placa
  })

  return response.data;

}

export async function alterarInfoVeiculo( idTipo, modelo, marca, ano, placa, id) {
  
  const response = await api.put(`/veiculo/${id}`, {
    idTipo: idTipo,
    modelo: modelo,
    marca: marca,
    ano: ano,
    placa: placa,
    id: id
  })

  return response.data;

}

export async function listarTipoAndIdTipo() {
  
  const response = await api.get(`/veiculo/tipo`)
  return response.data;

}


export async function deletarVeiculo(id) {
  const response = await api.delete(`/veiculo/deletar/${id}`);
  return response.data;
}


export async function listarClientePorNome(nome) {
  
  const response = await api.get(`/cliente/buscar?nome=${nome}`);
  return response.data;

}

export async function listarVeiculosPorPlaca(placa) {
  
  const response = await api.get(`/veiculo/placa/buscar?placa=${placa}`);
  return response.data;

}

export async function listarVeiculosPorModelo(modelo) {
  
  const response = await api.get(`/veiculo/modelo/buscar?modelo=${modelo}`);
  return response.data;

}

export async function listarVeiculosPorMarca(marca) {
  
  const response = await api.get(`/veiculo/marca/buscar?marca=${marca}`);
  return response.data;

}

export async function listarCarrosFiltrado(filtro) {
  
  const response = await api.get(`/veiculo/buscar?filtro=${filtro}`);
  return response.data;

}