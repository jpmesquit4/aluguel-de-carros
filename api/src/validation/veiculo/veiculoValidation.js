

export function validarPlacaIgual(registros) {
  
  if (registros.length > 0)
    throw new Error("Placa ja existente!");

}

export function validarInsercaoVeiculo(veiculoObj) {
  
  if (isNaN(veiculoObj.idTipo) || !veiculoObj.idTipo)
    throw new Error("Tipo do veiculo obrigatorio.");

  if (!veiculoObj.modelo)
    throw new Error("Modelo do veiculo obrigatorio.");

  if (!veiculoObj.marca)
    throw new Error("Marca do veiculo obrigatorio.");

  if (!veiculoObj.ano)
    throw new Error("Ano do veiculo obrigatorio.");

  if (!veiculoObj.placa)
    throw new Error("Placa do veiculo obrigatorio.");
    
}

export function validarVeiculoUnico(registros) {

  if (registros.length == 0)
    throw new Error("Veiculo não encontrado.");
    

}