import { Box } from "@chakra-ui/react"
import HeroClient from "./HeroClient"

const Hero = () => {
  return (
    <>
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

        <HeroClient />
      </Box>
    </>
  )
}

export default Hero
