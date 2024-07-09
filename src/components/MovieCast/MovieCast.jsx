import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmMoreInfo } from "../../films-api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import CastItem from "../MovieCastItem/MovieCastItem";

import css from "./MovieCast.module.css";

export default function Cast() {
  const { movieId } = useParams();

  const [filmInfo, setFilmInfo] = useState([]);

  useEffect(() => {
    const getFilm = async () => {
      try {
        const film = await getFilmMoreInfo(movieId, "credits");
        setFilmInfo(film.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getFilm();
  }, [movieId]);

  return (
    <ul className={css.list}>
      {filmInfo.length !== 0 ? (
        filmInfo.map(({ id, name, character, profile_path }) => {
          const imageLink = `https://image.tmdb.org/t/p/original/${profile_path}`;
          return (
            <li className={css.card} key={id}>
              <CastItem
                name={name}
                character={character}
                imageLink={imageLink}
              />
            </li>
          );
        })
      ) : (
        <ErrorMessage />
      )}
    </ul>
  );
}
