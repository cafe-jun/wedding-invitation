import { WeddingInfo } from "@/app/types/wedding";

export const weddingInfo: WeddingInfo = {
  date: "2024년 10월 26일 토요일",
  time: "오후 1시 30분",
  groom: {
    name: "이지훈",
    father: "이○○",
    mother: "김○○",
  },
  bride: {
    name: "유수진",
    father: "유○○",
    mother: "박○○",
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
      holder: "이지훈",
    },
    bride: {
      bank: "국민은행",
      account: "123-456-789012",
      holder: "유수진",
    },
  },
};
