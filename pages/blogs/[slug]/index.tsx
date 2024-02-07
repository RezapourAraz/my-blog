import React from "react";

// Components
import MainLayout from "@/layouts/Main.layouts";

// Mui
import { Box, Grid, Typography } from "@mui/material";

// Icons
import { FaEye } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";

const BlogDetail = () => {
  return (
    <MainLayout>
      <Grid>
        <Grid sx={{ p: 2, mt: 5 }}>
          <Grid
            container
            sx={{ alignItems: "center", justifyContent: "center", gap: 2 }}
          >
            <Typography variant="caption" color={"grey.500"}>
              انتشار: December 15, 2023
            </Typography>
            <Typography variant="caption" color={"grey.500"}>
              نویسنده: Araz Rezapour
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <FaEye style={{ color: "gray" }} />
              <Typography variant="caption" color={"grey.500"}>
                10
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <FaRegComments style={{ color: "gray" }} />
              <Typography variant="caption" color={"grey.500"}>
                10
              </Typography>
            </Box>
          </Grid>
          <Grid>
            <Grid sx={{ textAlign: "center", p: 2, mt: 2 }}>
              <Typography variant="h3">عنوان مطلب</Typography>
            </Grid>
            <Grid sx={{ borderRadius: 2, overflow: "hidden", my: 1 }}>
              <img
                width="100%"
                height="100%"
                style={{ objectFit: "cover", borderRadius: 8 }}
                src="https://demo.birdwp.com/halva/wp-content/uploads/2023/12/sarah-dorweiler-h50-unsplash.jpg"
                alt="img"
              />
            </Grid>
            <Grid>
              <Typography dangerouslySetInnerHTML={{ __html: "متن مطلب" }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default BlogDetail;
