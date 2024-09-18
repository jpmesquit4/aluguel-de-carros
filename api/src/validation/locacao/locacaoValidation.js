export function validarLocacao(locacaoObj) {
  
  if (!locacaoObj.idCliente)
    throw new Error("Cliente obrigatório!");
  
  if (!locacaoObj.idVeiculo)
    throw new Error("Veiculo obrigatório!");
  
  if (!locacaoObj.dataLocacao)
    throw new Error("Data da locação do veiculo obrigatório!");
  
  if (!locacaoObj.kmRetirada)
    throw new Error("Quilometragem do veiculo da retirada obrigatório!");
  
  if (!locacaoObj.observacoes)
    throw new Error("Observações obrigatório!");

}

export function validarFinalizacaoLocacao(locacaoObj) {
  
  if (!locacaoObj.situacao)
    throw new Error("Situação do veiculo obrigatório!");
  
  if (!locacaoObj.kmEntrega)
    throw new Error("Quilometragem do veiculo na entrega obrigatório!");
  
  if (!locacaoObj.dataEntrega)
    throw new Error("Data da entrega do veiculo obrigatório!");
  
  if (!locacaoObj.valorTotal)
    throw new Error("Valor da locação obrigatório!");


}