import React from "react";

// Mui
import { Container, Grid, Typography } from "@mui/material";

const routes = ["خانه", "بلاگ ها", "درباره ما", "تماس با ما"];

const TopHeader = () => {
  return (
    <Container maxWidth="md">
      <Grid sx={{ textAlign: "center", p: 2 }}>
        <Typography variant="h4">بلاگ من</Typography>
      </Grid>
      <Grid>
        <Grid
          container
          sx={{
            p: 1,
            boxShadow: 2,
            borderRadius: 1,
            zIndex: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid container item md={10}>
            {routes.map((route) => (
              <Typography sx={{ p: 1, mx: 2, color: "primary.main" }}>
                {route.toLocaleUpperCase()}
              </Typography>
            ))}
          </Grid>

          <Grid container item md={2} sx={{ justifyContent: "flex-end" }}>
            <Typography sx={{ p: 1, mx: 2, color: "primary.main" }}>
              @دنبال کردن
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TopHeader;
