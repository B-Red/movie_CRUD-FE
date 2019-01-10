import React from 'react'

const EditMovie = (props) => {
    return (
        <div className={props.editMovie}>
            {props.selectedMovie.map(movie => {
                return(
                <div className="modal-main">
                    <p>{movie.Title}</p>
                    <form>
                        <div class="form-group">
                            <label for="movieTitle">Email address</label>
                            <input type="email" className="form-control" id="movieTitle" placeholder={movie.title} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button onClick={props.saveEdit} className="btn btn-success">Save Changes</button>
                        <button id={movie.id} onClick={props.deleteMovie} className="btn btn-danger">Delete</button>
                    </form>
                </div>
            )})}
        </div>
    );
}

export default EditMovie