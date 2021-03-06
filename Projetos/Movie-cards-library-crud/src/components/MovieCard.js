import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline } } = this.props;

    return (
      <div data-testid="movie-card">
        Movie Card
        <p>{ title }</p>
        <p>{ storyline }</p>
        <Link to="/">VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
