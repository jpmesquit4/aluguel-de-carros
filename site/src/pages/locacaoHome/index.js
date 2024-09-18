import './index.scss'
import MenuLeft from '../../components/menuleft';
import Cabecalho from '../../components/cabecalho';

import axios from 'axios'

import { alterarInfoLocacao, deletarLocacao, inserirLocacao, listarClientesFiltrado, listarInfoInputModelo, listarInfoInputNome, listarLocacoes, listarLocacoesPorCpf } from '../../api/locacaoApi.js';

import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LocacaoHome() {
  
  const [nome, setNome] = useState('');
  const [modelo, setModelo] = useState('');
  const [cliente, setCliente] = useState('');
  const [veiculo, setVeiculo] = useState('');
  const [dataLocacao, setDataLocacao] = useState('');
  const [kmRetirada, setKmRetirada] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [filtro, setFiltro] = useState('');
  const [seguro, setSeguro] = useState(false);
  const [listaLocacoes, setListaLocacoes] = useState([]);
  const [listaClienteCpf, setListaClienteCpf] = useState([]);
  const [listaModelo, setListaModelo] = useState([]);

  const [id, setId] = useState(0);
  const [idCliente, setIdCliente] = useState(0);
  const [idVeiculo, setIdVeiculo] = useState(0);
  const [cpfInput, setCpfInput] = useState('');

  const navigate = useNavigate();

  function concluirLocacao() {
    
    navigate(`/locacao/concluir`);

  }

  useEffect(() => {
    listarTodasLocacoes();
  }, [])
  
  useEffect(() => {
    if (nome) {
      infoInputNome();
    }
  }, [nome]);

  useEffect(() => {
    if (modelo) {
      infoInputModelo();
    }
  }, [modelo]);

  async function salvarLocacao() {
    
    try {
      
      if (id === 0) {
        const novaLocacao = await inserirLocacao(idCliente, idVeiculo, dataLocacao, kmRetirada, seguro, observacoes);
        toast.success("Locação cadastrado com sucesso!")
        listarTodasLocacoes();
        setIdCliente(0);
        setIdVeiculo(0);
        setNome('');
        setModelo('');
        setDataLocacao('');
        setKmRetirada('');
        setSeguro(false);
        setObservacoes('');
      }
      else {
        await alterarInfoLocacao(idCliente, idVeiculo, kmRetirada, dataLocacao, seguro, observacoes, id)
        toast.success("Informações da Locação alterada com sucesso!")
        listarTodasLocacoes();;
      }

    }
    catch (err) {
      if (err.response)
        toast.error(err.response.data.error);
      else
        toast.error(err.message);
    }
  }

  async function removerLocacao(id) {
    try {
      await deletarLocacao(id);
      toast.success("Locação deletado com sucesso!")
      listarTodasLocacoes();;
    }
    catch (err) {
      if (err.response)
        toast.error(err.response.data.error);
      else
        toast.error(err.message);
    }
  }

  function formatarData(data) {

    let date = new Date(data);
    let dataFormatada = date.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    return dataFormatada;

  }

  async function listarTodasLocacoes() {
    
    let response = await listarLocacoes();
    setListaLocacoes(response);

  }

  async function infoInputNome() {
    try {
      let response = await listarInfoInputNome(nome);
      setListaClienteCpf(response);
      setIdCliente(response[0].id);
    }
    catch (err) {
      if (err.response)
        toast.error(err.response.data.error);
      else
        toast.error(err.message);
    }
  }

  async function infoInputModelo() {

    try {
      let response = await listarInfoInputModelo(modelo);
      setListaModelo(response);
      setIdVeiculo(response[0].idVeiculo);
      
    }
    catch (err) {
      if (err.response)
        toast.error(err.response.data.error);
      else
        toast.error(err.message);
    }

  }

  async function listarInformacoes(cpf) {
    
    try {
      const resposta = await listarLocacoesPorCpf(cpf);
      setId(resposta[0].id)
      setNome(resposta[0].nome);
      setModelo(resposta[0].modelo);

      const dataFormatada = resposta[0].dataLocacao
      ? new Date(resposta[0].dataLocacao).toISOString().split('T')[0]
      : '';
      setDataLocacao(dataFormatada);
      setKmRetirada(resposta[0].kmRetirada);
      setObservacoes(resposta[0].observacoes);
      setSeguro(resposta[0].seguro);
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

      const response = await listarClientesFiltrado(filtro);
      setListaLocacoes(response); 

    }
    catch (err) {
      if (err.response)
        toast.error(err.response.data.error);
      else
        toast.error(err.message);
    }

  }

  function novoClick() {
    setIdCliente(''); // Ou use undefined
    setIdVeiculo('');
    setNome('');
    setModelo('');
    setDataLocacao('');
    setKmRetirada('');
    setSeguro(false);
    setObservacoes('');
  }

  function abrirConcluirLocacao(id) {
    navigate(`/concluir/${id}`)
  }


  return (
    <div className='pagina-LocacaoHome'>
      <MenuLeft />

      <div className='principal'>
        <Cabecalho />

        <main>
    
          <p>ÁREA ADMINISTRATIVA</p>
          <h1>Controle de Locação</h1>

          <div className='newVeiculos'>

            <h1>Novo Locação</h1>

            <div className='inputs-newVeiculos'>

              <div className='top'>
                <div>
                  
                  <nav>
                    <label>Nome</label>
                    <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                  </nav>

                  <img src="/assets/images/iconSetaDupla.png" alt="" />

                  <nav>
                    <label>Cliente</label>
                    <select onChange={e => setIdCliente(e.target.value)} value={idCliente || ''}>
                      <option value="" disabled>Selecione um cliente</option>
                        {listaClienteCpf.map(item =>
                          <option value={item.idCliente} key={item.idCliente}>
                            {item.nome + ", " + item.cpf}
                          </option>
                        )}
                  </select>
                  </nav>
                  
                </div>

                <div>

                  <nav>
                      <label>Modelo</label>
                      <input type="text" value={modelo} onChange={e => setModelo(e.target.value)}/>
                    </nav>

                    <img src="/assets/images/iconSetaDupla.png" alt="" />

                    <nav>
                      <label>Veículo</label>
                      <select onChange={e => setIdVeiculo(e.target.value)} value={idVeiculo || ''}>
                        <option value="" disabled>Selecione um veículo</option>
                        {listaModelo.map(item =>
                          <option value={item.idVeiculo} key={item.idVeiculo}>
                            {item.modelo + ", " + item.ano + ", " + item.placa}
                          </option>
                        )}
                    </select>
                    </nav>

                </div>

              </div>

              <div className='bot'>
                <div className='bot-top'>
                  <label>Data da Locação</label>
                  <input type="date" value={dataLocacao} onChange={e => setDataLocacao(e.target.value)}/>

                  <label>KM Retirada</label>
                  <input type="text" value={kmRetirada} onChange={e => setKmRetirada(e.target.value)}/>

                  <nav>
                    <input id='myCheck' type='checkbox' checked={seguro} onChange={e => setSeguro(e.target.checked)}/>
                    <p>Seguro</p>
                  </nav>
                </div>

                <div className="bot-bot">
                  <label>Observações</label>
                  <textarea value={observacoes} onChange={e => setObservacoes(e.target.value)} cols="30" rows="10"></textarea>
                </div>
              </div>

            </div>

            <div className='buttons'>
              <button onClick={salvarLocacao}>{id === 0 ? "SALVAR" : "ALTERAR"}</button>
              <button onClick={novoClick}>NOVO</button>
            </div>

          </div>

          <div className='listVeiculos'>

            <h1>Locações em Andamento</h1>

            <label>Nome ou CPF</label>
            <nav>
              <input type="text" value={filtro} onChange={e => setFiltro(e.target.value)} />
              <img src="/assets/images/iconLupa.png" onClick={filtrar} />
            </nav>

            <div className='table-listVeiculos'>
              <table>
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>CPF</th>
                    <th>Veículo</th>
                    <th>Data da Locação</th>
                  </tr>
                </thead>
                <tbody>
                  {listaLocacoes.map(item =>
                    <tr>
                      <td>{item.nome}</td>
                      <td>{item.cpf}</td>
                      <td>{item.modelo + ' (' + item.placa + ')'}</td>
                      <td>{formatarData(item.dataLocacao)}</td>
                      <button onClick={() => abrirConcluirLocacao(item.id)}> CONCLUIR </button>
                      <img onClick={() => listarInformacoes(item.cpf)} src="/assets/images/iconEdit.png" alt="" />
                      <img onClick={() => removerLocacao(item.id)} src="/assets/images/iconDelete.png" alt="" /> 
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