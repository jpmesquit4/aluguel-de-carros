import './index.scss';

export default function MenuLeft() {
  
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
          <div className="section">
            <img src="assets/images/iconCliente.png" alt="" />
            <p>Clientes</p>
          </div>
          <div className="section">
            <img src="assets/images/iconVeiculos.png" alt="" />
            <p>Veículos</p>
          </div>
          <div className="section">
            <img src="assets/images/iconlocacao.png" alt="" />
            <p>Locação</p>
          </div>
        </main>

      </div>
  );

}