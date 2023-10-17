import fondo from "./images/img4.png"
import imgSlots from "./images/img3.jpg"
import imgDeportivas from "./images/img2.png"
import imgRuleta from "./images/img1.jpg"

const Promociones = () => {
    return( 
        <div className="row py-3 d-flex justify-content-center" style={{marginRight:"-15px", marginLeft:"-15px"}}>

            <div className="row py-3 d-flex p-4 justify-content-center " style={{backgroundColor:"white" }}>   
                
                <div className="row">
                    <img src={fondo} alt="fondo"/>
                </div>  

                <div className="container d-flex p-4 justify-content-center">
                    <a href="/" style={{textDecoration:"none"}}>Más información... </a>
                </div>
            </div>    

             <div className="row py-3 d-flex p-4 justify-content-center " style={{backgroundColor:"BLACK" }}>   
                <div className="container d-flex p-4 justify-content-center">
                    <p className="text-white" style={{fontFamily:"unset", fontSize:"30px"}}>DEPORTIVAS</p>
                </div>
                <div className="container">
                    <div className="text-white py-2 col text-center text-justify">
                        <p style={{fontFamily:"sans-serif", fontSize:"12px", margin:"0"}}>Más de 5.000 juegos fascinantes disponibles en suite <br></br>de alta velocidad, máxima calidad gráfica y ostentosos premios <br></br>de la mano de los mejores proveedores del mundo. Pragmatic Play, Ruby, Bongoo, Ka Gaming ...</p>
                    </div>
                </div>
                <div className="row">
                    <img src={imgDeportivas} alt="fondo"/>
                </div>  

                <div className="container d-flex p-4 justify-content-center">
                    <a href="/" style={{textDecoration:"none"}}>Más información... </a>
                </div>
            </div>    

            <div className="row py-3 d-flex p-4 justify-content-center " style={{backgroundColor:"#ededed" }}>   
                <div className="container d-flex p-4 justify-content-center">
                    <p className="text-dark" style={{fontFamily:"unset", fontSize:"30px"}}>SLOTS</p>
                </div>
                <div className="container">
                    <div className="text-dark py-2 col text-center text-justify">
                        <p style={{fontFamily:"sans-serif", fontSize:"12px", margin:"0"}}>Más de 5.000 juegos fascinantes disponibles en suite <br></br>de alta velocidad, máxima calidad gráfica y ostentosos premios <br></br>de la mano de los mejores proveedores del mundo. Pragmatic Play, Ruby, Bongoo, Ka Gaming ...</p>
                    </div>
                </div>
                <div className="row">
                    <img src={imgSlots} alt="fondo"/>
                </div>  

                <div className="container d-flex p-4 justify-content-center">
                    <a href="/" style={{textDecoration:"none"}}>Más información... </a>
                </div>
            </div>  

            <div className="row py-3 d-flex p-4 justify-content-center " style={{backgroundColor:"BLACK" }}>   
                <div className="container d-flex p-4 justify-content-center">
                    <p className="text-white" style={{fontFamily:"unset", fontSize:"30px"}}>CASINO EN VIVO</p>
                </div>
                <div className="container">
                    <div className="text-white py-2 col text-center text-justify">
                        <p style={{fontFamily:"sans-serif", fontSize:"12px", margin:"0"}}>Más de 5.000 juegos fascinantes disponibles en suite <br></br>de alta velocidad, máxima calidad gráfica y ostentosos premios <br></br>de la mano de los mejores proveedores del mundo. Pragmatic Play, Ruby, Bongoo, Ka Gaming ...</p>
                    </div>
                </div>
                <div className="row">
                    <img src={imgRuleta} alt="fondo"/>
                </div>  

                <div className="container d-flex p-4 justify-content-center">
                    <a href="/" style={{textDecoration:"none"}}>Más información... </a>
                </div>
            </div>  
            
        </div>
    );
};

export default Promociones;