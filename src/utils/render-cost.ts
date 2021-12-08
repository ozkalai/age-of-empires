import { ICost } from "@/typing/Unit";

export const renderCost = (cost: ICost | null) =>
  `${cost?.Wood ? `${cost?.Wood} 🪵 ` : ""}${cost?.Food ? `${cost?.Food} 🥩 ` : ""}${
    cost?.Gold ? `${cost?.Gold} 💰 ` : ""
  }`;
