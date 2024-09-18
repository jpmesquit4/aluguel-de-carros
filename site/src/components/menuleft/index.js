import './index.scss';
import { useNavigate } from 'react-router-dom';

export default function MenuLeft() {
  
  const navigate = useNavigate();

  function abrirPaginaVeiculos() {
    navigate("/veiculo")
  }

  function abrirPaginaCliente() {
    navigate("/")
  }

  function abrirPaginaLocacao() {
    navigate("/locacao")
  }

  return (
    <div className='menu-left'>

        <header>
            <img src="/assets/images/logo.png" alt="" />
            <h1>Elite<span>Wheelz</span></h1>
        </header>

        <main>
          <div className="section">
            <img src="assets/images/iconHome.svg" alt="" />
            <p>Home</p>
          </div>
          <div onClick={abrirPaginaCliente} className="section">
            <img src="assets/images/iconCliente.png" alt="" />
            <p>Clientes</p>
          </div>
          <div onClick={abrirPaginaVeiculos} className="section">
            <img src="assets/images/iconVeiculos.png" alt="" />
            <p>Veículos</p>
          </div>
          <div onClick={abrirPaginaLocacao} className="section">
            <img src="assets/images/iconlocacao.png" alt="" />
            <p>Locação</p>
          </div>
        </main>

      </div>
  );

}