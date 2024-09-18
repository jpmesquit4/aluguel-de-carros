import con from './connection.js';

export async function inserirCliente(clienteObj) {
  let comando = `
  insert into tb_cliente(nm_cliente, ds_email, ds_telefone, ds_cpf, ds_cnh)
				          values(?, ?, ?, ?, ?);
  `

  let resp = await con.query(comando, [clienteObj.nome, clienteObj.email, clienteObj.telefone, clienteObj.cpf, clienteObj.cnh]);
  let info = resp[0];
  let idCliente = info.insertId;
  return idCliente;
}

export async function listarCliente() {
  
  let comando = `
    select  id_cliente,
            nm_cliente,
		        ds_cpf,
            ds_telefone,
            ds_email
    from 	  tb_cliente;
  `

  let resp = await con.query(comando, []);
  let info = resp[0];
  return info;

}

export async function listarClientePorNome(nome) {
  
  let comando = `
    select  id_cliente,
            nm_cliente,
		        ds_cpf,
            ds_telefone,
            ds_email
    from 	  tb_cliente
    where   nm_cliente like ?
  `

  let resp = await con.query(comando, ['%' + nome + '%']);
  let info = resp[0];
  return info;

}

export async function listarClientePorId(id) {
  
  let comando = `
    select  id_cliente id,
            nm_cliente nome,
		        ds_cpf cpf,
            ds_telefone telefone,
            ds_email email,
            ds_cnh cnh
    from 	  tb_cliente
    where   id_cliente = ?
  `

  let resp = await con.query(comando, [id]);
  let info = resp[0];
  return info;

}

export async function alterarInfoCliente(clienteObj, id) {
  
  let comando = `
    update  tb_cliente 
    set 	  nm_cliente = ?,
            ds_cpf = ?,
            ds_telefone = ?,
            ds_email = ?,
            ds_cnh = ?
    where 	id_cliente = ?
  `

  let resp = await con.query(comando, [clienteObj.nome, clienteObj.cpf, clienteObj.telefone, clienteObj.email, clienteObj.cnh, id]);
  let linhas = resp[0];
  let linhasAfetadas = linhas.changedRows;
  return linhasAfetadas;
}

export async function deletarCliente(id) {
  
  let comando = `
    DELETE FROM tb_cliente WHERE id_cliente = ?;
  `

  let resp = await con.query(comando, [id]);
  let linhas = resp[0];
  let linhasAfetadas = linhas.affectedRows;
  return linhasAfetadas;
}