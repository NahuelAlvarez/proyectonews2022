import React from "react";

const Pagination = ({prev, next, onPrevious, onNext}) => {

    const handledPrevios = () =>{
        onPrevious();
    }

    const handledNext = () => {
        onNext();
    }

    return(
        <nav>
            <ul className="pagination justify-content-center">
                {
                    prev ?
                    <li className="page-item">
                        <button className="page-link" onClick={handledPrevios}>Previous</button>
                    </li>   
                    :
                    null  
                }
                {
                    next ?
                    <li className="page-item">
                        <button className="page-link" onClick={handledNext}>Next</button>
                    </li>
                    :
                    null
                }
            </ul>
        </nav>
    );
}

export default Pagination;