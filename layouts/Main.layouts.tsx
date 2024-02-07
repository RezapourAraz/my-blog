import React, { FC } from "react";

// Mui
import { Box, Container } from "@mui/material";
import TopHeader from "@/components/headers/Top.headers";
import FooterSection from "@/components/sections/Footer.sections";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <TopHeader />
      <Box>{children}</Box>
      <FooterSection />
    </Container>
  );
};

export default MainLayout;
