// src/components/ui/CalendarWidget.tsx
"use client";

import { Box, Grid, Text, Card, CardBody } from "@chakra-ui/react";

interface CalendarWidgetProps {
  year: number;
  month: number;
  highlightDate: number;
}

export default function CalendarWidget({
  year,
  month,
  highlightDate,
}: CalendarWidgetProps) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // 2024년 10월 달력 생성 (10월 1일이 화요일)
  const calendarDates = [
    null,
    null,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];

  return (
    <Card shadow="lg" mt={8}>
      <CardBody>
        <Text
          textAlign="center"
          fontSize="xl"
          fontWeight="semibold"
          color="gray.800"
          mb={4}
        >
          {monthNames[month - 1]} {year}
        </Text>

        <Grid templateColumns="repeat(7, 1fr)" gap={2}>
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
            <Box
              key={day}
              textAlign="center"
              fontSize="sm"
              color="gray.500"
              h={10}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {day}
            </Box>
          ))}

          {calendarDates.map((date, idx) => (
            <Box
              key={idx}
              textAlign="center"
              h={10}
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              bg={date === highlightDate ? "pink.400" : "transparent"}
              color={date === highlightDate ? "white" : "gray.700"}
              fontWeight={date === highlightDate ? "bold" : "normal"}
              cursor={date ? "pointer" : "default"}
              _hover={
                date
                  ? { bg: date === highlightDate ? "pink.500" : "gray.100" }
                  : {}
              }
              transition="all 0.2s"
            >
              {date}
            </Box>
          ))}
        </Grid>
      </CardBody>
    </Card>
  );
}
