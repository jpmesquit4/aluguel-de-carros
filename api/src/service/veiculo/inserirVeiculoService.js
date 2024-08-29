import { inserirVeiculo } from "../../repository/veiculoRepository.js";


export default async function inserirVeiculoService(veiculoObj) {
  
  let id = await inserirVeiculo(veiculoObj);
  return id;

}