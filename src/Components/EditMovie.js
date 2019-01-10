import React from 'react'

const EditMovie = (props) => {
    return (
        <div className={props.editMovie}>
            {props.selectedMovie.map(movie => {
                return(
                <div className="modal-main">
                    <p>{movie.Title}</p>
                    <button onClick={props.editMovie}>close</button>
                </div>
            )})}
        </div>
    );
}

export default EditMovie