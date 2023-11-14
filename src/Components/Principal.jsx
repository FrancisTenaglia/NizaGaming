import fondo from "../images/Homeimg.png"
import { Link } from "react-router-dom";

const Principal = () => {
    
    return( 
        <div className="row  d-flex justify-content-center" style={{marginRight:"-15px", marginLeft:"-15px"}}>
                <div className="row d-flex justify-content-center"  style={{backgroundColor: "secondary" }}>   
                    <div className="container" >
                        <div className="py-2 col text-center text-justify">
                        <h1 style={{fontFamily:"Albert sans", fontSize:"37px", marginTop:"58px"}}>Solución Integral</h1>
                        <p  style={{fontFamily:"Albert sans", fontSize:"18px"}}>Compacta. Veloz. Temática personalizada. <br />
                         <Link to={'/informacion'} style={{textDecoration:"none"}}><p style={{color:"#1c66ac", fontFamily:"sans-serif", fontSize:"15px"}}>Acceder a información »  </p> </Link>
                        </p>
                        </div>
                    </div>
                    <div className="row col-md-6 ">
                        <img src={fondo} alt="fondo" />
                    </div>  

                    <div className="row" style={{height:"100px"}}></div>
                </div>    
        </div>
    );
};

export default Principal;