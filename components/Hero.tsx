"use client";

import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { Box, Stack, HStack, Icon, Text } from "@chakra-ui/react";

// import { FlipWords } from "@/components/ui/flip-words";
import { ArrowRight } from "lucide-react";

import Aos from "aos";
import "aos/dist/aos.css";

const HouseHeroParallax = dynamic(
  () => import("./customUI/Parallax/HouseHeroParallax"),
  { ssr: false },
);

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false, mirror: true });
  }, []);

  // const words = [
  //   "Effortless ",
  //   "Stress-free",
  //   "Efficient",
  //   "Simple",
  //   "Effective",
  //   "Easy",
  // ];
  // redce font size for moible

  return (
    <>
      <Stack
        overflow={"hidden"}
        mt={{ base: "25px", sm: "25px", md: "25px", lg: "100px", xl: "100px" }}
        mb={{ base: "25px", sm: "25px", md: "50px", lg: "50px", xl: "50px" }}
        textAlign={"center"}
        width={"100%"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textStyle={"display"}
        fontWeight={{ base: "400", sm: "400", md: "400", lg: "400", xl: "400" }}
        fontFamily={"arial"}
      >
        <Box as={"h1"} color={"#222222"} fontWeight={"600"} width={"90%"}>
          Luxe Managements <br />
          <Box fontWeight={"400"}   textStyle={"heading"}>
            Professional Airbnb Property Management in Adelaide.
            {/* Made <FlipWords words={words} /> */}
          </Box>
        </Box>
      </Stack>

      <Box
        overflowX={"hidden"}
        mt={{
          base: "50px",
          sm: "50px",
          md: "180px",
          lg: "180px",
          xl: "180px",
        }}
      >
        <Box px={["4%", "4%", "6%", "6%", "6%", "10%"]} pb={"50px"}></Box>

        <HouseHeroParallax />
      </Box>

      {/* Add New Pack Button */}

      {/* New Dialog Component */}
    </>
  );
};

export default Hero;
