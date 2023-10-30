import React, { useState } from "react";
import img from "./images/greentube.png";
import evolu from "./images/Evolution.png";
import ezu from "./images/Ezugui.png";
import prag from "./images/pragmatic.png";


const Juegos = () => {
    const [displayContent, setdisplayContent]= useState(false);

    const handleDisplay = ()=> {
        setdisplayContent(!displayContent)
    }
    return(
        <div className="row pt-2 d-flex justify-content-center" style={{gap:"5px"}} >
            
            <div className="card mb-2" style={{width:"17rem"}} onClick={handleDisplay}>
                <img src={img} className="card-img-top" alt="#" />
                
                <div className="row" style={{display: displayContent ? "" : "none"}}>
                    <div className="card-body">
                        <p className="card-text" style={{fontSize:"13px"}}>Como división interactiva de NOVOMATIC, Greentube realmente es la Casa de los Juegos. Durante más de 12 años, Greentube ha ofrecido entretenimiento de casino seguro a jugadores de todo el mundo..</p>
                    </div>
                    <table class="table">
                        <tbody style={{fontSize:"10px"}}>
                            <tr class="table-active">
                            <td colspan="2" class="table-active" style={{backgroundColor:"#E2DEDE"}}>Número de juegos</td>
                            <td style={{backgroundColor:"#E2DEDE"}}>+ 250</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active">Tipo de juegos</td>
                            <td>Tragaperras, Crupieres en vivo, Juegos casuales, Loterías, Ruleta, Juegos de cartas, Deportes virtuales, Juegos de mesa</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active" style={{backgroundColor:"#E2DEDE"}}>Regiones de operación</td>
                            <td style={{backgroundColor:"#E2DEDE"}}>United Kingdom, Malta, Italy, Spain, Belgium, Latvia, Gibraltar, Alderney, Schleswig-Holstein</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active">Licencia</td>
                            <td>ISO 27001, GLI, SIQ, PCI Security Standards Council, Asensi Technologies</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active" style={{backgroundColor:"#E2DEDE"}}>RTP</td>
                            <td style={{backgroundColor:"#E2DEDE"}}>92-98%</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active">Giros gratis</td>
                            <td>Sí</td>
                            </tr>
                            
                            <tr class="table-active">
                            <td colspan="2" class="table-active" style={{backgroundColor:"#E2DEDE"}}>Jackpots</td>
                            <td style={{backgroundColor:"#E2DEDE"}}>Sí</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card mb-2" style={{width:"17rem"}} onClick={handleDisplay}>
                <img src={evolu} className="card-img-top" alt="#" />
                
                <div className="row" style={{display: displayContent ? "" : "none"}}>
                    <div className="card-body">
                        <p className="card-text" style={{fontSize:"13px"}}>Como división interactiva de NOVOMATIC, Greentube realmente es la Casa de los Juegos. Durante más de 12 años, Greentube ha ofrecido entretenimiento de casino seguro a jugadores de todo el mundo..</p>
                    </div>
                    <table class="table">
                        <tbody style={{fontSize:"10px"}}>
                            <tr class="table-active">
                            <td colspan="2" class="table-active" style={{backgroundColor:"#E2DEDE"}}>Número de juegos</td>
                            <td style={{backgroundColor:"#E2DEDE"}}>+ 250</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active">Tipo de juegos</td>
                            <td>Tragaperras, Crupieres en vivo, Juegos casuales, Loterías, Ruleta, Juegos de cartas, Deportes virtuales, Juegos de mesa</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active" style={{backgroundColor:"#E2DEDE"}}>Regiones de operación</td>
                            <td style={{backgroundColor:"#E2DEDE"}}>United Kingdom, Malta, Italy, Spain, Belgium, Latvia, Gibraltar, Alderney, Schleswig-Holstein</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active">Licencia</td>
                            <td>ISO 27001, GLI, SIQ, PCI Security Standards Council, Asensi Technologies</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active" style={{backgroundColor:"#E2DEDE"}}>RTP</td>
                            <td style={{backgroundColor:"#E2DEDE"}}>92-98%</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active">Giros gratis</td>
                            <td>Sí</td>
                            </tr>
                            
                            <tr class="table-active">
                            <td colspan="2" class="table-active" style={{backgroundColor:"#E2DEDE"}}>Jackpots</td>
                            <td style={{backgroundColor:"#E2DEDE"}}>Sí</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card mb-2" style={{width:"17rem"}} onClick={handleDisplay}>
                <img src={ezu} className="card-img-top" alt="#" />
                
                <div className="row" style={{display: displayContent ? "" : "none"}}>
                    <div className="card-body">
                        <p className="card-text" style={{fontSize:"13px"}}>Como división interactiva de NOVOMATIC, Greentube realmente es la Casa de los Juegos. Durante más de 12 años, Greentube ha ofrecido entretenimiento de casino seguro a jugadores de todo el mundo..</p>
                    </div>
                    <table class="table">
                        <tbody style={{fontSize:"10px"}}>
                            <tr class="table-active">
                            <td colspan="2" class="table-active" style={{backgroundColor:"#E2DEDE"}}>Número de juegos</td>
                            <td style={{backgroundColor:"#E2DEDE"}}>+ 250</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active">Tipo de juegos</td>
                            <td>Tragaperras, Crupieres en vivo, Juegos casuales, Loterías, Ruleta, Juegos de cartas, Deportes virtuales, Juegos de mesa</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active" style={{backgroundColor:"#E2DEDE"}}>Regiones de operación</td>
                            <td style={{backgroundColor:"#E2DEDE"}}>United Kingdom, Malta, Italy, Spain, Belgium, Latvia, Gibraltar, Alderney, Schleswig-Holstein</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active">Licencia</td>
                            <td>ISO 27001, GLI, SIQ, PCI Security Standards Council, Asensi Technologies</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active" style={{backgroundColor:"#E2DEDE"}}>RTP</td>
                            <td style={{backgroundColor:"#E2DEDE"}}>92-98%</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active">Giros gratis</td>
                            <td>Sí</td>
                            </tr>
                            
                            <tr class="table-active">
                            <td colspan="2" class="table-active" style={{backgroundColor:"#E2DEDE"}}>Jackpots</td>
                            <td style={{backgroundColor:"#E2DEDE"}}>Sí</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card mb-2" style={{width:"17rem"}} onClick={handleDisplay}>
                <img src={prag} className="card-img-top" alt="#" />
                
                <div className="row" style={{display: displayContent ? "" : "none"}}>
                    <div className="card-body">
                        <p className="card-text" style={{fontSize:"13px"}}>Como división interactiva de NOVOMATIC, Greentube realmente es la Casa de los Juegos. Durante más de 12 años, Greentube ha ofrecido entretenimiento de casino seguro a jugadores de todo el mundo..</p>
                    </div>
                    <table class="table">
                        <tbody style={{fontSize:"10px"}}>
                            <tr class="table-active">
                            <td colspan="2" class="table-active" style={{backgroundColor:"#E2DEDE"}}>Número de juegos</td>
                            <td style={{backgroundColor:"#E2DEDE"}}>+ 250</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active">Tipo de juegos</td>
                            <td>Tragaperras, Crupieres en vivo, Juegos casuales, Loterías, Ruleta, Juegos de cartas, Deportes virtuales, Juegos de mesa</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active" style={{backgroundColor:"#E2DEDE"}}>Regiones de operación</td>
                            <td style={{backgroundColor:"#E2DEDE"}}>United Kingdom, Malta, Italy, Spain, Belgium, Latvia, Gibraltar, Alderney, Schleswig-Holstein</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active">Licencia</td>
                            <td>ISO 27001, GLI, SIQ, PCI Security Standards Council, Asensi Technologies</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active" style={{backgroundColor:"#E2DEDE"}}>RTP</td>
                            <td style={{backgroundColor:"#E2DEDE"}}>92-98%</td>
                            </tr>
                            <tr class="table-active">
                            <td colspan="2" class="table-active">Giros gratis</td>
                            <td>Sí</td>
                            </tr>
                            
                            <tr class="table-active">
                            <td colspan="2" class="table-active" style={{backgroundColor:"#E2DEDE"}}>Jackpots</td>
                            <td style={{backgroundColor:"#E2DEDE"}}>Sí</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Juegos;