import { finalizarLocacao } from "../../repository/locacaoRepository.js";

export default async function finalizarLocacaoService(locacaoObj, id) {
  
  let linhasAfetadas = await finalizarLocacao(locacaoObj, id);

  if(linhasAfetadas == 0)
    throw new Error("Locação não finalizada.");

}