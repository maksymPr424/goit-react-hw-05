import MovieItem from "../MovieItem/MovieItem";
import { useLocation } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";
import css from "./MovieList.module.css";
import clsx from "clsx";

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      keyboard={{ enabled: true }}
      mousewheel={true}
      modules={[Pagination, Mousewheel, Keyboard]}
      className={clsx(css.swiper, "mySwiper")}
    >
      {movies.map(({ id, title, poster_path }) => {
        return (
          <SwiperSlide className={css.item} key={id}>
            <MovieItem
              id={id}
              title={title}
              location={location}
              poster={poster_path}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
