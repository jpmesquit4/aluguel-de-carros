import './index.scss'
import MenuLeft from '../../components/menuleft';
import Cabecalho from '../../components/cabecalho';

import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import { finalizarLocacao, listarAllInfoLocacoes } from '../../api/locacaoApi.js';
import { useState, useEffect } from 'react';

export default function ConcluirLocacao() {

  const [listaInfoAll, setListaInfoAll] = useState([]);
  const { idParam } = useParams();

  const [dataEntrega, setDataEntrega] = useState();
  const [kmEntrega, setKmEntrega] = useState();
  const [valorTotal, setValorTotal] = useState();
  const [situacao, setSituacao] = useState();

  console.log(listaInfoAll)

  useEffect(() => {
    if (idParam) {
      listarLocacaoPorId();
    }
  }, [idParam])

  function dataFormatada(data) {
    
    return data ? new Date(data).toLocaleDateString('pt-BR') : '';

  }

  async function listarLocacaoPorId() {
    
    let response = await listarAllInfoLocacoes(idParam);
    setListaInfoAll([response]);

  }

  async function salvarRestoInfo() {
    
    try {
      await finalizarLocacao(situacao, kmEntrega, dataEntrega, valorTotal, idParam);
      toast.success("Locação Finalizada!")
      listarLocacaoPorId();
    }
    catch (err) {
      if (err.response)
        toast.error(err.response.data.error);
      else
        toast.error(err.message);
    }

  }


  return (
    <div className='pagina-ConcluirLocacao'>
      
      <MenuLeft />

      <div className='principal'>
        <Cabecalho />
        
        <main>

          <p>ÁREA ADMINISTRATIVA</p>
          <h1>Entrega de Veículo</h1>

          <div className='info-locacao'>

            {listaInfoAll.map(item => 
              <div className='left'>
              <nav>
                <h5>Cliente:</h5>
                <p>{item.nome}</p>
              </nav>
              
              <nav>
                <h5>Veiculo:</h5>
                <p>{item.modelo + ", " + item.ano + ", " + item.placa}</p>
              </nav>

              <nav>
                <h5>Data de Entrega:</h5>
                <p>{dataFormatada(item.dataEntrega)}</p>
              </nav>

              <nav>
                <h5>Seguro:</h5>
                <p>{item.seguro ? "Sim" : "Não"}</p>
              </nav>

            </div>
            )}

            {listaInfoAll.map(item => 
              <div className='right'>
                <h5>Observações</h5>
                <p>{item.situacao}</p>
              
              </div>
            )}

          </div>

          <div className='finalizar-locacao'>
            <h1>Finalizar Locação</h1>

            <div className='inputs-finalizar'>

              <div className='left'>
                <label>Data de Entrega</label>
                <input type="date" value={dataEntrega} onChange={e => setDataEntrega(e.target.value)} />

                <label>KM Entrega</label>
                <input type="number" min='0' max='1000000' value={kmEntrega} onChange={e => setKmEntrega(e.target.value)}/>

                <label>TOTAL</label>
                <input type="text" value={valorTotal} onChange={e => setValorTotal(e.target.value)} />   
              </div> 
              
              <div className='right'>
                <label>Observações</label>
                <textarea cols="30" rows="10" value={situacao} onChange={e => setSituacao(e.target.value)}></textarea>

                <button onClick={salvarRestoInfo}>SALVAR LOCAÇÃO</button>
              </div>

            </div>

          </div>

        </main>

      </div>
      

    </div>
  );
}