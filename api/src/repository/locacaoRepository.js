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

export async function deletarLocacao(id) {
  
  let comando = `
    DELETE FROM tb_locacao WHERE id_locacao = ?;
  `

  let resp = await con.query(comando, [id]);
  let info = resp[0];
  let linhasAfetadas = info.affectedRows;
  return linhasAfetadas;

}

export async function alterarInfoLocacao(locacaoObj, id) {
  
  let comando = `
    update 	tb_locacao
    set 	  id_cliente = ?,
            id_veiculo = ?,
            nr_km_retirada = ?,
            dt_locacao = ?,
            bt_seguro = ?,
            ds_observacoes = ?
    where 	id_locacao = ?;
  `

  let resp = await con.query(comando, [locacaoObj.idCliente, locacaoObj.idVeiculo, locacaoObj.kmRetirada, locacaoObj.dataLocacao, locacaoObj.seguro, locacaoObj.observacoes, id ])
  let linhas = resp[0];
  let linhasAfetadas = linhas.affectedRows;
  return linhasAfetadas;
}

export async function finalizarLocacao(locacaoObj, id) {
  
  let comando = `
    update 	tb_locacao
    set 	  ds_situacao = ?,
            nr_km_entrega = ?,
            dt_entrega = ?,
            vl_total = ?
    where 	id_locacao = ?;
  `

  let resp = await con.query(comando, [locacaoObj.situacao, locacaoObj.kmEntrega, locacaoObj.dataEntrega, locacaoObj.valorTotal, id])
  let linhas = resp[0];
  let linhasAfetadas = linhas.affectedRows;
  return linhasAfetadas;

}

export async function listarAllInfoLocacoes(id) {
  
  let comando = `
  select 		  nm_cliente,
              ds_cpf,
              ds_modelo,
              nr_ano,
              ds_placa,
              dt_entrega,
              nr_km_entrega,
              bt_seguro,
              ds_situacao
  from 		  tb_locacao
  inner join 	
  tb_veiculo on tb_locacao.id_veiculo = tb_veiculo.id_veiculo
  inner join
  tb_cliente on tb_locacao.id_cliente = tb_cliente.id_cliente
  where id_locacao = ?; 
  `

  let resp = await con.query(comando, [id]);
  return resp[0];

}