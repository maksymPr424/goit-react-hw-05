import css from "./MovieReviewsItem.module.css";

export default function ReviewsItem({ author, content }) {
  return (
    <>
      <h3 className={css.author}>Author: {author}</h3>
      <p>{content}</p>
    </>
  );
}
