import React, { FC } from "react";

// Mui
import { Box, Container } from "@mui/material";
import TopHeader from "@/components/headers/Top.headers";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <TopHeader />
      <Box>{children}</Box>
    </Container>
  );
};

export default MainLayout;
