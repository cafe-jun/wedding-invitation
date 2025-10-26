// src/components/ui/AccountCard.tsx
"use client";

import {
  Box,
  Card,
  CardBody,
  Text,
  VStack,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Account } from "@/app/types/wedding";

interface AccountCardProps {
  title: string;
  account: Account;
  colorScheme: "pink" | "orange";
}

export default function AccountCard({
  title,
  account,
  colorScheme,
}: AccountCardProps) {
  const toast = useToast();

  const copyAccount = () => {
    navigator.clipboard.writeText(account.account);
    toast({
      title: "계좌번호가 복사되었습니다",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  const gradientColors = {
    pink: "linear(to-r, pink.400, pink.500)",
    orange: "linear(to-r, orange.400, orange.500)",
  };

  return (
    <Card shadow="lg" w="full" overflow="hidden">
      <Box bgGradient={gradientColors[colorScheme]} px={6} py={3}>
        <Text color="white" fontWeight="semibold">
          {title}
        </Text>
      </Box>

      <CardBody>
        <VStack spacing={2} align="start">
          <Text fontWeight="semibold" color="gray.700">
            {account.bank}
          </Text>
          <Text color="gray.600" fontFamily="mono">
            {account.account}
          </Text>
          <Text color="gray.600">예금주: {account.holder}</Text>
        </VStack>

        <Button
          w="full"
          mt={4}
          colorScheme={colorScheme}
          variant="ghost"
          onClick={copyAccount}
        >
          계좌번호 복사
        </Button>
      </CardBody>
    </Card>
  );
}
