// src/components/sections/ContactSection.tsx
"use client";

import {
  Container,
  VStack,
  Heading,
  Text,
  Icon,
  Card,
  CardBody,
  Button,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaPhone, FaComment } from "react-icons/fa";
import { WeddingInfo } from "@/app/types/wedding";

interface ContactSectionProps {
  weddingInfo: WeddingInfo;
}

export default function ContactSection({ weddingInfo }: ContactSectionProps) {
  const {
    isOpen: isGroomOpen,
    onOpen: onGroomOpen,
    onClose: onGroomClose,
  } = useDisclosure();

  const {
    isOpen: isBrideOpen,
    onOpen: onBrideOpen,
    onClose: onBrideClose,
  } = useDisclosure();

  const makeCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const sendSMS = (phone: string) => {
    window.location.href = `sms:${phone}`;
  };

  return (
    <Container maxW="container.md" py={16}>
      <VStack spacing={8}>
        <Icon as={FaPhone} w={10} h={10} color="pink.400" />

        <Heading
          as="h3"
          size="lg"
          fontFamily="var(--font-noto-serif)"
          color="gray.800"
        >
          연락하기
        </Heading>

        <Text fontSize="sm" color="gray.500" textAlign="center">
          참석이 어려우신 분들은
          <br />
          축하의 마음을 전화로 전해주세요
        </Text>

        <VStack spacing={4} w="full">
          {/* 신랑측 */}
          <Card shadow="lg" w="full">
            <CardBody>
              <Text fontWeight="semibold" color="gray.800" mb={3}>
                신랑측
              </Text>
              <VStack spacing={2}>
                <Button
                  w="full"
                  colorScheme="pink"
                  variant="ghost"
                  onClick={onGroomOpen}
                >
                  신랑 {weddingInfo.groom.name}에게 연락하기
                </Button>
                <Button
                  w="full"
                  colorScheme="pink"
                  variant="ghost"
                  onClick={onGroomOpen}
                >
                  혼주 {weddingInfo.groom.father}에게 연락하기
                </Button>
                <Button
                  w="full"
                  colorScheme="pink"
                  variant="ghost"
                  onClick={onGroomOpen}
                >
                  혼주 {weddingInfo.groom.mother}에게 연락하기
                </Button>
              </VStack>
            </CardBody>
          </Card>

          {/* 신부측 */}
          <Card shadow="lg" w="full">
            <CardBody>
              <Text fontWeight="semibold" color="gray.800" mb={3}>
                신부측
              </Text>
              <VStack spacing={2}>
                <Button
                  w="full"
                  colorScheme="orange"
                  variant="ghost"
                  onClick={onBrideOpen}
                >
                  신부 {weddingInfo.bride.name}에게 연락하기
                </Button>
                <Button
                  w="full"
                  colorScheme="orange"
                  variant="ghost"
                  onClick={onBrideOpen}
                >
                  혼주 {weddingInfo.bride.father}에게 연락하기
                </Button>
                <Button
                  w="full"
                  colorScheme="orange"
                  variant="ghost"
                  onClick={onBrideOpen}
                >
                  혼주 {weddingInfo.bride.mother}에게 연락하기
                </Button>
              </VStack>
            </CardBody>
          </Card>
        </VStack>
      </VStack>

      {/* 신랑측 연락처 모달 */}
      <Modal isOpen={isGroomOpen} onClose={onGroomClose} isCentered>
        <ModalOverlay />
        <ModalContent mx={4}>
          <ModalHeader>연락처</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={4}>
              <Card w="full" variant="outline">
                <CardBody>
                  <Text fontSize="sm" color="gray.500" mb={2}>
                    신랑
                  </Text>
                  <Text fontWeight="semibold" mb={3}>
                    {weddingInfo.groom.name}
                  </Text>
                  <HStack spacing={2}>
                    <Button
                      flex={1}
                      leftIcon={<FaPhone />}
                      colorScheme="pink"
                      size="sm"
                      onClick={() => makeCall("010-1234-5678")}
                    >
                      전화
                    </Button>
                    <Button
                      flex={1}
                      leftIcon={<FaComment />}
                      colorScheme="pink"
                      variant="outline"
                      size="sm"
                      onClick={() => sendSMS("010-1234-5678")}
                    >
                      문자
                    </Button>
                  </HStack>
                </CardBody>
              </Card>

              <Card w="full" variant="outline">
                <CardBody>
                  <Text fontSize="sm" color="gray.500" mb={2}>
                    혼주 (아버지)
                  </Text>
                  <Text fontWeight="semibold" mb={3}>
                    {weddingInfo.groom.father}
                  </Text>
                  <HStack spacing={2}>
                    <Button
                      flex={1}
                      leftIcon={<FaPhone />}
                      colorScheme="pink"
                      size="sm"
                      onClick={() => makeCall("010-1111-2222")}
                    >
                      전화
                    </Button>
                    <Button
                      flex={1}
                      leftIcon={<FaComment />}
                      colorScheme="pink"
                      variant="outline"
                      size="sm"
                      onClick={() => sendSMS("010-1111-2222")}
                    >
                      문자
                    </Button>
                  </HStack>
                </CardBody>
              </Card>

              <Card w="full" variant="outline">
                <CardBody>
                  <Text fontSize="sm" color="gray.500" mb={2}>
                    혼주 (어머니)
                  </Text>
                  <Text fontWeight="semibold" mb={3}>
                    {weddingInfo.groom.mother}
                  </Text>
                  <HStack spacing={2}>
                    <Button
                      flex={1}
                      leftIcon={<FaPhone />}
                      colorScheme="pink"
                      size="sm"
                      onClick={() => makeCall("010-3333-4444")}
                    >
                      전화
                    </Button>
                    <Button
                      flex={1}
                      leftIcon={<FaComment />}
                      colorScheme="pink"
                      variant="outline"
                      size="sm"
                      onClick={() => sendSMS("010-3333-4444")}
                    >
                      문자
                    </Button>
                  </HStack>
                </CardBody>
              </Card>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* 신부측 연락처 모달 */}
      <Modal isOpen={isBrideOpen} onClose={onBrideClose} isCentered>
        <ModalOverlay />
        <ModalContent mx={4}>
          <ModalHeader>연락처</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={4}>
              <Card w="full" variant="outline">
                <CardBody>
                  <Text fontSize="sm" color="gray.500" mb={2}>
                    신부
                  </Text>
                  <Text fontWeight="semibold" mb={3}>
                    {weddingInfo.bride.name}
                  </Text>
                  <HStack spacing={2}>
                    <Button
                      flex={1}
                      leftIcon={<FaPhone />}
                      colorScheme="orange"
                      size="sm"
                      onClick={() => makeCall("010-5555-6666")}
                    >
                      전화
                    </Button>
                    <Button
                      flex={1}
                      leftIcon={<FaComment />}
                      colorScheme="orange"
                      variant="outline"
                      size="sm"
                      onClick={() => sendSMS("010-5555-6666")}
                    >
                      문자
                    </Button>
                  </HStack>
                </CardBody>
              </Card>

              <Card w="full" variant="outline">
                <CardBody>
                  <Text fontSize="sm" color="gray.500" mb={2}>
                    혼주 (아버지)
                  </Text>
                  <Text fontWeight="semibold" mb={3}>
                    {weddingInfo.bride.father}
                  </Text>
                  <HStack spacing={2}>
                    <Button
                      flex={1}
                      leftIcon={<FaPhone />}
                      colorScheme="orange"
                      size="sm"
                      onClick={() => makeCall("010-7777-8888")}
                    >
                      전화
                    </Button>
                    <Button
                      flex={1}
                      leftIcon={<FaComment />}
                      colorScheme="orange"
                      variant="outline"
                      size="sm"
                      onClick={() => sendSMS("010-7777-8888")}
                    >
                      문자
                    </Button>
                  </HStack>
                </CardBody>
              </Card>

              <Card w="full" variant="outline">
                <CardBody>
                  <Text fontSize="sm" color="gray.500" mb={2}>
                    혼주 (어머니)
                  </Text>
                  <Text fontWeight="semibold" mb={3}>
                    {weddingInfo.bride.mother}
                  </Text>
                  <HStack spacing={2}>
                    <Button
                      flex={1}
                      leftIcon={<FaPhone />}
                      colorScheme="orange"
                      size="sm"
                      onClick={() => makeCall("010-9999-0000")}
                    >
                      전화
                    </Button>
                    <Button
                      flex={1}
                      leftIcon={<FaComment />}
                      colorScheme="orange"
                      variant="outline"
                      size="sm"
                      onClick={() => sendSMS("010-9999-0000")}
                    >
                      문자
                    </Button>
                  </HStack>
                </CardBody>
              </Card>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
}
