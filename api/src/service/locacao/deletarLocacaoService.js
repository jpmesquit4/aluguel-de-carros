import { deletarLocacao } from "../../repository/locacaoRepository.js";

export default async function deletarLocacaoService(id) {
  
  let linhasAfetadas = await deletarLocacao(id);
  
  if (linhasAfetadas == 0)
    throw new Error("Nenhuma Locação removida.");

}