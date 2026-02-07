import { FRUIT_KNOWLEDGE_DB } from "@/config/fruitDb";
import { getRandomNumber } from "@/utils/utils";

export function genItem(key: keyof typeof FRUIT_KNOWLEDGE_DB) {
  const item = FRUIT_KNOWLEDGE_DB[key];

  return {
    name: key,
    level: item.grade + `级`,
    reliability: getRandomNumber(80, 100),
    storageDays: item.storageDays,
    nutrition: item.nutrition,
  };
}
