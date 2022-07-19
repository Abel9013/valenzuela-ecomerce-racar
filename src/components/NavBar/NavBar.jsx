import CartWidget from "../cartWidget/CartWidget";

const NavBar = () => {
    console.log('es es es este');
  return (
    <>
      <header className="header">
            <div className="header__barra">
                <div className="header__navegacion">
                    <a href="##" className="header__link">
                        Inicio
                    </a>
                    <a href="##" className="header__link">
                        Productos
                    </a>
                    <a href="##" className="header__link">
                        Nosotros
                    </a>
                    <a href="##" className="header__link">
                        Contancto
                    </a>
                    <a href="##" className="header__link carrito">
                        <CartWidget />
                    </a>
                </div>

            </div> 
      </header>
    </>
  );
};

export default NavBar;