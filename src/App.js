import React,{ useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  //state de la app
  const [busqueda, setBusqueda] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(5);

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

      //verificando la cantidad de imagenes 
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      setTotalPaginas(calcularTotalPaginas);

  
    }
    consultarAPI();
  },[busqueda]);

  //definir la pagina anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;

    //validando que no permita pasar numeros negativos
    if(nuevaPaginaActual === 0) return;

    setPaginaActual(nuevaPaginaActual);
  }
    //definir la pagina siguiente
    const paginaSiguiente = () => {
      const nuevaPaginaActual = paginaActual + 1;

      //valida que no permite dar a siguiente si la pagina actual es mayor que la total 
      if(nuevaPaginaActual > totalPaginas) return;

      setPaginaActual(nuevaPaginaActual);
    }

  return (
    <div className="container">
        <div className="jumbotron special-color-dark">
          <p className="lead text-center text-white">Buscador de Imágenes</p>
          <Formulario setBusqueda={setBusqueda}/>
        </div>
        <div className="row justify-content-center">
          <ListadoImagenes imagenes={imagenes}/>
          
          {(paginaActual === 1) ? null : 
          (
            <button type="button" className="btn btn-info" onClick={paginaAnterior}>&laquo; Anterior</button>
          ) }

          {(paginaActual === totalPaginas) ? null :
          (
            <button type="button" className="btn btn-info" onClick={paginaSiguiente}>Siguiente &raquo;</button>
          )}
        </div>
    </div>
  );
}

export default App;
