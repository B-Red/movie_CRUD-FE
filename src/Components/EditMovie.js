import React from 'react'

const EditMovie = (props) => {
    return (
        <div className={props.editMovie}>
            {props.selectedMovie.map(movie => {
                return(
                <div className='modal-main container'>
                    <p className='display-4 font-weight-bolder'>{movie.Title}</p>
                    <form onSubmit={props.updateMovie}>
                        <div className='form-group'>
                            <label htmlFor='movieTitle'>Movie Title: </label>
                            <input className='form-control' onChange={props.changeHandler}type='text' name='Title'defaultValue={movie.Title} placeholder='Title'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='movieDirector'>Director: {movie.Director}</label>
                            <input className='form-control' type='text' onChange={props.changeHandler} name='Director' defaultValue={movie.Director} placeholder='Director'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='movieYear'>Year Released: {movie.Year}</label>
                            <input className='form-control' type='number' onChange={props.changeHandler}name='Year' defaultValue={movie.Year}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='movieRating'>Rating: {movie.My_Rating}</label>
                            <input className='form-control' type='number' min={0} max={5} onChange={props.changeHandler} name='My_Rating' defaultValue={movie.My_Rating}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='Poster_URL'>Movie Poster URL</label>
                            <input className='form-control' type='text' onChange={props.changeHandler}  name='Poster_URL' defaultValue={movie.Poster_URL}/>
                        </div>
                        <button type='submit' onClick={props.updateMovie} id={movie.id} className='btn btn-success'>Save Changes</button>
                        <button id={movie.id} type='button' onClick={props.deleteMovie} className='btn btn-danger'>Delete</button>
                    </form>
                </div>
            )})}
        </div>
    );
}

export default EditMovie