import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import LoadingPage from "./LoadingPage/LoadingPage";

const Home = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const Navigation = lazy(() => import("./Navigation/Navigation"));
const Cast = lazy(() => import("./MovieCast/MovieCast"));
const Reviews = lazy(() => import("./MovieReviews/MovieReviews"));
const Recommendation = lazy(() =>
  import("./MovieRecommendation/MovieRecommendation")
);

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="recommendation" element={<Recommendation />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
