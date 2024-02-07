import React from "react";

// Components
import MainLayout from "@/layouts/Main.layouts";

// Mui
import { Avatar, Box, Grid, Typography } from "@mui/material";

// Icons
import { FaEye } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { GoHash } from "react-icons/go";
import CommentCard from "@/components/cards/Comment.cards";
import AuthorCard from "@/components/cards/Author.cards";
import LeaveReplayCard from "@/components/cards/LeaveReplay.cards";

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
            <Grid
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                my: 1,
                transition: "all 0.2s ease-in-out",
                ":hover": { cursor: "pointer", transform: "scale(1.001)" },
              }}
            >
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
            <Grid
              container
              sx={{ alignItems: "center", justifyContent: "center", gap: 2 }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <IoBookmarkOutline style={{ color: "gray" }} />
                <Typography variant="caption" color={"grey.500"}>
                  دسته بندی: عنوان دسته بندی
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <GoHash style={{ color: "gray" }} />
                <Typography variant="caption" color={"grey.500"}>
                  برچسب ها: #عنوان برچسب
                </Typography>
              </Box>
            </Grid>
            <Grid
              sx={{
                borderBottom: 2,
                borderTop: 2,
                borderColor: "grey.200",
                p: 2,
                my: 2,
              }}
            >
              <AuthorCard />
            </Grid>
            <Grid
              sx={{
                p: 2,
                my: 2,
                px: 10,
              }}
            >
              <Box sx={{ py: 2, textAlign: "center" }}>
                <Typography variant="h5">
                  3 دیدگاه در مورد "عنوان مطلب"
                </Typography>
              </Box>
              <CommentCard />
            </Grid>
            <Grid>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h5">
                  نظر خود را در مورد "عنوان مطلب" نوشته و ارسال کنید
                </Typography>
              </Box>
              <Grid sx={{ p: 2 }}>
                <LeaveReplayCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default BlogDetail;
