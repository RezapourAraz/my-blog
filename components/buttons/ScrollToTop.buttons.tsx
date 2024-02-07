import React from "react";

// Mui
import { Grid, IconButton } from "@mui/material";

// Icons
import { IoMdArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  return (
    <Grid
      sx={{
        position: "fixed",
        left: 50,
        bottom: 50,
        boxShadow: 1,
        borderRadius: 2,
        ":hover": {
          bgcolor: "primary.main",
        },
      }}
    >
      <IconButton
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <IoMdArrowUp style={{ color: "black" }} />
      </IconButton>
    </Grid>
  );
};

export default ScrollToTopButton;
