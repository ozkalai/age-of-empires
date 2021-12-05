import { Cost } from "@/typing/Unit";

export const renderCost = (cost: Cost | null) =>
  `${cost?.Wood ? `${cost?.Wood} 🪵 ` : ""}${cost?.Food ? `${cost?.Food} 🥩 ` : ""}${
    cost?.Gold ? `${cost?.Gold} 💰 ` : ""
  }`;
