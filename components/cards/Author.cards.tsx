import React from "react";

// Mui
import { Avatar, Grid, Typography } from "@mui/material";

const AuthorCard = () => {
  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        p: 4,
        borderRadius: 2,
      }}
    >
      <Grid item md={1}>
        <Avatar sx={{ width: 50, height: 50 }} />
      </Grid>
      <Grid container item md={10.5} gap={1}>
        <Typography variant="caption" component="h6" fontSize={12}>
          Araz Rezapour
        </Typography>
        <Typography variant="caption" component="h6" fontSize={12}>
          December 15, 2023
        </Typography>
      </Grid>
      <Grid item md={12} sx={{ mt: 2 }}>
        <Typography variant="body2">متن درباره نویسنده</Typography>
      </Grid>
    </Grid>
  );
};

export default AuthorCard;
