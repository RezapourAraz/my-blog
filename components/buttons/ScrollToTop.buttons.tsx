import React from "react";

// Mui
import { Grid, IconButton } from "@mui/material";

// Icons
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  return (
    <Grid
      sx={{
        position: "fixed",
        left: 50,
        bottom: 50,
        boxShadow: 1,
        borderRadius: 100,
      }}
    >
      <IconButton>
        <FaArrowUp style={{ color: "black", fontSize: 18 }} />
      </IconButton>
    </Grid>
  );
};

export default ScrollToTopButton;
