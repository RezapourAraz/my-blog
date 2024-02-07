import React from "react";

// Mui
import { Avatar, Container, Grid, Typography } from "@mui/material";

const CommentCard = () => {
  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        border: 1,
        borderColor: "grey.300",
        p: 4,
        borderRadius: 2,
      }}
    >
      <Grid item md={1}>
        <Avatar sx={{ width: 50, height: 50 }} />
      </Grid>
      <Grid item md={10.5} gap={1}>
        <Typography variant="caption" component="h6" fontSize={12}>
          Araz Rezapour
        </Typography>
        <Typography variant="caption" component="h6" fontSize={12}>
          December 15, 2023
        </Typography>
      </Grid>
      <Grid item md={12} sx={{ mt: 2 }}>
        <Typography variant="body2">متن دیدگاه</Typography>
      </Grid>
    </Grid>
  );
};

export default CommentCard;
