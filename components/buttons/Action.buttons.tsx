import React from "react";

// Mui
import { Box, Divider, Grid } from "@mui/material";

// Icons
import { FaMoon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const ActionButton = () => {
  return (
    <Grid sx={{ position: "fixed", left: 50, top: 50 }}>
      <Grid
        sx={{
          bgcolor: "common.white",
          overflow: "hidden",
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Box
          p={2}
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: 2,
            borderColor: "grey.300",
            ":hover": {
              bgcolor: "primary.main",
              color: "common.white",
              cursor: "pointer",
            },
          }}
        >
          <FaMoon />
        </Box>
        <Box
          p={2}
          sx={{
            display: "flex",
            alignItems: "center",
            // borderBottom: 2,
            // borderColor: "grey.300",
            ":hover": {
              bgcolor: "primary.main",
              color: "common.white",
              cursor: "pointer",
            },
          }}
        >
          <FaSearch />
        </Box>
        {/* <Box
          p={2}
          sx={{
            display: "flex",
            alignItems: "center",
            ":hover": {
              bgcolor: "primary.main",
              color: "common.white",
              cursor: "pointer",
            },
          }}
        >
          <FaMoon />
        </Box> */}
      </Grid>
    </Grid>
  );
};

export default ActionButton;
