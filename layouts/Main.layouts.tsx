import React, { FC } from "react";

// Mui
import { Box, Container } from "@mui/material";
import TopHeader from "@/components/headers/Top.headers";
import FooterSection from "@/components/sections/Footer.sections";
import ActionButton from "@/components/buttons/Action.buttons";
import ScrollToTopButton from "@/components/buttons/ScrollToTop.buttons";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <TopHeader />
      <ActionButton />
      <ScrollToTopButton />
      <Box>{children}</Box>
      <FooterSection />
    </Container>
  );
};

export default MainLayout;
