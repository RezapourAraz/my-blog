import React from "react";

// Mui
import { Box, Grid, Typography } from "@mui/material";

// Icons
import { FaEye } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";

const RelatedCard = () => {
  return (
    <Grid container gap={1}>
      <Grid
        sx={{
          height: 100,
          width: 100,
          ":hover": {
            transform: "translateY(-2px)",
            transition: "all 0.2s ease-in",
          },
        }}
      >
        <img
          width="100%"
          height="100%"
          style={{ borderRadius: 12, objectFit: "cover" }}
          src="https://demo.birdwp.com/halva/wp-content/uploads/2024/01/sincerely-media-h140-unsplash-200x200.jpg"
        />
      </Grid>
      <Grid>
        <Typography variant="h6">عنوان مطلب</Typography>
        <Grid container sx={{ alignItems: "center", gap: 2 }}>
          <Typography variant="subtitle1" sx={{ color: "grey.500" }}>
            آراز رضاپور
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "grey.500" }}>
            2020/01/01
          </Typography>
        </Grid>
        <Grid container sx={{ alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
            <FaEye style={{ color: "gray" }} />
            <Typography variant="subtitle2" sx={{ color: "grey.500" }}>
              12
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
            <FaRegComments style={{ color: "gray" }} />
            <Typography variant="subtitle2" sx={{ color: "grey.500" }}>
              12
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RelatedCard;
