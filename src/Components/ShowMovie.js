import React from 'react'

const ShowMovie = (props) => {
    return (
        <div className='card'>
        {props.selectedMovie.map(selectedMovie => { 
            return ( 
            <div>
                <img src={selectedMovie.Poster_URL} className='card-img-top showPoster' alt={selectedMovie.Title}/>
                <div className='card-body'>
                    <h5 className='card-title'>{selectedMovie.Title}, Year:{selectedMovie.Year}</h5>
                    <p className='card-text'>Director: {selectedMovie.Director}</p>
                    <p className='card-text'>My Rating: {selectedMovie.My_Rating}/5</p>
                    <button className='btn btn-primary' onClick={props.showEdit}>Edit Movie</button>
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