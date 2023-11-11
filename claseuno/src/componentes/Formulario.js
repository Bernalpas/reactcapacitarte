

function Suma() {
    let a = 5;
    let b = 100;

    let resultado = a + b;

    alert(`El resultado de la suma es ${resultado}`);

    return console.log(`El resultado de la suma es ${resultado}`);
}



function Formulario() {

    return (

        <div>

            <h1>
                Evento de la Función Suma
            </h1>

            <button onClick={Suma} type="button" class="btn btn-primary">Ejecutar Suma</button>

        </div>

    )
    
}

export default Formulario;