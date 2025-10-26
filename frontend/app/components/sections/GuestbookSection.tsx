// src/components/sections/GuestbookSection.tsx
"use client";

import {
  Container,
  VStack,
  Heading,
  Text,
  Icon,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  HStack,
  useToast,
  Flex,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import { FaComment, FaEllipsisV, FaTrash, FaLock } from "react-icons/fa";
import { useState } from "react";
import { GuestbookEntry } from "@/app/types/wedding";

export default function GuestbookSection() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [guestbook, setGuestbook] = useState<GuestbookEntry[]>([]);
  const [newMessage, setNewMessage] = useState({
    name: "",
    password: "",
    message: "",
  });
  const [deleteTarget, setDeleteTarget] = useState<{
    index: number;
    password: string;
  }>({
    index: -1,
    password: "",
  });

  // 메시지 등록
  const handleSubmit = () => {
    if (!newMessage.name.trim()) {
      toast({
        title: "이름을 입력해주세요",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    if (!newMessage.password.trim()) {
      toast({
        title: "비밀번호를 입력해주세요",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    if (!newMessage.message.trim()) {
      toast({
        title: "메시지를 입력해주세요",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const entry: GuestbookEntry = {
      ...newMessage,
      date: new Date().toLocaleDateString("ko-KR"),
      createdAt: new Date(),
    };

    setGuestbook([entry, ...guestbook]);
    setNewMessage({ name: "", password: "", message: "" });

    toast({
      title: "축하 메시지가 등록되었습니다",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  // 삭제 모달 열기
  const handleDeleteClick = (index: number) => {
    setDeleteTarget({ index, password: "" });
    onOpen();
  };

  // 메시지 삭제
  const handleDelete = () => {
    const entry = guestbook[deleteTarget.index];

    if (entry.password !== deleteTarget.password) {
      toast({
        title: "비밀번호가 일치하지 않습니다",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const updatedGuestbook = guestbook.filter(
      (_, i) => i !== deleteTarget.index
    );
    setGuestbook(updatedGuestbook);

    toast({
      title: "메시지가 삭제되었습니다",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    onClose();
    setDeleteTarget({ index: -1, password: "" });
  };

  return (
    <Container maxW="container.md" py={16}>
      <VStack spacing={8}>
        <Icon as={FaComment} w={10} h={10} color="pink.400" />

        <Heading
          as="h3"
          size="lg"
          fontFamily="var(--font-noto-serif)"
          color="gray.800"
        >
          방명록
        </Heading>

        <Text fontSize="sm" color="gray.500" textAlign="center">
          소중한 축하 메시지를 남겨주세요
        </Text>

        {/* 메시지 작성 폼 */}
        <Card shadow="lg" w="full">
          <CardBody>
            <VStack spacing={4}>
              <HStack spacing={4} w="full">
                <Input
                  placeholder="이름"
                  value={newMessage.name}
                  onChange={(e) =>
                    setNewMessage({
                      ...newMessage,
                      name: e.target.value,
                    })
                  }
                  focusBorderColor="pink.400"
                />
                <Input
                  type="password"
                  placeholder="비밀번호"
                  value={newMessage.password}
                  onChange={(e) =>
                    setNewMessage({
                      ...newMessage,
                      password: e.target.value,
                    })
                  }
                  focusBorderColor="pink.400"
                />
              </HStack>

              <Textarea
                placeholder="축하 메시지를 남겨주세요"
                value={newMessage.message}
                onChange={(e) =>
                  setNewMessage({
                    ...newMessage,
                    message: e.target.value,
                  })
                }
                rows={4}
                resize="none"
                focusBorderColor="pink.400"
              />

              <Button
                w="full"
                bgGradient="linear(to-r, pink.400, orange.400)"
                color="white"
                _hover={{
                  bgGradient: "linear(to-r, pink.500, orange.500)",
                }}
                onClick={handleSubmit}
                size="lg"
              >
                축하 메시지 남기기
              </Button>
            </VStack>
          </CardBody>
        </Card>

        {/* 메시지 목록 */}
        <VStack spacing={4} w="full">
          {guestbook.length === 0 ? (
            <Card shadow="lg" w="full">
              <CardBody textAlign="center" py={12}>
                <Icon as={FaComment} w={12} h={12} color="gray.300" mb={4} />
                <Text color="gray.400">첫 번째 축하 메시지를 남겨주세요</Text>
              </CardBody>
            </Card>
          ) : (
            <>
              <Box w="full" textAlign="left">
                <Text fontSize="sm" color="gray.500">
                  총 {guestbook.length}개의 축하 메시지
                </Text>
              </Box>

              {guestbook.map((msg, idx) => (
                <Card key={idx} shadow="lg" w="full">
                  <CardBody>
                    <Flex justify="space-between" align="start" mb={3}>
                      <Box>
                        <HStack spacing={2}>
                          <Text fontWeight="semibold" color="gray.800">
                            {msg.name}
                          </Text>
                          <Icon as={FaLock} w={3} h={3} color="gray.400" />
                        </HStack>
                        <Text fontSize="xs" color="gray.400" mt={1}>
                          {msg.date}
                        </Text>
                      </Box>

                      <Menu>
                        <MenuButton
                          as={IconButton}
                          icon={<FaEllipsisV />}
                          variant="ghost"
                          size="sm"
                          aria-label="Options"
                        />
                        <MenuList>
                          <MenuItem
                            icon={<FaTrash />}
                            onClick={() => handleDeleteClick(idx)}
                          >
                            삭제
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </Flex>

                    <Divider mb={3} />

                    <Text color="gray.600" whiteSpace="pre-wrap">
                      {msg.message}
                    </Text>
                  </CardBody>
                </Card>
              ))}
            </>
          )}
        </VStack>
      </VStack>

      {/* 삭제 확인 모달 */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent mx={4}>
          <ModalHeader>메시지 삭제</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Text fontSize="sm" color="gray.600">
                작성 시 입력한 비밀번호를 입력해주세요
              </Text>
              <Input
                type="password"
                placeholder="비밀번호"
                value={deleteTarget.password}
                onChange={(e) =>
                  setDeleteTarget({
                    ...deleteTarget,
                    password: e.target.value,
                  })
                }
                focusBorderColor="pink.400"
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              취소
            </Button>
            <Button colorScheme="red" onClick={handleDelete}>
              삭제
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}
