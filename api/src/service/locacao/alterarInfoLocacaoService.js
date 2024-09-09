import { alterarInfoLocacao } from "../../repository/locacaoRepository.js";

export default async function alterarInfoLocacaoService(locacaoObj, id) {
  
  let linhasAfetadas = await alterarInfoLocacao(locacaoObj, id);

  if (linhasAfetadas == 0)
    throw new Error("Nenhuma Locação alterada.");
    

}