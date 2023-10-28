import { Link } from "react-router-dom";

const Footer =() =>{
    return(
        <div className="container">
            <footer className="">
                
                <div className="d-flex flex-column flex-sm-row justify-content-between pt-3" style={{textAlign:"justify"}}>
                    <p className="text-secondary" style={{fontFamily:"Arimo"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quasi soluta laudantium mollitia architecto. Labore soluta ipsam inventore! Culpa sequi earum eveniet iste nemo molestiae, nesciunt est natus amet ipsum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, corrupti velit. Nesciunt, maiores, mollitia molestiae praesentium at hic minima quaerat deleniti nobis libero dolores deserunt possimus iste laudantium obcaecati commodi? +</p>
                </div>

                <div className="col  border-top pt-4">
                    
                    <div className="container d-flex px-0 pt-2 " style={{justifyContent:"space-between", width:"100%"}}>
                                 <span style={{fontFamily:"Arimo"}}>Home</span> 
                                 <Link to={'/'} style={{textDecoration:"none", color:"black"}} className="px-1"> + </Link> 
                    </div>
                    <div className="container d-flex px-0 pt-2 border-top" style={{justifyContent:"space-between", width:"100%"}}>
                                 <span style={{fontFamily:"Arimo"}}>Soluciónes</span> 
                                 <Link to={'/'} style={{textDecoration:"none", color:"black"}} className="px-1"> + </Link> 
                    </div>
                    <div className="container d-flex px-0 pt-2 border-top" style={{justifyContent:"space-between", width:"100%"}}>
                                 <span style={{fontFamily:"Arimo"}}>Productos y Servicios</span> 
                                 <Link to={'/'} style={{textDecoration:"none", color:"black"}} className="px-1"> + </Link> 
                    </div>
                    <div className="container d-flex px-0 pt-2 border-top" style={{justifyContent:"space-between", width:"100%"}}>
                                 <span style={{fontFamily:"Arimo"}}>Back Office</span> 
                                 <Link to={'/'} style={{textDecoration:"none", color:"black"}} className="px-1"> + </Link> 
                    </div>
                    <div className="container d-flex px-0 pt-2 border-top" style={{justifyContent:"space-between", width:"100%"}}>
                                 <span style={{fontFamily:"Arimo"}}>Noticias y Eventos</span> 
                                 <Link to={'/'} style={{textDecoration:"none", color:"black"}} className="px-1"> + </Link> 
                    </div>
                    <div className="container d-flex px-0 pt-2 border-top" style={{justifyContent:"space-between", width:"100%"}}>
                                 <span style={{fontFamily:"Arimo"}}>Contacto</span> 
                                 <Link to={'/'} style={{textDecoration:"none", color:"black"}} className="px-1"> + </Link> 
                    </div>
                    <div className="container d-flex px-0 pt-2 border-top" style={{justifyContent:"space-between", width:"100%"}}>
                                 <span style={{fontFamily:"Arimo"}}>Soporte</span> 
                                 <Link to={'/'} style={{textDecoration:"none", color:"black"}} className="px-1"> + </Link> 
                    </div>
                    <div className="container d-flex px-0 pt-2 border-top" style={{justifyContent:"space-between", width:"100%"}}>
                                 <span style={{fontFamily:"Arimo"}}>Asesoramiento de Negocios</span> 
                                 <Link to={'/'} style={{textDecoration:"none", color:"black"}} className="px-1"> + </Link> 
                    </div>
                    <div className="container d-flex px-0 pt-2 border-top" style={{justifyContent:"space-between", width:"100%"}}>
                                 <span style={{fontFamily:"Arimo"}}>Asesoramiento Legal</span> 
                                 <Link to={'/'} style={{textDecoration:"none", color:"black"}} className="px-1"> + </Link> 
                    </div>
                    <div className="container d-flex px-0 pt-2 border-top" style={{justifyContent:"space-between", width:"100%"}}>
                                 <span style={{fontFamily:"Arimo"}}>Acerca de</span> 
                                 <Link to={'/'} style={{textDecoration:"none", color:"black"}} className="px-1"> + </Link> 
                    </div>
                    <div className="container d-flex px-0 pt-4 border-top text-secondary" style={{justifyContent:"space-between", width:"100%"}}>
                        <p style={{fontFamily:"Arimo"}} >Lorem ipsum, <a href="/">Republic of Perú</a> sit amet <a rel="noreferrer" target="_blank" href="https://compuempresa.com/info/techvantage-international-sac-20611324627">Techavantage</a>  consectetur adipisicing elit. derechos reservados</p> 
                    </div>
                </div>
                
                <div className="d-flex flex-column flex-sm-row justify-content-between">
                    <p>Republic of Perú </p>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between">
                    <p className="text-secondary" style={{fontFamily:"Arimo"}} >© 2023 Techvantage, Inc. All rights reserved.</p>
                </div>
                <div className="d-flex flex-column flex-sm-row justify-content-between py-1">
                    <p >Privacy Policy | Terms of Use | Sales | Legal | Site Map</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;   