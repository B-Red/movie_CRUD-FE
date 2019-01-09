import React from 'react'

const ShowMovie = () => {
    return (
        <div className="card">
            <img src="https://via.placeholder.com/200x250" className="card-img-top showPoster"/>
            <div className="card-body">
                <h5 className="card-title">Movie Title, Year</h5>
                <p className="card-text">Director:</p>
                <p className="card-text">My Rating:</p>
                <a href="#" className="btn btn-primary">Edit Movie</a>
            </div>
        </div>
    )
}

export default ShowMovie