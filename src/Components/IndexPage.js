import React from 'react'


const IndexPage = (props) => {
    return (
        <div className='list-group'>
            {props.movies.map(movie => {
                return (
                        <div className='indMovie' onClick={props.selectMovie} id={movie.id}>
                            <img className='moviePoster' src={movie.Poster_URL} alt=""/>
                            <div className='d-flex w-100 justify-content-between'>
                                <h5 className='mb-1'>{movie.Title}({movie.Year})</h5>
                            </div>
                            <button onClick={props.selectMovie} id= {movie.id}>See More</button>
                        </div>
                )
            })}
        </div>
    )
}

export default IndexPage