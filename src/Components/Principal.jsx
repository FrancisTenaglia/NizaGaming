import fondo from "../images/img44.png"
import { Link } from "react-router-dom";

const Principal = () => {
    
    return( 
        <div className="row justify-content-center" style={{marginRight:"-15px", marginLeft:"-15px", display:"flex", flexDirection:"column"}}>
            <div className="col py-2 text-center text-justify" style={{backgroundColor:"#f5f5f7"}}>
                <h1 style={{fontFamily:"Albert sans", fontSize:"37px", marginTop:"58px"}}>
                Solución Integral
                </h1>
                <p  style={{fontFamily:"Albert sans", fontSize:"18px"}}>
                Compacta. Veloz. Temática personalizada. <br />

                <Link to={'/informacion'} style={{textDecoration:"none"}}><p style={{color:"#1c66ac", fontFamily:"sans-serif", fontSize:"15px"}}>Acceder a información »  </p> </Link>
                </p>

                <img style={{transform:"scale(0.7)"}} src={fondo} alt="fondo"/>
            </div>
        </div>
    );
};

export default Principal;