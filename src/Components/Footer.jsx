import { NavLink } from "react-router-dom";
const Footer =() =>{
    return(
        <div className=" row bg-dark">
            <div className="row1 estiloFooter">
                
                <div className="col2 text-end">
                    
                </div>
                
            </div>
            
            <div className="row2 estiloFooter">
                <div className="col1">
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
                </div> <br />
            </div>
        </div>
    );
};

export default Footer;   