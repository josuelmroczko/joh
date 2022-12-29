import './estilos.css';
import Topo from './componentes/Topo/index';
import Competencias from './componentes/modal/index';
import RedesSociais from './componentes/RedesSociais/index';

function App() {
  return (
    <div className="App">
     <Topo/>
     <Competencias/>
     <RedesSociais/>
    </div>
  );
}

export default App;
