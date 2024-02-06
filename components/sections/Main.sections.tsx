import React from "react";

// Mui
import { Container, Grid, Pagination, Typography } from "@mui/material";
import BlogCard from "../cards/Blog.cards";

const MainSection = () => {
  return (
    <Grid sx={{ my: 3 }}>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid
          sx={{
            display: "inline-flex",
            py: 1,
            px: 3,
            bgcolor: "common.white",
            boxShadow: 1,
            borderRadius: 2,
          }}
        >
          <Typography>صفحه 1 از 2</Typography>
        </Grid>
      </Grid>
      <Container maxWidth="md">
        <Grid container>
          <Grid item md={12} mb={20}>
            <BlogCard />
          </Grid>
          <Grid item md={12} mb={20}>
            <BlogCard />
          </Grid>
          <Grid item md={12} mb={20}>
            <BlogCard />
          </Grid>
        </Grid>
      </Container>
      <Grid container sx={{ justifyContent: "center" }}>
        <Pagination count={2} color="primary" />
      </Grid>
    </Grid>
  );
};

export default MainSection;
