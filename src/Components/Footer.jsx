import { NavLink } from "react-router-dom";
const Footer =() =>{
    return(
        <div className=" row bg-light">
                <div className="col1 ">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to={"/"}>Politicas de Privacidad</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to={"/"}>Defensa del Consumidor</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to={"/"}>Proteccion de datos personales</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to={"/"}>Contacto</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to={"/"}>Volver</NavLink>
                        </li>
                    </ul>
                </div> 
        </div>
    );
};

export default Footer;   