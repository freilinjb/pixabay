import React from 'react';

const Formulario = () => {
    return ( 
        <form>
            <div className="row justify-content-center">
                <div className="form-group col-md-8">
                    <input type="text" name="buscador" className="form-control" placeholder="Buscador de Imagen, ejemplo: futbol o cafe"/>
                </div>
                <div className="form-group col-md-4">
                    <button type="button" name="" id="" className="btn btn-primary btn-block">Consultar</button>
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;