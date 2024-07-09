import { useEffect, useRef, useState } from "react";
import { getFilmById } from "../../films-api";
import AboutMovie from "../../components/AboutMovie/AboutMovie";
import { useLocation, useParams, Outlet, NavLink } from "react-router-dom";
import BackLink from "../../components/BackLink/BackLink";
import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";

export default function MovieDetailsPage() {
  const { movieId } = useParams();  
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/movies");
  console.log(backLinkHref);

  const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  const [filmById, setFilmById] = useState({});

  useEffect(() => {
    const getFilm = async () => {
      try {
        const film = await getFilmById(movieId);
        setFilmById(film);
      } catch (error) {
        console.log(error);
      }
    };
    getFilm();
  }, [movieId]);

  return (
    <div className={css.container}>
      <BackLink link={backLinkHref.current}>Go Back!</BackLink>
      <AboutMovie movie={filmById} />
      <ul className={css.links}>
        <li>
          <NavLink className={linkClass} to="cast">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClass} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
