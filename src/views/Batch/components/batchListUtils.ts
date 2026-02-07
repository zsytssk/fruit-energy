/** ---------------------------
 *  水果知识数据库
 *  --------------------------*/

import { FRUIT_KNOWLEDGE_DB } from "@/config/fruitDb";
import { getRandomArrItem, getRandomNumber } from "@/utils/utils";

export function genRandomItem() {
  const keys = Object.keys(FRUIT_KNOWLEDGE_DB);
  const selectKey = getRandomArrItem(keys);
  const item = FRUIT_KNOWLEDGE_DB[selectKey as keyof typeof FRUIT_KNOWLEDGE_DB];

  return {
    name: selectKey,
    level: item.grade + `级`,
    reliability: getRandomNumber(80, 100),
    storageDays: item.storageDays,
    nutrition: item.nutrition,
  };
}
