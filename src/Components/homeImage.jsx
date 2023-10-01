import fondo from "./images/fondo.png"

const Promociones = () => {
    return( 
        <div className="row py-3 mt--1" style={{backgroundColor:"black" }}>   
            <div className="container d-flex p-4 justify-content-center">
                <p className="text-light" style={{fontFamily:"unset", fontSize:"20px"}}>PLATAFORMA UNIVERSAL DISEÑO 2024</p>

            </div>
            <div className="row">
                <img src={fondo} alt="fondo"/>
            </div>  

            <div className="container d-flex p-4 justify-content-end">
                <a href="#" style={{textDecoration:"none"}}>Más información... </a>
            </div>
        </div>        
    );
};

export default Promociones;