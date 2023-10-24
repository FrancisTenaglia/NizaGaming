import fondo from "../images/img4.png"
import { homes } from "../info"

const Promociones = () => {
    return( 
        <div className="row  d-flex justify-content-center" style={{marginRight:"-15px", marginLeft:"-15px"}}>
            <div className="row py-3 d-flex p-4 justify-content-center " style={{backgroundColor:"white" }}>   
                <div className="row col-md-6">
                        <img src={fondo} alt="fondo"/>
                </div>  
                <div className="container d-flex p-4 justify-content-center">
                </div>
            </div>    

            {homes.map(({colorFondo, textColor, titulo, texto, imagen } ) => (

                <div className="row py-3 d-flex p-4 justify-content-center " style={{backgroundColor: colorFondo }}>   
                    <div className="container d-flex p-4 justify-content-center">
                        <p className={textColor} style={{fontFamily:"unset", fontSize:"30px"}}>{titulo}</p>
                    </div>
                    <div className="container">
                        <div className="py-2 col text-center text-justify">
                            <p className={textColor} style={{fontFamily:"sans-serif", fontSize:"12px", margin:"0"}}>{texto}</p>
                        </div>
                    </div>
                    <div className="row col-md-6">
                        <img src={imagen} alt="fondo"/>
                    </div>  

                    <div className="container d-flex p-4 justify-content-center">
                        <a href="/" style={{textDecoration:"none"}}>Más información... </a>
                    </div>
                </div>    
            ))}
        </div>
    );
};

export default Promociones;