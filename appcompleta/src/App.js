

//3. Importamos el controlador de las rutas y las rutas
import { Routes, Route } from 'react-router-dom';

import Navegacion from './componentes/Navegacion';
import Main from './componentes/Main';
import Formulario from './componentes/Formulario';
import Footer from './componentes/Footer';


function App() {
  return (
    <div className="App">

      <Navegacion />

{/* 4. Configurar las rutas  */}
      <Routes>
        <Route path='/main' element= { <Main /> } />
        <Route path='/formulario' element= { <Formulario /> } />
      </Routes>

      <Footer />
      
    </div>
  );
}

export default App;
