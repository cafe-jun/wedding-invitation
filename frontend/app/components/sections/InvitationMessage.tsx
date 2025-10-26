// src/components/sections/InvitationMessage.tsx
"use client";

import { Container, VStack, Heading, Text, Box } from "@chakra-ui/react";
import { WeddingInfo } from "@/app/types/wedding";

interface InvitationMessageProps {
  weddingInfo: WeddingInfo;
}

export default function InvitationMessage({
  weddingInfo,
}: InvitationMessageProps) {
  return (
    <Container maxW="container.md" py={16}>
      <VStack spacing={8} textAlign="center">
        <Heading
          as="h2"
          size="xl"
          fontFamily="var(--font-noto-serif)"
          color="gray.800"
        >
          초대합니다
        </Heading>

        <Text color="gray.600" lineHeight="tall" fontSize="md">
          서로가 마주보며 다져온 사랑을
          <br />
          이제 함께 한 곳을 바라보며
          <br />
          걸어갈 수 있는 큰 사랑으로 키우고자 합니다.
        </Text>

        <Text color="gray.600" lineHeight="tall" fontSize="md">
          저희 두 사람이 사랑의 이름으로
          <br />
          지켜나갈 수 있도록
          <br />
          축복해 주시면 감사하겠습니다.
        </Text>

        {/* Parents Info */}
        <VStack spacing={6} w="full" mt={8}>
          <Box
            borderTop="1px"
            borderBottom="1px"
            borderColor="gray.200"
            py={6}
            w="full"
          >
            <Text color="gray.700">
              {weddingInfo.groom.father} · {weddingInfo.groom.mother}{" "}
              <Text as="span" color="gray.400">
                의 아들
              </Text>{" "}
              {weddingInfo.groom.name}
            </Text>
          </Box>

          <Box borderBottom="1px" borderColor="gray.200" pb={6} w="full">
            <Text color="gray.700">
              {weddingInfo.bride.father} · {weddingInfo.bride.mother}{" "}
              <Text as="span" color="gray.400">
                의 딸
              </Text>{" "}
              {weddingInfo.bride.name}
            </Text>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
}
