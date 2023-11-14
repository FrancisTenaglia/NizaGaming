import imgMenu from "../images/menuu.png"
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="mb-2 fixed-top " style={{ backdropFilter:"blur(20px)", backgroundColor:"rgba(0, 0, 0, 0.8)",marginLeft:"-12px", marginRight:"-12px", fontFamily:"Arimo", }}>
            <nav className="navbar navbar-expand-lg" style={{ height:"50px", backdropFilter:"blur(20px)", backgroundColor:"rgba(0, 0, 0, 0.8)"}}>
            <div className="container">
                <Link className="navbar-brand text-white" style={{marginLeft:"10px", marginTop:"0px", fontWeight:"70px"}} to={'/'}>NZ</Link>
                    
                <button className="navbar-toggler" style={{border:"none"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <img src={imgMenu} alt="#" style={{height:"28px", width:"28px"}} />
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown" style={{background:"transparent"}}>
                    <ul className="navbar-nav"  style={{paddingLeft:"10px",  backgroundColor:"black"}}>
                    
                        <li className="nav-item dropdown">
                            <Link className="nav-link text-light" to={'/'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Soluciónes
                            </Link>
                            <ul className="dropdown-menu bg-black">
                                <li><Link className="dropdown-item text-light" to={'/'}>Solución Integral</Link></li>
                                <li><Link className="dropdown-item text-light" to={'/'}>Solución Personalizada</Link></li>
                                <li><Link className="dropdown-item text-light" to={'/'}>Retail</Link></li>
                            </ul>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <Link className="nav-link text-light" to={'/'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos y servicios
                            </Link>
                            <ul className="dropdown-menu bg-black">
                                <li><Link to={'/proveedores'} className="dropdown-item text-light">Proveedores</Link></li>
                                <li><Link className="dropdown-item text-light" to={'/'}>Apuestas Deportivas</Link></li>
                                <li><Link className="dropdown-item text-light" to={'/'}>Servidores escalables</Link></li>
                                <li><Link className="dropdown-item text-light" to={'/'}>Sistemas de pago</Link></li>
                                <li><Link className="dropdown-item text-light" to={'/'}>Asesoramiento legal</Link></li>
                                <li><Link className="dropdown-item text-light" to={'/'} role="button" aria-expanded="false">Sistema de Agentes</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link text-light" to={'/'} role="button" aria-expanded="false">
                            Noticias y eventos
                            </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link text-light" to={'/'} role="button" aria-expanded="false">
                            Contacto
                            </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link text-light" to={'/'} role="button" aria-expanded="false">
                            Soporte
                            </Link>
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