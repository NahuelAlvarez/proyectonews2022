import React from "react";
const Blanc = "_blank";



const Buscador = ({articulos = []}) => {
    return (
        articulos.map((item, index) => (
            <div className="card mb-3" style={{ maxWidth: "990px"}}>
                <div className="row g-0">
                    <div key={index} className="col-md-4">
                        <img src={item.urlToImage} className="img-fluid " alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body  justify-content-center">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text">
                                <small className="text-muted">FECHA :{item.publishedAt}</small>
                                <span style={{float:"right"}}>  <a href={item.url} target={{Blanc}}> VER MAS...</a></span>
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}

export default Buscador;