import React from "react";

// Mui
import { Box, Grid, Typography } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import SwiperCard from "../cards/Swiper.cards";

const blogs = [
  {
    id: 1,
    title: "Embracing The White Space In Our Lives",
    date: "December 10, 2023",
    image:
      "https://demo.birdwp.com/halva/wp-content/uploads/2023/12/bench-accounting-h4-unsplash.jpg",
    category: "Tech",
  },
  {
    id: 1,
    title: "Embracing The White Space In Our Lives",
    date: "December 10, 2023",
    image:
      "https://demo.birdwp.com/halva/wp-content/uploads/2023/12/bench-accounting-h4-unsplash.jpg",
    category: "Tech",
  },
  {
    id: 1,
    title: "Embracing The White Space In Our Lives",
    date: "December 10, 2023",
    image:
      "https://demo.birdwp.com/halva/wp-content/uploads/2023/12/bench-accounting-h4-unsplash.jpg",
    category: "Tech",
  },
  {
    id: 1,
    title: "Embracing The White Space In Our Lives",
    date: "December 10, 2023",
    image:
      "https://demo.birdwp.com/halva/wp-content/uploads/2023/12/bench-accounting-h4-unsplash.jpg",
    category: "Tech",
  },
];

const MainBanner = () => {
  return (
    <Grid sx={{ zIndex: 0, position: "relative" }}>
      <Box>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          style={{ borderRadius: 20 }}
        >
          {blogs.map((blog) => (
            <SwiperSlide>
              <SwiperCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Grid>
  );
};

export default MainBanner;
