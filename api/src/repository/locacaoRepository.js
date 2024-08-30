import con from "./connection.js";


export async function inserirLocacao(locacaoObj) {
  
  let comando = `
  INSERT INTO tb_locacao (id_cliente, id_veiculo, dt_locacao, nr_km_retirada, bt_seguro, ds_observacoes)
				           values(?, ?, ?, ?, ?, ?)
  `

  let resp = await con.query(comando, [locacaoObj.idCliente, locacaoObj.idVeiculo, locacaoObj.dataLocacao, locacaoObj.kmRetirada, locacaoObj.seguro, locacaoObj.observacoes]);
  let info = resp[0];
  let idLocacao = info.insertId;
  return idLocacao;

}

export async function listarLocacoes() {
  
  let comando = `
  select 		  nm_cliente,
              ds_cpf,
              ds_modelo,
              ds_placa,
              dt_locacao
  from 		    tb_locacao
  inner join 	
  tb_veiculo on tb_locacao.id_veiculo = tb_veiculo.id_veiculo
  inner join
  tb_cliente on tb_locacao.id_cliente = tb_cliente.id_cliente; 
  `

  let resp = await con.query(comando, []);
  return resp[0];

}

export async function listarLocacoesPorNome(nome) {
  
  let comando = `
  select 		  nm_cliente,
              ds_cpf,
              ds_modelo,
              ds_placa,
              dt_locacao
  from 		    tb_locacao
  inner join 	
  tb_veiculo on tb_locacao.id_veiculo = tb_veiculo.id_veiculo
  inner join
  tb_cliente on tb_locacao.id_cliente = tb_cliente.id_cliente
  where nm_cliente like ?
  `

  let resp = await con.query(comando, ['%' + nome + '%']);
  return resp[0];

}

export async function listarLocacoesPorCpf(cpf) {
  
  let comando = `
  select 		  nm_cliente,
              ds_cpf,
              ds_modelo,
              ds_placa,
              dt_locacao
  from 		    tb_locacao
  inner join 	
  tb_veiculo on tb_locacao.id_veiculo = tb_veiculo.id_veiculo
  inner join
  tb_cliente on tb_locacao.id_cliente = tb_cliente.id_cliente
  where ds_cpf = ?
  `

  let resp = await con.query(comando, [cpf]);
  return resp[0];

}