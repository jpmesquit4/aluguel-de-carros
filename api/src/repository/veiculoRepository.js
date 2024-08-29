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
  select 		  ds_modelo modelo,
              ds_marca  marca,
              nr_ano    ano,
              ds_tipo   tipo,
              ds_placa  placa
  from 		    tb_veiculo
  inner join 	tb_tipo_veiculo
  on 			    tb_veiculo.id_tipo_veiculo = tb_tipo_veiculo.id_tipo_veiculo
  `

  let resp = await con.query(comando, []);
  return resp[0];


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
  where 		  ds_modelo = ?
  `

  let resp = await con.query(comando, [modelo]);
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
  where 		  ds_marca = ?
  `

  let resp = await con.query(comando, [marca]);
  return resp[0];
}

export async function listarVeiculosPorPlaca(placa) {
  
  let comando = `
  select 		  ds_modelo modelo,
              ds_marca  marca,
              nr_ano    ano,
              ds_tipo   tipo,
              ds_placa  placa
  from 		    tb_veiculo
  inner join 	tb_tipo_veiculo
  on 			    tb_veiculo.id_tipo_veiculo = tb_tipo_veiculo.id_tipo_veiculo
  where 		  ds_placa = ?
  `

  let resp = await con.query(comando, [placa]);
  return resp[0];
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
  let linhasAfetadas = info.affectedRows;
  return linhasAfetadas
}