import React from 'react'

const ShowMovie = (props) => {
    // console.log(props)
    return (
        <div className="card">
        {props.selectedMovie.map(selectedMovie => { 
            return ( 
            <div>
                <img src={selectedMovie.Poster_URL} className="card-img-top showPoster"/>
                <div className="card-body">
                    <h5 className="card-title">{selectedMovie.Title}, Year:{selectedMovie.Year}</h5>
                    <p className="card-text">Director: {selectedMovie.Director}</p>
                    <p className="card-text">My Rating: {selectedMovie.My_Rating}/5</p>
                    <a href="#" className="btn btn-primary" onClick={props.showEdit}>Edit Movie</a>
                </div>
            </div>
                    )
                }
            )
        }
        </div>
    )
}

export default ShowMovie