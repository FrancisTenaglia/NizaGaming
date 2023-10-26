import React from "react";
import ImgLive from "../images/casinoVivo.png"
import ImgSlots from "../images/slots.png"

const Informacion = () => {
    return (
            <div className="row row-cols-auto d-flex justify-content-center py-3">

                <div className="card m-4"style={{fontSize:"17px" , backgroundColor:"#ededed"}}>

                        <div className="card-body">
                            <img src={ImgLive} className="card-img-top" style={{transform:"scale(0.8)"}} alt="..." />
                            <p className="card-text" style={{textAlign:"justify"}}> Potencia tu casino en línea con nuestra plataforma. ¡Gestión sencilla y más ganancias garantizadas!</p>
                        </div>
                        <ul className="list-group list-group-flush" style={{backgroundColor:"#ededed"}}>
                            <li className="list-group-item" style={{backgroundColor:"#ededed"}}><b>4</b> Webpages designs</li>
                            <li className="list-group-item" style={{backgroundColor:"#ededed"}}><b>4</b> Mockups</li>
                            <li className="list-group-item" style={{backgroundColor:"#ededed"}}>Alta resolución</li>
                            <li className="list-group-item" style={{backgroundColor:"#ededed"}}>Distribuidores en vivo</li>
                            <li className="list-group-item" style={{backgroundColor:"#ededed"}}>Interacción en tiempo real</li>
                            <li className="list-group-item" style={{backgroundColor:"#ededed"}}>Transmisión en directo</li>


                        </ul>
                </div>

                <div className="card m-4"style={{fontSize:"17px" , backgroundColor:"#ededed"}}>

                        <div className="card-body">
                            <img src={ImgSlots} className="card-img-top" style={{transform:"scale(0.8)"}} alt="..." />
                            <p className="card-text" style={{textAlign:"justify"}}> Aumenta tus ingresos con nuestra plataforma de máquinas tragamonedas en línea. Ofrece una experiencia inmersiva y personalizable, con temas atractivos y funciones especiales. Garantiza estabilidad y seguridad para tus transacciones con las <b>MEJORES MARCAS</b></p>
                        </div>
                        <ul className="list-group list-group-flush" style={{backgroundColor:"#ededed"}}>
                            <li className="list-group-item" style={{backgroundColor:"#ededed"}}><b>Pragmatic Play</b></li>
                            <li className="list-group-item" style={{backgroundColor:"#ededed"}}><b>Bongoo</b></li>
                            <li className="list-group-item" style={{backgroundColor:"#ededed"}}><b>Ruby Play</b></li>
                            <li className="list-group-item" style={{backgroundColor:"#ededed"}}><b>Spinomenal</b></li>
                            <li className="list-group-item" style={{backgroundColor:"#ededed"}}><b>Microgaming</b></li>
                            <li className="list-group-item" style={{backgroundColor:"#ededed"}}><b>Booming</b></li>
                            <li className="list-group-item" style={{backgroundColor:"#ededed"}}><b>RedTiger</b></li>
                            <li className="list-group-item" style={{backgroundColor:"#ededed"}}><b>ZeusPlay</b></li>



                        </ul>
                </div>

            </div>
    );
};

export default Informacion;