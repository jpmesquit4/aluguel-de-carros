import { alterarInfoVeiculo } from "../../repository/veiculoRepository.js";

export default async function alterarInfoVeiculoService(veiculoObj, id) {

  let linhasAfetadas = await alterarInfoVeiculo(veiculoObj, id);

  if (linhasAfetadas == 0)
    throw new Error("Nenhum veiculo alterado.");
    
  
}