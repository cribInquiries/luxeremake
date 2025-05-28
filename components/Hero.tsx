"use client";

import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { Box, Stack, HStack, Icon, Text } from "@chakra-ui/react";

import { FlipWords } from "@/components/ui/flip-words";
import { ArrowRight } from "lucide-react";

import Aos from "aos";
import "aos/dist/aos.css";
import LuxeAiAssistance from "./luxeComponents/LuxeAiAssistance";

const HouseHeroParallax = dynamic(
  () => import("./customUI/Parallax/HouseHeroParallax"),
  { ssr: false },
);

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const words = [
    "Effortless ",
    "Stress-free",
    "Efficient",
    "Simple",
    "Effective",
    "Easy",
  ];
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
          <Box fontWeight={"400"}>
            Made <FlipWords words={words} />
          </Box>
        </Box>
      </Stack>

      <Box overflowX={"hidden"} mt={{base: "150px", sm: "150px", md: "250px", lg: "350px", xl: "350px"}}>
        <Box
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
          pb={"50px"}
          data-aos="fade-up"
        >
          <Text
            as={"h2"}
            data-aos="fade-up"
            w={["100%", "100%", "80%", "80%", "80%", "80%"]}
            mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
            textStyle={"heading"}
            fontWeight={700}
            fontFamily={"arial"}
            bgClip="text"
            textAlign={["center", "center", "left", "left", "left", "left"]}
            color={"black"}
            bgGradient="linear(to-r, teal, blue)"
          >
           Luxury AirBnBs, Simplified.
          </Text>
          <Text
            as={"h3"}
            data-aos="fade-up"
            textStyle={"basicText"}
            mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
            textAlign={["center", "center", "left", "left", "left", "left"]}
            fontFamily={"arial"}
            color={"black"}
            w={["100%", "100%", "80%", "80%", "80%", "80%"]} // !important
            fontWeight={300}
          >
            We're Luxe, Adelaide's only AirBnB property management company that
            services the gap between luxury and affordability.
          </Text>
        </Box>

        <HouseHeroParallax />
      </Box>

      {/* Add New Pack Button */}

      {/* New Dialog Component */}
    </>
  );
};

export default Hero;
