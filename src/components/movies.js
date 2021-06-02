import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies()
  }

  handleDelete = (id) => {
    this.setState({
      movies: this.state.movies.filter(movie => movie._id !== id)
    })
  }

  renderMovieBody() {
    return (
      <tbody>
        {
          this.state.movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td><button onClick={() => this.handleDelete(movie._id)} className="btn btn-danger">Delete</button></td>
            </tr>
          ))
        }
      </tbody>
    );
  }

  renderMovieTable() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {this.renderMovieBody()}
      </table>
    );
  }

  renderMovieCount() {
    const {length: count} = this.state.movies;
    return count === 0 ? 'There are no movies.' : `Showing ${count} movies in the database.`;
  }

  render() {
    return (
      <div>
        <p>{this.renderMovieCount()}</p>
        {this.state.movies.length === 0 || this.renderMovieTable()}
      </div>
    );
  }
}

export default Movies;