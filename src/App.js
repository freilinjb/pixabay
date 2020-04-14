import React from 'react';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="container">
        <div className="jumbotron special-color-dark">
          <p className="lead text-center text-white">Buscador de Imágenes</p>
          <Formulario/>
        </div>
    </div>
  );
}

export default App;
