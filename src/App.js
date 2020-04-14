import React,{ useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  //state de la app
  const [busqueda, setBusqueda] = useState('');
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const consultarAPI = async() => {
      //validamos que no envie string vacio
      if(busqueda === '') return;
      //per_page = para paginar las busqueda
      const imagenesPorPagina = 30;
      const KEY = "16045392-564108d2892c94cd456fdcd45" 
      const url = `https://pixabay.com/api/?key=${KEY}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      setImagenes(resultado.hits); 
  
    }
    consultarAPI();
  },[busqueda]);
  return (
    <div className="container">
        <div className="jumbotron special-color-dark">
          <p className="lead text-center text-white">Buscador de Imágenes</p>
          <Formulario setBusqueda={setBusqueda}/>
        </div>
        <div className="row justify-content-center">
          <ListadoImagenes imagenes={imagenes}/>
        </div>
    </div>
  );
}

export default App;
