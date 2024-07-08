import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { getFilmByQuery } from "../../films-api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";

import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [searchParams, getSearchParams] = useSearchParams();

  const initialQuery = searchParams.get("query") || "";

  const [query, setQuery] = useState(initialQuery);
  const [filmByQuery, setFilmByQuery] = useState([]);

  const submitForm = (query) => {
    getSearchParams({ query });
    setQuery(query);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    const getFilms = async () => {
      try {
        const films = await getFilmByQuery(query);
        setFilmByQuery(films);
      } catch (error) {
        console.log(error);
      }
    };
    getFilms();
  }, [query]);

  return (
    <div>
      <SearchBar onSubmit={submitForm} />
      <MovieList movies={filmByQuery} />
    </div>
  );
}
