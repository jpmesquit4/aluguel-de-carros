import './index.scss';
import axios from 'axios';

import MenuLeft from '../../components/menuleft';
import Cabecalho from '../../components/cabecalho';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { alterarInfoVeiculo, deletarVeiculo, inserirVeiculo, listarCarrosFiltrado, listarTipoAndIdTipo, listarVeiculosPorPlaca } from '../../api/veiculoApi.js';

export default function VeiculoHome() {

  const [idTipo, setIdTipo] = useState(1);
  const [modelo, setModelo] = useState('');
  const [marca, setMarca] = useState('');
  const [ano, setAno] = useState('');
  const [placa, setPlaca] = useState('');
  const [id, setId] = useState(0);
  const [filtro, setFiltro] = useState('');
  const [listaVeiculos, setListaVeiculos] = useState([]);
  const [listaTipo, setListaTipo] = useState([]);

  async function listarVeiculos() {

    let url = `http://localhost:5000/veiculo`;
    let response = await axios.get(url);

    setListaVeiculos(response.data);

  }

  async function listarTipos() {

    let response = await listarTipoAndIdTipo();

    setListaTipo(response);

  }

  async function salvarVeiculo() {

    try {

      if (id === 0) {
        const novoVeiculo = await inserirVeiculo(idTipo, modelo, marca, ano, placa)
        setPlaca(novoVeiculo.id);
        toast.success("Cliente cadastrado com sucesso!")
        listarVeiculos();
        setModelo('');
        setMarca('');
        setAno('');
        setPlaca('');
        setId(0);
      }
      else {
        await alterarInfoVeiculo(idTipo, modelo, marca, ano, placa, id);
        toast.success("Informações do veículo alterada com sucesso!")
        listarVeiculos();
      }

    }
    catch (err) {
      if (err.response)
        toast.error(err.response.data.error);
      else
        toast.error(err.message);
    }

  }

  async function listarInformacoes(placa) {

    try {
      const resposta = await listarVeiculosPorPlaca(placa);
      setModelo(resposta[0].modelo);
      setMarca(resposta[0].marca);
      setAno(resposta[0].ano);
      setPlaca(resposta[0].placa);
      setId(resposta[0].id);
      setIdTipo(resposta[0].idTipo);
    }
    catch (err) {
      if (err.response)
        toast.error(err.response.data.error);
      else
        toast.error(err.message);
    }

  }

  async function removerVeiculo(id) {
    try {
      await deletarVeiculo(id);
      toast.success("Cliente deletado com sucesso!")
      listarVeiculos();
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

      const response = await listarCarrosFiltrado(filtro);
      setListaVeiculos(response); 

    }
    catch (err) {
      if (err.response)
        toast.error(err.response.data.error);
      else
        toast.error(err.message);
    }

  }

  function novoClick() {
    setModelo('');
    setMarca('');
    setAno('');
    setPlaca('');
    setId(0);
    setIdTipo(1);
  }

  useEffect(() => {
    listarVeiculos();
    listarTipos();
  }, []);



  return (
    <div className='pagina-VeiculoHome'>
      <MenuLeft />

      <div className='principal'>
        <Cabecalho />

        <main>

          <p>ÁREA ADMINISTRATIVA</p>
          <h1>Controle de Veículos</h1>

          <div className='newVeiculos'>

            <h1>Novo Veículo</h1>

            <div className='inputs-newVeiculos'>

              <label>Tipo</label>
              <select onChange={e => setIdTipo(e.target.value)} value={idTipo}>
                {listaTipo.map(item =>

                  <option value={item.idTipo} > {item.tipo} </option>

                )}
              </select>

              <label>Modelo</label>
              <input type="text" value={modelo} onChange={e => setModelo(e.target.value)} />

              <label>Marca</label>
              <input type="text" value={marca} onChange={e => setMarca(e.target.value)} />

              <label>Ano</label>
              <input type="text" value={ano} onChange={e => setAno(e.target.value)} />

              <label>Placa</label>
              <input type="text" value={placa} onChange={e => setPlaca(e.target.value)} />

            </div>

            <div className='buttons'>
              <button onClick={salvarVeiculo}>{id === 0 ? "SALVAR" : "ALTERAR"}</button>
              <button onClick={novoClick}>NOVO</button>
            </div>

          </div>

          <div className='listVeiculos'>

            <h1>Lista de Veículos</h1>

            <label>Modelo, Marca, Placa</label>
            <nav>
              <input type="text" value={filtro} onChange={e => setFiltro(e.target.value)} />
              <img src="/assets/images/iconLupa.png" onClick={filtrar} />
            </nav>

            <div className='table-listVeiculos'>
              <table>
                <thead>
                  <tr>
                    <th>Modelo</th>
                    <th>Marca</th>
                    <th>Ano</th>
                    <th>Tipo</th>
                    <th>Placa</th>
                  </tr>
                </thead>
                <tbody>
                  {listaVeiculos.map(item =>
                    <tr>
                      <td>{item.modelo}</td>
                      <td>{item.marca}</td>
                      <td>{item.ano}</td>
                      <td>{item.tipo}</td>
                      <td>{item.placa}</td>
                      <img onClick={() => listarInformacoes(item.placa)} src="/assets/images/iconEdit.png" alt="" />
                      <img onClick={() => removerVeiculo(item.id)} src="/assets/images/iconDelete.png" alt="" />
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