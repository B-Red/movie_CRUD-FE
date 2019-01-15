import React from 'react'

const AddMovie = (props) => {
    return (
        <div className={props.newMovie}>
            
                <div className='modal display-block'>
                <div className='modal-main container'>
                    <p className='display-4 font-weight-bolder'>New Movie</p>
                    <form onSubmit=''>
                        <div className='form-group'>
                            <label for='movieTitle'>Movie Title:</label>
                            <input className='form-control' type='text' placeholder='Title'/>
                        </div>
                        <div className='form-group'>
                            <label for='movieDirector'>Director:</label>
                            <input className='form-control' type='text' placeholder='Director'/>
                        </div>
                        <div className='form-group'>
                            <label for='movieYear'>Year Released:</label>
                            <input className='form-control' type='text' placeholder='Year'/>
                        </div>
                        <div className='form-group'>
                            <label for='movieRating'>Rating: </label>
                            <input className='form-control' type='number' min='0' max='5' placeholder='Rating 0-5'/>
                        </div>
                        <div className='form-group'>
                            <label for='movieRating'>Movie Poster URL</label>
                            <input className='form-control' type='text' placeholder='URL'/>
                        </div>
                        <button  className='btn btn-success'>Add Movie</button>
                        <button onClick={props.cancelAdd} className='btn btn-danger'>Cancel</button>
                    </form>
                </div>
                </div>
        </div>
    );
}

export default AddMovie