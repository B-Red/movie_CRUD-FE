import React from 'react'
import { Link } from 'react-router-dom'

const IndexPage = (props) => {
    return (
        <div class="list-group">
            {props.movies.map(movie => {
                return (
                    // <Link to="">
                        <div className="indMovie" onClick={props.selectMovie} id={movie.id}>
                            {/* {console.log(movie.id)} */}
                            <img className="moviePoster" src={movie.Poster_URL}/>
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{movie.Title}({movie.Year})</h5>
                                {/* <small></small> */}
                            </div>
                            <button onClick={props.selectMovie} id= {movie.id}>See More</button>
                        </div>
                    // </Link>
                )
            })}
        </div>
    )
}

export default IndexPage