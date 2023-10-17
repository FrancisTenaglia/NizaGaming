const NavBar = () => {
    return(
        <div style={{marginLeft:"-15px", marginRight:"-15px"}}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="/">NZ</a>
                    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center " id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Casino Online
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Solución Completa</a></li>
                                <li><a className="dropdown-item" href="/">Games</a></li>
                                <li><a className="dropdown-item" href="/">Live Casino</a></li>
                                <li><a className="dropdown-item" href="/">Sportsbook</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Retail
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Solución Completa</a></li>
                                <li><a className="dropdown-item" href="/">Games</a></li>
                                <li><a className="dropdown-item" href="/">Live Casino</a></li>
                                <li><a className="dropdown-item" href="/">Sportsbook</a></li>
                            </ul>
                        </li>
                    
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Conexión Api
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Solución Completa</a></li>
                                <li><a className="dropdown-item" href="/">Games</a></li>
                                <li><a className="dropdown-item" href="/">Esport</a></li>
                                <li><a className="dropdown-item" href="/">Sportsbook</a></li>
                            </ul>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/" role="button" aria-expanded="false">
                            Eventos
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/" role="button" aria-expanded="false">
                            Noticias
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