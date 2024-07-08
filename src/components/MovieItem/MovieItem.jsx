import { Link } from "react-router-dom";
import css from "./MovieItem.module.css";

export default function MovieItem({ id, title, location, poster }) {
  const imageLink = `https://image.tmdb.org/t/p/original/${poster}`;
  return (
    <Link className={css.link} to={`/movies/${id}`} state={location}>
      <img className={css.image} src={imageLink} alt={title} />
      <h3 className={css.titleFilm}>{title}</h3>
    </Link>
  );
}
