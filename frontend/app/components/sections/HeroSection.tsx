// src/components/sections/HeroSection.tsx
"use client";

import { Box, VStack, Heading, Text, Icon } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { WeddingInfo } from "@/app/types/wedding";

interface HeroSectionProps {
  weddingInfo: WeddingInfo;
}

export default function HeroSection({ weddingInfo }: HeroSectionProps) {
  return (
    <Box
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-br, pink.100, orange.100)"
      position="relative"
    >
      <VStack spacing={8}>
        <Icon
          as={FaHeart}
          w={12}
          h={12}
          color="pink.400"
          animation="pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
        />
        <Heading
          as="h1"
          size="4xl"
          fontFamily="var(--font-noto-serif)"
          color="gray.800"
        >
          시작
        </Heading>
        <VStack spacing={2} color="gray.600">
          <Text fontSize="lg">{weddingInfo.date}</Text>
          <Text fontSize="lg">{weddingInfo.time}</Text>
        </VStack>
        <Text fontSize="2xl" color="gray.700" fontWeight="light" mt={8}>
          {weddingInfo.groom.name} · {weddingInfo.bride.name}
        </Text>
      </VStack>
    </Box>
  );
}
