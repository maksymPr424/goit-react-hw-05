import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import css from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <Link className={css.link} to='/'>
        <HiArrowLeft size="14" />
        Go to Home
      </Link>
      <p className={css.text}>Not Found!</p>
    </div>
  );
}
