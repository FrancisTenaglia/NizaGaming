import React from "react";

const Informacion = () => {
    return (
            <div className="row row-cols-auto d-flex justify-content-center py-3">

                <div className="card m-4"style={{fontSize:"17px"}}>
                        <div className="card-body">
                            <h5 className="card-title">CASINO EN VIVO</h5>
                            <p className="card-text"> Potencia tu casino en línea con nuestra plataforma todo en uno para tragamonedas. ¡Gestión sencilla y más ganancias garantizadas!</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                        </ul>
                </div>

                <div className="card " style={{fontSize:"17px"}}>
                        <div className="card-body">
                            <h5 className="card-title">SLOTS</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                </div>

                <div className="card m-4"  style={{fontSize:"17px"}}>
                        <div className="card-body">
                            <h5 className="card-title">DEPORTES</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                </div>
            </div>
    );
};

export default Informacion;