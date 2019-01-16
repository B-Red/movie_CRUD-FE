import React from 'react'

const AddMovie = (props) => {
    return (
        <div className={props.newMovie}>
            <div className='modal display-block'>
                <div className='modal-main container'>
                    <p className='display-4 font-weight-bolder'>New Movie</p>
                    <form onSubmit={props.addNewMovie}>
                        <div className='form-group'>
                            <label htmlFor='Title'>Movie Title:</label>
                            <input className='form-control' name='Title' type='text' placeholder='Title'/>
                        </div>
                        <div className='form-group'>
                            <label for='Director'>Director:</label>
                            <input className='form-control' name='Director' type='text' placeholder='Director'/>
                        </div>
                        <div className='form-group'>
                            <label for='Year'>Year Released:</label>
                            <input className='form-control' name='Year' type='text' placeholder='Year'/>
                        </div>
                        <div className='form-group'>
                            <label for='My_Rating'>Rating: </label>
                            <input className='form-control' name='My_Rating' type='number' min='0' max='5' placeholder='Rating 0-5'/>
                        </div>
                        <div className='form-group'>
                            <label for='Poster_URL'>Movie Poster URL</label>
                            <input className='form-control' name='Poster_URL' type='text' placeholder='URL'/>
                        </div>
                        <button type='submit' className='btn btn-success'>Add Movie</button>
                        <button onClick={props.cancelAdd} className='btn btn-danger'>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddMovie