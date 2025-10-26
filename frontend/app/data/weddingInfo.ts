import { WeddingInfo } from "@/app/types/wedding";

export const weddingInfo: WeddingInfo = {
  date: "2024년 10월 26일 토요일",
  time: "오후 1시 30분",
  groom: {
    name: "신○○",
    father: "신○○",
    mother: "신○○",
  },
  bride: {
    name: "이○○",
    father: "○○○",
    mother: "○○○",
  },
  venue: {
    name: "그랜드컨벤션센터",
    address: "서울시 강남구 테헤란로 123",
    floor: "3층 그랜드홀",
    latitude: 37.5665,
    longitude: 126.978,
  },
  accounts: {
    groom: {
      bank: "신한은행",
      account: "110-123-456789",
      holder: "신00",
    },
    bride: {
      bank: "국민은행",
      account: "123-456-789012",
      holder: "이00",
    },
  },
};
