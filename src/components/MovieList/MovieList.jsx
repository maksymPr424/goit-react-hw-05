import MovieItem from "../MovieItem/MovieItem";
import { useLocation } from "react-router-dom";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Mousewheel,
  Keyboard,
  Scrollbar,
  Pagination,
  Navigation,
} from "swiper/modules";
import css from "./MovieList.module.css";
import clsx from "clsx";

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div className={css.container}>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        keyboard={{ enabled: true }}
        mousewheel={true}
        scrollbar={{
          hide: true,
        }}
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination, Navigation, Mousewheel, Keyboard, Scrollbar]}
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
    </div>
  );
}
