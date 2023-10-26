import fondo from "../images/imgcel.jpg"
import { homes } from "../info"
import { Link } from "react-router-dom";

const Promociones = () => {
    return( 
        <div className="row  d-flex justify-content-center" style={{marginRight:"-15px", marginLeft:"-15px"}}>
            <div className="col py-2 text-center text-justify" style={{backgroundColor:"#f5f5f7"}}>
                <h1 style={{fontFamily:"Gilroy-Bold", fontWeight:"20px"}}>
                SOLUCIÓN INTEGRAL 
                </h1>
                <p>
                Compacta. Veloz. Temática personalizada. <br />

                <Link to={'/informacion'} style={{textDecoration:"none"}}><p>Acceder a informacion </p> </Link>
                </p>
            </div>
            <div className="row py-1 d-flex p-4 justify-content-center " style={{backgroundColor:"#f5f5f7"}}>   
                <div className="row col-md-7" style={{backgroundColor:"#f5f5f7"}}>
                        <img src={fondo} alt="fondo"/>
                </div>
                <div className="row col-md-7" style={{padding:"65px"}}></div>    
            </div>    

            {homes.map(({colorFondo, textColor, titulo, texto, imagen } ) => (

                <div className="row py-3 d-flex p-4 justify-content-center " style={{backgroundColor: colorFondo }}>   
                    <div className="container d-flex p-4 justify-content-center">
                        <h1 className={textColor} style={{fontFamily:"Gilroy-Bold", fontSize:"25px"}}>{titulo}</h1>
                    </div>
                    <div className="container">
                        <div className="py-2 col text-center text-justify">
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