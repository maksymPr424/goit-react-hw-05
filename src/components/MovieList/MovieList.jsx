import MovieItem from "../MovieItem/MovieItem";
import { useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <li className={css.item} key={id}>
            <MovieItem id={id} title={title} location={location} poster={poster_path}/>
          </li>
        );
      })}
    </ul>
  );
}
