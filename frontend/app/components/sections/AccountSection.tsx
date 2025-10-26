// src/components/sections/AccountSection.tsx
"use client";

import {
  Container,
  VStack,
  Heading,
  Text,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { FaGift } from "react-icons/fa";
import { WeddingInfo } from "@/app/types/wedding";
import AccountCard from "@/app/components/ui/AccountCard";

interface AccountSectionProps {
  weddingInfo: WeddingInfo;
}

export default function AccountSection({ weddingInfo }: AccountSectionProps) {
  return (
    <Container maxW="container.md" py={16}>
      <VStack spacing={8}>
        <Icon as={FaGift} w={10} h={10} color="pink.400" />

        <Heading
          as="h3"
          size="lg"
          fontFamily="var(--font-noto-serif)"
          color="gray.800"
        >
          마음 전하실 곳
        </Heading>

        <Text fontSize="sm" color="gray.500" textAlign="center">
          참석이 어려우신 분들을 위해
          <br />
          계좌번호를 기재하였습니다
        </Text>

        <VStack spacing={4} w="full">
          {/* 아코디언 방식 */}
          <Accordion allowToggle w="full">
            {/* 신랑측 계좌 */}
            <AccordionItem border="none">
              <AccordionButton
                bg="white"
                borderRadius="lg"
                shadow="lg"
                _hover={{ bg: "pink.50" }}
                _expanded={{ bg: "pink.50", borderBottomRadius: 0 }}
                p={4}
              >
                <Box flex="1" textAlign="left">
                  <Text fontWeight="semibold" color="gray.800">
                    신랑측 계좌번호
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} pt={0} px={0}>
                <VStack spacing={3} pt={3}>
                  <AccountCard
                    title="신랑"
                    account={weddingInfo.accounts.groom}
                    colorScheme="pink"
                  />

                  {/* 부모님 계좌 추가 예시 */}
                  {/* <AccountCard
                    title={`혼주 ${weddingInfo.groom.father}`}
                    account={{
                      bank: '우리은행',
                      account: '1002-123-456789',
                      holder: weddingInfo.groom.father
                    }}
                    colorScheme="pink"
                  /> */}
                </VStack>
              </AccordionPanel>
            </AccordionItem>

            {/* 신부측 계좌 */}
            <AccordionItem border="none" mt={4}>
              <AccordionButton
                bg="white"
                borderRadius="lg"
                shadow="lg"
                _hover={{ bg: "orange.50" }}
                _expanded={{ bg: "orange.50", borderBottomRadius: 0 }}
                p={4}
              >
                <Box flex="1" textAlign="left">
                  <Text fontWeight="semibold" color="gray.800">
                    신부측 계좌번호
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} pt={0} px={0}>
                <VStack spacing={3} pt={3}>
                  <AccountCard
                    title="신부"
                    account={weddingInfo.accounts.bride}
                    colorScheme="orange"
                  />

                  {/* 부모님 계좌 추가 예시 */}
                  {/* <AccountCard
                    title={`혼주 ${weddingInfo.bride.father}`}
                    account={{
                      bank: '하나은행',
                      account: '123-456789-01234',
                      holder: weddingInfo.bride.father
                    }}
                    colorScheme="orange"
                  /> */}
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>

        {/* 안내 문구 */}
        <Box mt={4} p={4} bg="gray.50" borderRadius="md" w="full">
          <Text fontSize="xs" color="gray.600" textAlign="center">
            💝 축하의 마음만으로도 충분합니다 💝
          </Text>
        </Box>
      </VStack>
    </Container>
  );
}
