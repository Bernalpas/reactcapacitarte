import React from 'react'
import Imagen from './Imagen'



function enviarDatos() {

    alert('Datos enviados')
    
}



const Formulario = () => {

    return (
        <React.Fragment>
            <div className='text-center mt-5'>
                <h1 className="text-danger">
                    Soy el Formulario
                </h1>
            </div>
            <div className='container mt-5 d-flex justify-content-center'>
                <form onSubmit={ enviarDatos } style={{width: '600px'}}>
                {/* <form> */}
                    <div class="mb-3">
                        <label for="email" class="form-label">Email: </label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre: </label>
                        <input type="text" class="form-control" id="nombre" />
                    </div>
                    <div class="mb-3">
                        <label for="dni" class="form-label">DNI: </label>
                        <input type="number" class="form-control" id="dni" />
                    </div>
{/*                     <button onClick={ enviarDatos } type="submit" className="btn btn-success w-75 mt-4">Enviar Datos</button> */}
                    <button type="submit" className="btn btn-success w-75 mt-4">Enviar Datos</button>
                </form>


                <Imagen />


            </div>
        </React.Fragment>
    )
}

export default Formulario;