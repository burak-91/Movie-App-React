import React from "react";
import Search from "./Search";


const Ui = ({ movies,submitMovies }) => {
  const image_url = "https://image.tmdb.org/t/p/w1280";
  return (
    <div>
        <Search  submitMovies={submitMovies} />
      <main className="main">
        {movies.map((movie) => (
          <div className="movie">
            <img src={image_url + movie.poster_path} alt="" />
            <div className="movie-info" id="movie-info">
              <h3>{movie.title}</h3>
              <span className="red">{movie.vote_average}</span>
            </div>
            <div className="overview" id="overview">
              <h3>Overview</h3>
              {movie.overview}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Ui;
