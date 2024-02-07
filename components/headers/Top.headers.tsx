import React from "react";

// Mui
import { Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";

const routes = [
  {
    id: 1,
    name: "خانه",
    route: "/",
  },
  {
    id: 2,
    name: "بلاگ ها",
    route: "/blogs",
  },
  {
    id: 3,
    name: "درباره ما",
    route: "/about-us",
  },
  {
    id: 4,
    name: "تماس با ما",
    route: "/contact-us",
  },
];

const TopHeader = () => {
  // hooks
  const router = useRouter();

  return (
    <Container maxWidth="md">
      <Grid sx={{ textAlign: "center", p: 2, height: 150 }}>
        <Typography variant="h4">بلاگ من</Typography>
      </Grid>
      <Grid sx={{ position: "relative" }}>
        <Grid
          container
          sx={{
            p: 2,
            boxShadow: 1,
            borderRadius: 2,
            zIndex: 10,
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            bottom: -10,
            bgcolor: "common.white",
          }}
        >
          <Grid container item md={10}>
            {routes.map((route) => (
              <Typography
                variant="subtitle2"
                sx={{
                  p: 1,
                  mx: 2,
                  color:
                    route.route === router.route ? "primary.main" : "initial",
                  cursor: "pointer",
                }}
              >
                {route.name}
              </Typography>
            ))}
          </Grid>

          <Grid container item md={2} sx={{ justifyContent: "flex-end" }}>
            <Typography
              variant="subtitle2"
              sx={{ p: 1, mx: 2, color: "primary.main" }}
            >
              @دنبال کردن
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TopHeader;
