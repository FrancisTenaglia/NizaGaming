import imgMenu from "../images/menuu.png"

const NavBar = () => {
    return(
        <div className="mb-2 fixed-top " style={{marginLeft:"-10px", marginRight:"-10px", fontFamily:"Arimo"}}>
            <nav className="navbar navbar-expand-lg bg-black">
            <div className="container">
                <a className="navbar-brand text-white" style={{marginLeft:"10px"}} href="/">NZ</a>
                    
                <button className="navbar-toggler bg-black" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <img src={imgMenu} alt="#" style={{}} />
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    
                        <li className="nav-item dropdown">
                            <a className="nav-link text-light" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Soluciónes
                            </a>
                            <ul className="dropdown-menu bg-dark">
                                <li><a className="dropdown-item text-light" href="/">Solución Personalizada</a></li>
                                <li><a className="dropdown-item text-light" href="/">Casino Online Integral</a></li>
                                <li><a className="dropdown-item text-light" href="/">Retail</a></li>
                            </ul>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link text-light" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos y servicios
                            </a>
                            <ul className="dropdown-menu bg-dark">
                                <li><a className="dropdown-item text-light" href="/">Casino en vivo</a></li>
                                <li><a className="dropdown-item text-light" href="/">Juegos</a></li>
                                <li><a className="dropdown-item text-light" href="/">Apuestas Deportivas</a></li>
                                <li><a className="dropdown-item text-light" href="/">Servidores escalables</a></li>
                                <li><a className="dropdown-item text-light" href="/">Sistemas de pago</a></li>
                                <li><a className="dropdown-item text-light" href="/">Asesoramiento</a></li>
                                <li><a className="dropdown-item text-light" href="/">Marketing</a></li>
                            </ul>
                        </li>


                        <li className="nav-item dropdown">
                            <a className="nav-link text-light" href="/" role="button" aria-expanded="false">
                            Back Office
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link text-light" href="/" role="button" aria-expanded="false">
                            Noticias y eventos
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link text-light" href="/" role="button" aria-expanded="false">
                            Contacto
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link text-light" href="/" role="button" aria-expanded="false">
                            Soporte
                            </a>
                        </li>


                    </ul>
                </div>
            </div>
            </nav> 


            {/* <Link className="navbar-brand" to={"/"}></Link>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({isActive}) => (isActive? 'nav-link' : 'nav-link')} to={"/"}>HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => (isActive? 'nav-link' : 'nav-link')} to={"/"}> <b>Ropa</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => (isActive? 'nav-link' : 'nav-link')} to={"/"}><b>Calzados</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => (isActive? 'nav-link' : 'nav-link')} to={"/"}><b>Accesorios</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => (isActive? 'nav-link' : 'nav-link')} to={"/"}><b>Marketplace</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => (isActive? 'nav-link' : 'nav-link')} to={"/"}><b>Sobre Nosotros</b></NavLink>
                            </li>
                        </ul>                
                    </div>
                </div>
            </nav> */}
        </div>
    );
};

export default NavBar;