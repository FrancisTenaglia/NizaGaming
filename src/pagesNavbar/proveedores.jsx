// import React, { useState } from "react";
import img from "./images/greentube.png";
import evolu from "./images/Evolution.png";
import prag from "./images/pragmatic.png";
import ezu from "./images/Ezugui.png";


const Proveedores = () => {
    // const [cardStates, setCardStates] = useState([
    //     { displayContent: false },
    //     { displayContent: false },
    //     { displayContent: false },
    //     { displayContent: false }

    //     // Agrega más objetos si tienes más tarjetas
    //   ]);
    
    //   const handleDisplay = (index) => {
    //     const newCardStates = [...cardStates];
    //     newCardStates[index].displayContent = !newCardStates[index].displayContent;
    //     setCardStates(newCardStates);
    //   };
    return(
        <div className="row pt-2 d-flex justify-content-center">
            
                <div className="card-deck mb-2" style={{width:"15rem"}}>
                    <img src={img} className="card-img-top" alt="#" />
                    <div className="card-body text-center">
                            <p className="card-text" style={{fontSize:"13px"}}>Como división interactiva de NOVOMATIC, Greentube realmente es la Casa de los Juegos. Durante más de 12 años, Greentube ha ofrecido entretenimiento de casino seguro a jugadores de todo el mundo..
                             </p>
                             {/* <span style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}onClick={() => handleDisplay(0)}>
                                Ver más
                            </span> */}
                    </div>
                    {/* <table className="table" style={{display: cardStates[0].displayContent ? "" : "none"}}>
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
                    </table> */}
                </div>

                <div className="card-deck mb-2" style={{width:"15rem"}}>
                    <img src={evolu} className="card-img-top" alt="#" />
                    <div className="card-body text-center">
                            <p className="card-text" style={{fontSize:"13px"}}>Como división interactiva de NOVOMATIC, Greentube realmente es la Casa de los Juegos. Durante más de 12 años, Greentube ha ofrecido entretenimiento de casino seguro a jugadores de todo el mundo..
                             </p>
                             {/* <span style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}onClick={() => handleDisplay(0)}>
                                Ver más
                            </span> */}
                    </div>
                    {/* <table className="table" style={{display: cardStates[1].displayContent ? "" : "none"}}>
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
                    </table> */}
                </div>

                <div className="card-deck mb-2" style={{width:"15rem"}}>
                    <img src={prag} className="card-img-top" alt="#" />
                    <div className="card-body text-center">
                            <p className="card-text" style={{fontSize:"13px"}}>Como división interactiva de NOVOMATIC, Greentube realmente es la Casa de los Juegos. Durante más de 12 años, Greentube ha ofrecido entretenimiento de casino seguro a jugadores de todo el mundo..
                             </p>
                             {/* <span style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}onClick={() => handleDisplay(0)}>
                                Ver más
                            </span> */}
                    </div>
                    {/* <table className="table" style={{display: cardStates[2].displayContent ? "" : "none"}}>
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
                    </table> */}
                </div> 

                <div className="card-deck mb-2" style={{width:"15rem"}}>
                    <img src={ezu} className="card-img-top" alt="#" />
                    <div className="card-body text-center">
                            <p className="card-text" style={{fontSize:"13px"}}>Como división interactiva de NOVOMATIC, Greentube realmente es la Casa de los Juegos. Durante más de 12 años, Greentube ha ofrecido entretenimiento de casino seguro a jugadores de todo el mundo..
                             </p>
                             {/* <span style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}onClick={() => handleDisplay(0)}>
                                Ver más
                            </span> */}
                    </div>
                    {/* <table className="table" style={{display: cardStates[3].displayContent ? "" : "none"}}>
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
                    </table> */}
                </div> 
</div>
    );
};

export default Proveedores;