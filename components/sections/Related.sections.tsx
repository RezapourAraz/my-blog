import React from "react";

// Mui
import { Grid, Input, Typography } from "@mui/material";
import RelatedCard from "../cards/Related.cards";

const RelatedSection = () => {
  return (
    <Grid sx={{ py: 2, borderTop: 2, borderColor: "grey.200" }}>
      <Grid container>
        <Grid item md={4}>
          <Grid>
            <Typography variant="h4">بلاگ های محبوب</Typography>
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
            <Typography variant="h4">بلاگ های تصادفی</Typography>
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
            <Typography variant="h4">بلاگ های مرتبط</Typography>
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
      </Grid>
    </Grid>
  );
};

export default RelatedSection;
