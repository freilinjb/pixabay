import React, { useState } from 'react';
import Error from './Error';

const Formulario = () => {

    const [termino, setTermino] = useState('');
    const [error, setError] = useState(false);

    const buscarImagenes =e=> {

        e.preventDefault();

        //validar
        if(termino.trim() === ''){
            setError(true);
            return;
        }

        setError(false);
        //enviar el termino de busqueda hacia el componente principal

    }
    return ( 
        <form onSubmit={buscarImagenes}>
            <div className="row justify-content-center">
                <div className="form-group col-md-8">
                    <input type="text" name="buscador" onChange={e =>setTermino(e.target.value)} className="form-control" placeholder="Buscador de Imagen, ejemplo: futbol o cafe"/>
                </div>
                <div className="form-group col-md-4">
                    <button type="submit" className="btn btn-primary btn-block">Consultar</button>
                </div>
            </div>
            { error ? <Error mensaje="Agrergue un término de búsqueda"/> : null }

        </form>
     );
}
 
export default Formulario;