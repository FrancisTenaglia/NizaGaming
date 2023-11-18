import { homes } from "../info"

const Promociones = () => {
    return( 
        <div className="row  d-flex justify-content-center" style={{marginRight:"-15px", marginLeft:"-15px",}}>
            {homes.map(({colorFondo, textColor, titulo, texto, imagen } ) => (

                <div className="row mt-2 pt-4 d-flex justify-content-center"  style={{backgroundColor: colorFondo,  height:"450px" }}>   
                    <div className="container">
                        <div className="py-2 col text-center text-justify">
                        <h1 className={textColor} style={{fontFamily:"Albert sans", fontSize:"35px", }}>{titulo}</h1>
                            <p className={textColor} style={{fontFamily:"Albert sans", fontSize:"18px", margin:"0"}}>{texto}</p>
                        </div>
                    </div>
                    <div className="row pt-4 col-md-6 mqueryHomeImage" >
                        <img src={imagen} alt="fondo" style={{ marginBottom:"80px", transform:"scale(1.1)"}}/>
                    </div>  

                </div>    
            ))}
        </div>
    );
};

export default Promociones;