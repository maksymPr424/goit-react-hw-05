import css from "./ReviewsItem.module.css";

export default function ReviewsItem({ author, content }) {
  return (
    <>
      <h3 className={css.author}>Author: {author}</h3>
      <p>{content}</p>
    </>
  );
}
