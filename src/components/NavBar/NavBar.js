import CartWidget from "../cartWidged/cartWidged";
const NavBar =() =>{
    return (
<nav>
    <h3>Caseritas Del Norte</h3>
    <div>
        <button>Inicio</button>
        <button>Contacto</button>
        <button>Ubicacion</button>
        <button>Variedades</button>
    </div>
    <CartWidget/>
</nav>

    )
}
export default NavBar;