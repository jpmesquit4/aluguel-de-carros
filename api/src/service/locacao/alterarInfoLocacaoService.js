import { alterarInfoLocacao } from "../../repository/locacaoRepository.js";
import { validarLocacao } from "../../validation/locacao/locacaoValidation.js";

export default async function alterarInfoLocacaoService(locacaoObj, id) {
  
  validarLocacao(locacaoObj);

  let linhasAfetadas = await alterarInfoLocacao(locacaoObj, id);

  if (linhasAfetadas == 0)
    throw new Error("Nenhuma Locação alterada.");
    

}