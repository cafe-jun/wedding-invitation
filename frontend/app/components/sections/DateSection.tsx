// src/components/sections/DateSection.tsx
"use client";

import { Box, Container, VStack, Heading, Text, Icon } from "@chakra-ui/react";
import { FaCalendar } from "react-icons/fa";
import { WeddingInfo } from "@/app/types/wedding";
import CalendarWidget from "@/app/components/ui/CalendarWidget";

interface DateSectionProps {
  weddingInfo: WeddingInfo;
}

export default function DateSection({ weddingInfo }: DateSectionProps) {
  return (
    <Box bg="whiteAlpha.500" backdropFilter="blur(10px)" py={16}>
      <Container maxW="container.md">
        <VStack spacing={8}>
          <Icon as={FaCalendar} w={10} h={10} color="pink.400" />

          <Heading
            as="h3"
            size="lg"
            fontFamily="var(--font-noto-serif)"
            color="gray.800"
          >
            Wedding Day
          </Heading>

          <VStack spacing={2}>
            <Text fontSize="lg" color="gray.700">
              {weddingInfo.date}
            </Text>
            <Text fontSize="lg" color="gray.700">
              {weddingInfo.time}
            </Text>
          </VStack>

          {/* D-Day Counter (선택사항) */}
          <Box bg="white" px={8} py={4} borderRadius="full" shadow="md">
            <Text fontSize="sm" color="gray.500" fontWeight="semibold">
              D-DAY
            </Text>
          </Box>

          {/* Calendar Widget */}
          <CalendarWidget year={2024} month={10} highlightDate={26} />

          {/* Save to Calendar Button */}
          <VStack spacing={2} w="full" mt={4}>
            <Text fontSize="sm" color="gray.500">
              캘린더에 일정을 저장하세요
            </Text>
            <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
              <Box
                as="button"
                px={4}
                py={2}
                bg="white"
                borderRadius="md"
                shadow="sm"
                fontSize="sm"
                color="gray.700"
                _hover={{ shadow: "md", bg: "gray.50" }}
                transition="all 0.2s"
              >
                📱 Apple Calendar
              </Box>
              <Box
                as="button"
                px={4}
                py={2}
                bg="white"
                borderRadius="md"
                shadow="sm"
                fontSize="sm"
                color="gray.700"
                _hover={{ shadow: "md", bg: "gray.50" }}
                transition="all 0.2s"
              >
                📅 Google Calendar
              </Box>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
