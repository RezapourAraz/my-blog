import React from "react";

// Mui
import { Box, Grid, Typography } from "@mui/material";

const FooterSection = () => {
  return (
    <Grid
      sx={{ borderTop: 2, borderColor: "grey.200", p: 2, textAlign: "center" }}
    >
      <Typography variant="subtitle2" color="grey.500">
        ممنون از بازدیدتون
      </Typography>
      <Box>
        <Typography variant="subtitle2" color="grey.500">
          {new Date().getFullYear()} © به ما بپیوندید
        </Typography>
      </Box>
    </Grid>
  );
};

export default FooterSection;
