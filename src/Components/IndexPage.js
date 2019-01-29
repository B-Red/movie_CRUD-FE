import React from 'react'


const IndexPage = (props) => {
    return (
        <div className='list-group'>
            {props.movies.map(movie => {
                return (
                        <div className='d-flex p-2 rounded-pill border border-secondary' onClick={props.selectMovie} id={movie.id}>
                            <img className='moviePoster' src={movie.Poster_URL} alt=""/>
                            <div className='d-flex w-100 justify-content-between'>
                                <h5 className='text-wrap p-1 mb-2'>{movie.Title}</h5>
                                <h5 className='text-wrap p-1 mb-2'>({movie.Year})</h5>
                            </div>
                            <button className="p-2" onClick={props.selectMovie} id= {movie.id}>See More</button>
                        </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default IndexPage