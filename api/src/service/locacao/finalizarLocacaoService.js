import { finalizarLocacao } from "../../repository/locacaoRepository.js";
import { validarFinalizacaoLocacao } from "../../validation/locacao/locacaoValidation.js";

export default async function finalizarLocacaoService(locacaoObj, id) {
  
  validarFinalizacaoLocacao(locacaoObj);

  let linhasAfetadas = await finalizarLocacao(locacaoObj, id);

  if(linhasAfetadas == 0)
    throw new Error("Locação não finalizada.");

}