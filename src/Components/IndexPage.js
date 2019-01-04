import React from 'react'
import { Link } from 'react-router-dom'

const IndexPage = (props) => {
    console.log(props)
    return (
        <div className='container'>
            {props.movies.map(movie => {
                return (
                    <div className='container'>
                    <div className="card-columns">
                        <div className="card" key={`movie ${movie.id}`}>
                            <img className="card-img-top img-fluid" src={movie.Poster_URL} style={{width:100, height:160}} alt="Card cap"/>
                            <div className="card-body">
                                <h5 className="card-title">{movie.Title}</h5>
                                <h5 className="card-title">({movie.Year})</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default IndexPage