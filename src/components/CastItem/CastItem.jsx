import css from './CastItem.module.css'

export default function CastItem({ imageLink, name, character }) {
  return (
    <>
      <img className={css.image} src={imageLink} alt={name} />
      <p>Real name: {name}</p>
      <p>Character: {character}</p>
    </>
  );
}
