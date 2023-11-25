



function Busqueda() {

    const buscarProducto = (e) => {
        
        e.preventDefault();

        console.log(e);

        console.log('=============================================');
        
        console.log(e.target);

        console.log('=============================================');
        
        alert('Estamos buscando tu Producto');

        
    }

    return (

        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button onClick={ buscarProducto } className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )

}


export default Busqueda;