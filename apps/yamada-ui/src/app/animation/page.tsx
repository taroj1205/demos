'use client'
import { BoxingIcon } from "@/src/icons/boxing-svgrepo-com";
import { AntennaIcon } from "@yamada-ui/lucide";
import { Box, Container, Motion, ScrollArea, Text, useScroll, useTransform } from "@yamada-ui/react";
import { useRef } from "react";

export default function Animation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5])
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -200])
  
  return (
    <Box ref={containerRef} position="relative" h="100svh" overflowY="auto">
      <Box h="9xl">
        <Motion
          style={{ scale, translateY }}
          transformOrigin="center"
          w="full"
          h="full"
          overflow="hidden"
          bg={["blackAlpha.200", "whiteAlpha.200"]}
          rounded="3xl"
          perspective="1000px"
        >
          <BoxingIcon fontSize="500px" />
        </Motion>
      </Box>
    </Box>
  )
}