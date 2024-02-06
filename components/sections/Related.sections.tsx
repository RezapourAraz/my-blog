import React from "react";

// Mui
import { Grid, Typography } from "@mui/material";
import RelatedCard from "../cards/Related.cards";

const RelatedSection = () => {
  return (
    <Grid sx={{ py: 2, borderTop: 2, borderColor: "grey.200" }}>
      <Grid container>
        <Grid item md={4}>
          <Grid>
            <Typography variant="h6">بلاگ های محبوب</Typography>
          </Grid>
          <Grid sx={{ my: 2 }}>
            <RelatedCard />
          </Grid>
          <Grid sx={{ my: 2 }}>
            <RelatedCard />
          </Grid>
          <Grid sx={{ my: 2 }}>
            <RelatedCard />
          </Grid>
          <Grid sx={{ my: 2 }}>
            <RelatedCard />
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Grid>
            <Typography variant="h6">بلاگ های تصادفی</Typography>
          </Grid>
          <Grid sx={{ my: 2 }}>
            <RelatedCard />
          </Grid>
          <Grid sx={{ my: 2 }}>
            <RelatedCard />
          </Grid>
          <Grid sx={{ my: 2 }}>
            <RelatedCard />
          </Grid>
          <Grid sx={{ my: 2 }}>
            <RelatedCard />
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Grid>
            <Typography variant="h6">ارتباط با ما </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RelatedSection;
