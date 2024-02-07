import React from "react";

// Mui
import { Box, Button, Container, Grid, Input } from "@mui/material";

const LeaveReplayCard = () => {
  return (
    <Container maxWidth="sm">
      <Grid>
        <Box textAlign="center">
          <label>دیدگاه*</label>
          <Input
            fullWidth
            multiline
            minRows={4}
            sx={{
              my: 2,
              border: 1,
              p: 0.5,
              borderRadius: 2,
              color: "grey.700",
              borderColor: "grey.300",
              bgcolor: "grey.200",
            }}
          />
        </Box>
        <Box textAlign="center">
          <label>نام*</label>
          <Input
            fullWidth
            sx={{
              my: 2,
              border: 1,
              p: 0.5,
              borderRadius: 2,
              color: "grey.700",
              borderColor: "grey.300",
              bgcolor: "grey.200",
            }}
          />
        </Box>
        <Box textAlign="center">
          <label>ایمیل*</label>
          <Input
            fullWidth
            sx={{
              my: 2,
              border: 1,
              p: 0.5,
              borderRadius: 2,
              color: "grey.700",
              borderColor: "grey.300",
              bgcolor: "grey.200",
            }}
          />
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{ color: "white", boxShadow: 0, bgcolor: "grey.800" }}
          >
            ارسال دیدگاه
          </Button>
        </Box>
      </Grid>
    </Container>
  );
};

export default LeaveReplayCard;
