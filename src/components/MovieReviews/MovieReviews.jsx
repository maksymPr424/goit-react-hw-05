import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmMoreInfo } from "../../films-api";
import ReviewsItem from "../MovieReviewsItem/MovieReviewsItem";

import css from "./MovieReviews.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function Reviews() {
  const { movieId } = useParams();

  const [filmInfo, setFilmInfo] = useState([]);

  useEffect(() => {
    const getFilm = async () => {
      try {
        const film = await getFilmMoreInfo(movieId, "reviews");
        setFilmInfo(film.results);
      } catch (error) {
        console.log(error);
      }
    };
    getFilm();
  }, [movieId]);
  return (
    <ul className={css.list}>
      {filmInfo.length !== 0 ? (
        filmInfo.map(({ id, author, content }) => (
          <li className={css.item} key={id}>
            <ReviewsItem author={author} content={content} />
          </li>
        ))
      ) : (
        <ErrorMessage />
      )}
    </ul>
  );
}
