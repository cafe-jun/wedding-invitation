// src/components/sections/LocationSection.tsx
"use client";

import {
  Container,
  VStack,
  Heading,
  Text,
  Box,
  Icon,
  Card,
  CardBody,
  Button,
  HStack,
  useToast,
  Divider,
} from "@chakra-ui/react";
import {
  FaMapMarkerAlt,
  FaSubway,
  FaBus,
  FaParking,
  FaCopy,
} from "react-icons/fa";
import { WeddingInfo } from "@/app/types/wedding";

interface LocationSectionProps {
  weddingInfo: WeddingInfo;
}

export default function LocationSection({ weddingInfo }: LocationSectionProps) {
  const toast = useToast();

  const copyAddress = () => {
    navigator.clipboard.writeText(weddingInfo.venue.address);
    toast({
      title: "주소가 복사되었습니다",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  const openKakaoMap = () => {
    // 카카오맵 링크
    const kakaoMapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(
      weddingInfo.venue.name
    )}`;
    window.open(kakaoMapUrl, "_blank");
  };

  const openNaverMap = () => {
    // 네이버 지도 링크
    const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(
      weddingInfo.venue.name
    )}`;
    window.open(naverMapUrl, "_blank");
  };

  const openGoogleMap = () => {
    // 구글 지도 링크
    const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      weddingInfo.venue.address
    )}`;
    window.open(googleMapUrl, "_blank");
  };

  return (
    <Container maxW="container.md" py={16}>
      <VStack spacing={8}>
        <Icon as={FaMapMarkerAlt} w={10} h={10} color="pink.400" />

        <Heading
          as="h3"
          size="lg"
          fontFamily="var(--font-noto-serif)"
          color="gray.800"
        >
          오시는 길
        </Heading>

        <Card shadow="lg" w="full">
          <CardBody>
            <VStack spacing={4} align="start">
              {/* 장소 정보 */}
              <Box>
                <Text fontWeight="semibold" fontSize="lg" color="gray.800">
                  {weddingInfo.venue.name}
                </Text>
                <Text color="gray.600" mt={2}>
                  {weddingInfo.venue.address}
                </Text>
                <Text color="gray.600">{weddingInfo.venue.floor}</Text>
              </Box>

              {/* 주소 복사 버튼 */}
              <Button
                leftIcon={<FaCopy />}
                size="sm"
                variant="outline"
                colorScheme="pink"
                onClick={copyAddress}
              >
                주소 복사
              </Button>

              {/* 지도 플레이스홀더 */}
              <Box
                w="full"
                h="300px"
                bgGradient="linear(to-br, blue.100, blue.200)"
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative"
                overflow="hidden"
              >
                <Icon as={FaMapMarkerAlt} w={16} h={16} color="blue.400" />

                {/* 실제 카카오맵 API 사용 시 여기에 지도 컴포넌트 추가 */}
                {/* <KakaoMap venue={weddingInfo.venue} /> */}
              </Box>

              {/* 지도 앱 열기 버튼들 */}
              <HStack spacing={2} w="full" flexWrap="wrap">
                <Button
                  flex={1}
                  colorScheme="yellow"
                  size="sm"
                  onClick={openKakaoMap}
                  minW="100px"
                >
                  카카오맵
                </Button>
                <Button
                  flex={1}
                  colorScheme="green"
                  size="sm"
                  onClick={openNaverMap}
                  minW="100px"
                >
                  네이버지도
                </Button>
                <Button
                  flex={1}
                  colorScheme="blue"
                  size="sm"
                  onClick={openGoogleMap}
                  minW="100px"
                >
                  구글지도
                </Button>
              </HStack>

              <Divider />

              {/* 교통편 안내 */}
              <VStack spacing={3} w="full" align="start" pt={2}>
                <HStack align="start" spacing={3}>
                  <Icon as={FaSubway} color="blue.500" mt={1} />
                  <Box>
                    <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                      지하철
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      2호선 강남역 3번 출구 도보 5분
                    </Text>
                  </Box>
                </HStack>

                <HStack align="start" spacing={3}>
                  <Icon as={FaBus} color="green.500" mt={1} />
                  <Box>
                    <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                      버스
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      강남역 정류장 하차 (간선: 146, 401, 지선: 4318, 4419)
                    </Text>
                  </Box>
                </HStack>

                <HStack align="start" spacing={3}>
                  <Icon as={FaParking} color="purple.500" mt={1} />
                  <Box>
                    <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                      주차
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      건물 내 주차 가능 (3시간 무료, 이후 10분당 1,000원)
                    </Text>
                  </Box>
                </HStack>
              </VStack>
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </Container>
  );
}
