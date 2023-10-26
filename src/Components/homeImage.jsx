import fondo from "../images/img44.png"
import { homes } from "../info"
import { Link } from "react-router-dom";

const Promociones = () => {
    return( 
        <div className="row  d-flex justify-content-center" style={{marginRight:"-15px", marginLeft:"-15px"}}>
            <div className="col py-2 text-center text-justify" style={{backgroundColor:"#f5f5f7"}}>
                <h1 className="" style={{fontFamily:"Gilroy-Bold", fontWeight:"20px"}}>
                Solución Integral
                </h1>
                <p>
                Compacta. Veloz. Temática personalizada. <br />

                <Link to={'/informacion'} style={{textDecoration:"none"}}><p style={{color:"#1c66ac"}}>Acceder a informacion »  </p> </Link>
                </p>

                <img style={{transform:"scale(0.7)"}} src={fondo} alt="fondo"/>
               
  
            </div>
            {homes.map(({colorFondo, textColor, titulo, texto, imagen } ) => (

                <div className="row mt-2 pt-2 d-flex justify-content-center"  style={{backgroundColor: colorFondo, height:"390px" }}>   
                    <div className="container">
                        <div className="py-2 col text-center text-justify">
                        <h1 className={textColor} style={{fontFamily:"Gilroy-Bold", fontSize:"25px"}}>{titulo}</h1>
                            <p className={textColor} style={{fontFamily:"sans-serif", fontSize:"12px", margin:"0"}}>{texto}</p>
                        </div>
                    </div>
                    <div className="row col-md-6">
                        <img src={imagen} alt="fondo"/>
                    </div>  


                </div>    
            ))}
        </div>
    );
};

export default Promociones;