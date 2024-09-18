import './index.scss';
import axios from 'axios';
import MenuLeft from '../../components/menuleft/index.js';
import Cabecalho from '../../components/cabecalho/index.js';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { alterarInfoCliente, deletarCliente, inserirCliente, listarClientePorId, listarClientePorNome } from '../../api/clienteApi.js';

export default function ClienteHome() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnh, setCnh] = useState('');
  const [id, setId] = useState(0);
  const [filtro, setFiltro] = useState('')
  const [listaCliente, setListaCliente] = useState([]);

  async function salvarCliente() {

    try {

      if (id === 0) {
        const novoCliente = await inserirCliente(nome, email, telefone, cpf, cnh);
        setId(novoCliente.id);
        toast.success("Cliente cadastrado com sucesso!")
        listarCliente();
        setNome("");
        setEmail("");
        setTelefone("");
        setCpf("");
        setCnh("");
        setId(0);
      }
      else {
        await alterarInfoCliente(nome, email, telefone, cpf, cnh, id);
        toast.success("Informações do cliente alterada com sucesso!")
        listarCliente();
      }

    }
    catch (err) {
      if (err.response)
        toast.error(err.response.data.error);
      else
        toast.error(err.message);
    }

  }

  async function filtrar() {

    try {
      const response = await listarClientePorNome(filtro);
      setListaCliente(response);
    }
    catch (err) {
      if (err.response)
        toast.error(err.response.data.error);
      else
        toast.error(err.message);
    }

  }

  async function listarInformacoes(id) {

    try {
      const resposta = await listarClientePorId(id);
      setNome(resposta.nome);
      setEmail(resposta.email);
      setTelefone(resposta.telefone);
      setCpf(resposta.cpf);
      setCnh(resposta.cnh);
      setId(resposta.id);

    }
    catch (err) {
      if (err.response)
        toast.error(err.response.data.error);
      else
        toast.error(err.message);
    }

  }

  async function listarCliente() {

    let url = `http://localhost:5000/cliente`;
    let response = await axios.get(url);

    setListaCliente(response.data);
  }

  async function removerCliente(id) {
    try {
      await deletarCliente(id);
      toast.success("Cliente deletado com sucesso!")
      listarCliente();
    }
    catch (err) {
      if (err.response)
        toast.error(err.response.data.error);
      else
        toast.error(err.message);
    }
  }

  function novoClick() {
    setNome('');
    setEmail('');
    setTelefone('');
    setCpf('');
    setCnh('');
    setId(0);
  }

  useEffect(() => {
    listarCliente();
  }, []);


  return (
    <div className="pagina-Home">

      <MenuLeft />

      <div className="principal">

        <Cabecalho />

        <main>

          <p>ÁREA ADMINISTRATIVA</p>
          <h1>Controle de Clientes</h1>

          <div className='newClient'>

            <h1>Novo Cliente</h1>

            <div className="inputs-newClient">

              <label>Nome</label>
              <input type="text" value={nome} onChange={e => setNome(e.target.value)} />

              <label>Email</label>
              <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

              <label>Telefone</label>
              <input type="text" value={telefone} onChange={e => setTelefone(e.target.value)} />

              <label>CPF</label>
              <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} />

              <label>CNH</label>
              <input type="text" value={cnh} onChange={e => setCnh(e.target.value)} />

            </div>

            <div className='buttons'>
              <button onClick={salvarCliente}>{id === 0 ? 'SALVAR' : 'ALTERAR'}</button>
              <button onClick={novoClick}>NOVO</button>
            </div>

          </div>

          <div className="listClient">

            <h1>Lista de Clientes</h1>

            <label>Nome</label>
            <nav>
              <input type="text" value={filtro} onChange={e => setFiltro(e.target.value)} />
              <img src="/assets/images/iconLupa.png" onClick={filtrar} alt="" />
            </nav>

            <div className="table-listClient">

              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                    <th>E-mail</th>
                  </tr>
                </thead>
                <tbody>
                  {listaCliente.map(item =>
                    <tr key={item.id_cliente}>
                      <td>{item.nm_cliente}</td>
                      <td>{item.ds_cpf}</td>
                      <td>{item.ds_telefone}</td>
                      <td>{item.ds_email}</td>
                      <img onClick={() => listarInformacoes(item.id_cliente)} src="/assets/images/iconEdit.png" alt="" />
                      <img onClick={() => removerCliente(item.id_cliente)} src="/assets/images/iconDelete.png" alt="" />
                    </tr>
                  )}
                </tbody>
              </table>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

