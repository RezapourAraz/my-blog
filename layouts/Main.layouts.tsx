import React, { FC, ReactNode, useEffect, useState } from "react";

// Mui
import { Box, Container } from "@mui/material";
import TopHeader from "@/components/headers/Top.headers";
import FooterSection from "@/components/sections/Footer.sections";
import ActionButton from "@/components/buttons/Action.buttons";
import ScrollToTopButton from "@/components/buttons/ScrollToTop.buttons";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  // state
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      if (window.scrollY > 500) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    };

    window.addEventListener("scroll", handleVisibility);
  }, []);

  return (
    <Container maxWidth="lg">
      <TopHeader />
      <ActionButton />
      {visibility && <ScrollToTopButton />}
      <Box>{children}</Box>
      <FooterSection />
    </Container>
  );
};

export default MainLayout;
