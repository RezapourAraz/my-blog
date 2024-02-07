import React from "react";

// Mui
import { Avatar, Grid, Typography } from "@mui/material";

const CommentCard = () => {
  return (
    <Grid container sx={{ alignItems: "center" }}>
      <Grid item md={1}>
        <Avatar sx={{ width: 50, height: 50 }} />
      </Grid>
      <Grid container item md={10.5} gap={1}>
        <Typography variant="caption">نویسنده : Araz Rezapour</Typography>
        <Typography variant="caption" sx={{ color: "primary.main" }}>
          نمایش همه پست های کاربر
        </Typography>
      </Grid>
      <Grid item md={12} sx={{ mt: 2 }}>
        <Typography variant="body2">متن دیدگاه</Typography>
      </Grid>
    </Grid>
  );
};

export default CommentCard;
