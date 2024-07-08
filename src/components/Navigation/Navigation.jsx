import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const linkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header className={css.header}>
      <div></div>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={linkClass}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
