import React from "react";

// Mui
import { Grid, Typography } from "@mui/material";

// Icons
import { IoBookmarkOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";

const BlogCard = () => {
  return (
    <Grid mt={5} sx={{ position: "relative" }}>
      <Grid
        sx={{
          height: 480,
          "img:hover": {
            transform: "scale(1.01)",
            transition: "all 0.3s ease-in",
          },
        }}
      >
        <img
          height="100%"
          width="100%"
          src="/blog-1.jpg"
          alt="Name"
          style={{
            overflow: "hidden",
            objectFit: "cover",
            borderRadius: 8,
          }}
        />
      </Grid>
      <Grid
        position="absolute"
        sx={{
          top: 460,
          bgcolor: "common.white",
          left: 0,
          right: 0,
          boxShadow: 1,
          borderRadius: 2,
          mx: 3,
        }}
      >
        <Grid sx={{ p: 2 }}>
          <Grid container sx={{ alignItems: "center" }}>
            <IoBookmarkOutline />
            <Typography
              variant="subtitle1"
              sx={{
                cursor: "pointer",
                transition: "all 0.3s ease-in",
                ":hover": {
                  color: "primary.main",
                },
              }}
            >
              دسته بندی
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="h5"
              sx={{
                cursor: "pointer",
                transition: "all 0.3s ease-in",
                ":hover": {
                  color: "primary.main",
                },
              }}
            >
              عنوان مطلب
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="body1">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </Typography>
          </Grid>
          <Grid container sx={{ alignItems: "center", gap: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{ color: "primary.main", cursor: "pointer" }}
            >
              ادامه مطلب
            </Typography>
            <Grid sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <FaEye style={{ color: "gray" }} />
              <Typography variant="subtitle2" sx={{ color: "grey.500" }}>
                12
              </Typography>
            </Grid>
            <Grid sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <FaRegComments style={{ color: "gray" }} />
              <Typography variant="subtitle2" sx={{ color: "grey.500" }}>
                12
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BlogCard;
