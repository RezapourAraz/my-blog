import React, { FC } from "react";

// Mui
import { Grid, Typography } from "@mui/material";

// Icons
import { IoMdTime } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";

type SwiperCardProps = {
  blog: {
    id: number;
    title: string;
    date: string;
    image: string;
    category: string;
  };
};

const SwiperCard: FC<SwiperCardProps> = ({ blog }) => {
  return (
    <Grid
      sx={{
        position: "relative",
        backgroundImage: `url(${blog.image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        cursor: "pointer",
        height: 300,
      }}
    >
      <Grid
        sx={{
          position: "absolute",
          textAlign: "center",
          bottom: 10,
          left: 10,
          right: 10,
        }}
      >
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            sx={{
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <IoMdTime style={{ color: "white" }} />
            <Typography sx={{ color: "common.white", fontSize: 14 }}>
              {blog.date}
            </Typography>
          </Grid>
          ,
          <Grid
            sx={{
              display: "inline-flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <IoBookmarkOutline style={{ color: "white" }} />
            <Typography sx={{ color: "common.white", fontSize: 14 }}>
              {blog.category}
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h5" component="h3" sx={{ color: "common.white" }}>
          {blog.title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SwiperCard;
