import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

// axios.defaults.baseURL =
//   "https://api.themoviedb.org/3/movie/519182";

const keyAuthorization =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmM0Mzg3NDA1YTExZDUyYTg2OWJlZDRkY2E5OWU4MiIsIm5iZiI6MTcyMDQzNDA5Ny4xMjA0MjEsInN1YiI6IjY2OGJiY2IxNTU1NDA3ZjJmNmJhNTk0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lWr88PIp6iLJ9vzatvekMlAnv6eq5Rg-XBJJdyPzvek";

export const getFamousFilm = async () => {
  try {
    const films = await axios("/trending/movie/day", {
      headers: {
        Authorization: `Bearer ${keyAuthorization}`,
      },
      params: {
        language: "en-US",
      },
    });
    return films.data.results;
  } catch (e) {
    console.error("Error fetching images:", e);
    throw e;
  }
};

export const getFilmById = async (id) => {
  try {
    const film = await axios(`/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${keyAuthorization}`,
      },
    });
    return film.data;
  } catch (e) {
    console.error("Error fetching images:", e);
    throw e;
  }
};

export const getFilmMoreInfo = async (id, query) => {
  try {
    const additional = query === "cast" ? "credits" : "reviews";

    const film = await axios(`/movie/${id}/${additional}`, {
      headers: {
        Authorization: `Bearer ${keyAuthorization}`,
      },
    });
    return film.data;
  } catch (e) {
    console.error("Error fetching images:", e);
    throw e;
  }
};

export const getFilmByQuery = async (query) => {
  try {
    const film = await axios(`/search/movie`, {
      headers: {
        Authorization: `Bearer ${keyAuthorization}`,
      },
      params: {
        query,
      },
    });
    return film.data.results;
  } catch (e) {
    console.error("Error fetching images:", e);
    throw e;
  }
};
