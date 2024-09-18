import con from "./connection.js";

export async function inserirVeiculo(veiculoObj) {
  
  let comando = `
  insert into tb_veiculo(id_tipo_veiculo, ds_modelo, ds_marca, nr_ano, ds_placa)
				          values(?, ?, ?, ?, ?)
  `

  let resp = await con.query(comando, [veiculoObj.idTipo, veiculoObj.modelo, veiculoObj.marca, veiculoObj.ano, veiculoObj.placa])
  let info = resp[0];
  let idVeiculo = info.insertId;
  return idVeiculo;
}

export async function listarVeiculos() {
  
  let comando = `
  select      id_veiculo id,
              ds_modelo modelo,
              ds_marca  marca,
              nr_ano    ano,
              ds_tipo   tipo,
              ds_placa  placa
  from 		    tb_veiculo
  inner join 	tb_tipo_veiculo
  on 			    tb_veiculo.id_tipo_veiculo = tb_tipo_veiculo.id_tipo_veiculo
  order by    id_veiculo
  `

  let resp = await con.query(comando, []);
  return resp[0];


}

export async function listarTipoAndIdTipo() {
  let comando = `
  select 		id_tipo_veiculo idTipo,
			      ds_tipo tipo 
  from 		  tb_tipo_veiculo`
  
  let response = await con.query(comando, []);
  return response[0];
}

export async function listarVeiculosPorModelo(modelo) {
  
  let comando = `
  select 		  ds_modelo modelo,
              ds_marca  marca,
              nr_ano    ano,
              ds_tipo   tipo,
              ds_placa  placa
  from 		    tb_veiculo
  inner join 	tb_tipo_veiculo
  on 			    tb_veiculo.id_tipo_veiculo = tb_tipo_veiculo.id_tipo_veiculo
  where 		  ds_modelo like ?
  `

  let resp = await con.query(comando, ['%' + modelo + '%']);
  return resp[0];
}

export async function listarVeiculosPorMarca(marca) {
  
  let comando = `
  select 		  ds_modelo modelo,
              ds_marca  marca,
              nr_ano    ano,
              ds_tipo   tipo,
              ds_placa  placa
  from 		    tb_veiculo
  inner join 	tb_tipo_veiculo
  on 			    tb_veiculo.id_tipo_veiculo = tb_tipo_veiculo.id_tipo_veiculo
  where 		  ds_marca like ?
  `

  let resp = await con.query(comando, ['%' + marca + '%']);
  return resp[0];
}

export async function listarVeiculosPorPlaca(placa) {
  
  let comando = `
  select      id_veiculo id,
              ds_modelo modelo,
              ds_marca  marca,
              nr_ano    ano,
              ds_tipo   tipo,
              ds_placa  placa,
              tb_veiculo.id_tipo_veiculo idTipo
  from 		    tb_veiculo
  inner join 	tb_tipo_veiculo
  on 			    tb_veiculo.id_tipo_veiculo = tb_tipo_veiculo.id_tipo_veiculo
  where 		  ds_placa like ?
  `

  let resp = await con.query(comando, ['%' + placa + '%']);
  return resp[0];
}

export async function buscarCarros(filtro) {
  let comando = `
    select id_veiculo id, 
           ds_modelo modelo, 
           ds_marca marca, 
           nr_ano ano, 
           ds_tipo tipo, 
           ds_placa placa, 
           tb_veiculo.id_tipo_veiculo idTipo
    from tb_veiculo
    inner join tb_tipo_veiculo on tb_veiculo.id_tipo_veiculo = tb_tipo_veiculo.id_tipo_veiculo
    where 1=1
  `;

  let params = [];

  // Adiciona condições apenas se houver valor em 'filtro'
  if (filtro) {
    comando += ` and (ds_marca like ? or ds_modelo like ? or ds_placa like ?) `;
    filtro = `%${filtro}%`;
    params.push(filtro, filtro, filtro);
  }

  let [linhas] = await con.query(comando, params);
  return linhas;
}

export async function alterarInfoVeiculo(veiculoObj, id) {
  
  let comando = `
    update 	    tb_veiculo 
    set 	      id_tipo_veiculo = ?,
                ds_modelo = ?,
                ds_marca = ?,
                nr_ano = ?,
                ds_placa = ?
    where 	    id_veiculo = ?;
  `

  let resp = await con.query(comando, [veiculoObj.idTipo, veiculoObj.modelo, veiculoObj.marca, veiculoObj.ano, veiculoObj.placa, id])
  let info = resp[0];
  let linhasAfetadas = info.changedRows;
  return linhasAfetadas
}

export async function deletarVeiculo(id) {
  
  let comando = `
    DELETE FROM tb_veiculo WHERE id_veiculo = ?;
  `

  let resp = await con.query(comando, [id]);
  let linhas = resp[0];
  let linhasAfetadas = linhas.affectedRows;
  return linhasAfetadas;
}