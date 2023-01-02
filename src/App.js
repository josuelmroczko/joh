import './estilos.css';
import Topo from './componentes/Topo/index';

import RedesSociais from './componentes/RedesSociais/index';
import Projeto from './componentes/Projeto/index';

function App() {
  return (
    <div className="App">
     <Topo/>
     
     <RedesSociais/>
     <Projeto/>
    </div>
  );
}

export default App;
