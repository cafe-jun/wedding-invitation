// src/app/page.tsx
"use client";

import { Box, Icon, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { weddingInfo } from "@/app/data/weddingInfo";

// 섹션 컴포넌트 import
import HeroSection from "@/app/components/sections/HeroSection";
import InvitationMessage from "@/app/components/sections/InvitationMessage";
import DateSection from "@/app/components/sections/DateSection";
import GallerySection from "@/app/components/sections/GallerySection";
import LocationSection from "@/app/components/sections/LocationSection";
import ContactSection from "@/app/components/sections/ContactSection";
import AccountSection from "@/app/components/sections/AccountSection";
import GuestbookSection from "@/app/components/sections/GuestbookSection";

export default function WeddingInvitation() {
  return (
    <Box bg="linear-gradient(to bottom, #fff5f7, #fffbeb)">
      {/* Hero Section */}
      <HeroSection weddingInfo={weddingInfo} />

      {/* Invitation Message */}
      <InvitationMessage weddingInfo={weddingInfo} />

      {/* Date & Calendar */}
      <DateSection weddingInfo={weddingInfo} />

      {/* Gallery */}
      <GallerySection />

      {/* Location */}
      <LocationSection weddingInfo={weddingInfo} />

      {/* Contact */}
      <ContactSection weddingInfo={weddingInfo} />

      {/* Account */}
      <AccountSection weddingInfo={weddingInfo} />

      {/* Guestbook */}
      <GuestbookSection />

      {/* Footer */}
      <Box py={12} textAlign="center" color="gray.500">
        <Icon as={FaHeart} w={8} h={8} color="pink.300" mb={4} />
        <Text fontSize="sm">Thank you for celebrating with us</Text>
        <Text fontSize="sm" mt={2}>
          {weddingInfo.groom.name} ❤️ {weddingInfo.bride.name}
        </Text>
        <Text fontSize="xs" color="gray.400" mt={4}>
          © 2024 Wedding Invitation
        </Text>
      </Box>
    </Box>
  );
}
