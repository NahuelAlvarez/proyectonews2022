import React from "react";
const Blanc = "_blank";

const News = ({articulos = []}) => {
    return (       
        articulos.map((item, index) => (
            <div className="card mb-3" style={{maxWidth: "600px"}}>
                <div className="row g-0">
                    <div key={index} className="col-md-4">
                        <img src={item.urlToImage} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
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

export default News;