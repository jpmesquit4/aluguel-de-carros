import './index.scss';
import MenuLeft from '../../components/menuleft';

export default function Home() {
  return (
    <div className="pagina-Home">

      <MenuLeft />

      <div className="principal">

        <header>
          <h4>Olá, que bom que você voltou!</h4>
          
          <nav>A</nav>
        </header>

        <main>

          <p>ÁREA ADMINISTRATIVA</p>
          <h1>Controle de Clientes</h1>

          <div className='newClient'>

            <h1>Novo Cliente</h1>

            <div className="inputs-newClient">

              <label>Nome</label>
              <input type="text" />

              <label>Email</label>
              <input type="text" />

              <label>Telefone</label>
              <input type="text" />

              <label>CPF</label>
              <input type="text" />

              <label>CNH</label>
              <input type="text" />
              
            </div>

            <button>SALVAR</button>
            
          </div>

          <div className="listClient">

            <h1>Lista de Clientes</h1>

            <label>Nome</label>
            <nav>
              <input type="text" />
              <img src="/assets/images/iconLupa.png" alt="" />
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
                  <tr>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <img src="/assets/images/iconEdit.png" alt="" />
                    <img src="/assets/images/iconDelete.png" alt="" />
                  </tr>
                </tbody>
              </table>

            </div>
            

          </div>

        </main>

      </div>

    </div>
  );
}

