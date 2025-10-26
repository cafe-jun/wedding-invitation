// src/components/sections/GallerySection.tsx
"use client";

import {
  Container,
  Heading,
  Grid,
  Box,
  Icon,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  AspectRatio,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function GallerySection() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<number>(0);

  // 실제 이미지 경로로 변경하세요
  const images = [
    "/images/gallery/photo1.jpg",
    "/images/gallery/photo2.jpg",
    "/images/gallery/photo3.jpg",
    "/images/gallery/photo4.jpg",
    "/images/gallery/photo5.jpg",
    "/images/gallery/photo6.jpg",
  ];

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    onOpen();
  };

  return (
    <Container maxW="container.md" py={16}>
      <Heading
        as="h3"
        size="lg"
        fontFamily="var(--font-noto-serif)"
        color="gray.800"
        textAlign="center"
        mb={8}
      >
        Gallery
      </Heading>

      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
        gap={4}
      >
        {images.map((image, index) => (
          <AspectRatio
            key={index}
            ratio={1}
            cursor="pointer"
            onClick={() => handleImageClick(index)}
            _hover={{ transform: "scale(1.05)" }}
            transition="transform 0.3s"
          >
            <Box
              bgGradient="linear(to-br, pink.200, orange.200)"
              borderRadius="lg"
              shadow="md"
              overflow="hidden"
              position="relative"
            >
              {/* 이미지가 없을 때 플레이스홀더 */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="full"
                h="full"
              >
                <Icon as={FaHeart} w={12} h={12} color="whiteAlpha.500" />
              </Box>

              {/* 실제 이미지가 있을 때 사용 */}
              {/* <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                objectFit="cover"
                w="full"
                h="full"
              /> */}
            </Box>
          </AspectRatio>
        ))}
      </Grid>

      {/* Image Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent bg="transparent" shadow="none" maxW="90vw">
          <ModalCloseButton
            color="white"
            size="lg"
            _hover={{ bg: "whiteAlpha.300" }}
          />
          <ModalBody p={0}>
            <Box
              bgGradient="linear(to-br, pink.200, orange.200)"
              borderRadius="lg"
              overflow="hidden"
              display="flex"
              alignItems="center"
              justifyContent="center"
              minH="50vh"
            >
              <Icon as={FaHeart} w={20} h={20} color="whiteAlpha.500" />
              {/* 실제 이미지가 있을 때 사용 */}
              {/* <Image
                src={images[selectedImage]}
                alt={`Gallery ${selectedImage + 1}`}
                objectFit="contain"
                maxH="80vh"
              /> */}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
}
