import fondo from "../images/Homeimg7.png";
import { Link } from "react-router-dom";
import "../Components/style.css";


const Principal = () => {
    
    return( 
        <div className="row d-flex justify-content-center " style={{marginLeft:"-15px", marginRight:"-15px", backgroundColor:"#f5f5f7"}}>
                <div className="row d-flex justify-content-center"  style={{backgroundColor: "secondary" }}>   
                    <div className="container" >
                        <div className="py-2 col text-center text-justify">
                        <h1 style={{fontFamily:"Albert sans", fontSize:"37px", marginTop:"58px"}}>Solución Integral</h1>
                        <p  style={{fontFamily:"Albert sans", fontSize:"18px"}}>Compacta. Velóz. Temática personalizada. <br />
                         <Link to={'/informacion'} style={{textDecoration:"none"}}><p style={{color:"#1c66ac", fontFamily:"sans-serif", fontSize:"15px"}}>Acceder a información »  </p> </Link>
                        </p>
                        </div>
                    </div>
                    <div className="row col-md-6 mquery">
                        <img src={fondo} alt="fondo" style={{marginBottom:"40px", }} />
                    </div>  
                </div>    
        </div>
    );

    
};

export default Principal;