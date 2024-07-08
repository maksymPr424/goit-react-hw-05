import { useEffect, useState } from "react";
import { getFamousFilm } from "../../films-api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import css from './HomePage.module.css'

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const famousFilms = async () => {
      try {
        const getFromAPI = await getFamousFilm();
        setMovies(getFromAPI);
      } catch (error) {
        console.log(error);
      }
    };

    famousFilms();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
}
