// 扩展 ImportMeta 类型，让 TypeScript 识别 env 属性
interface ImportMeta {
  env: {
    // 可以声明你用到的环境变量类型（可选，更严谨）
    VITE_APP_TITLE: string;
    VITE_API_BASE_URL: string;
    MODE: "development" | "production";
    // 通用写法：匹配所有 VITE_ 开头的环境变量
    [key: string]: string | boolean | undefined;
  };
}

interface NutritionItem {
  label: string;
  value: string;
  color: string;
}

interface FruitInfo {
  nutrition: NutritionItem[];
  pickTips: string[];
  suitableFor: string[];
  avoidFor: string[];
  storageDays: number;
  grade: "S" | "A" | "B" | "C";
  desc: string;
}

type FruitItem = FruitInfo & {
  id: string;
  name: string;
  level: string;
  reliability: number;
  time?: number;
  select?: boolean;
};

type CompareItem = FruitItem & {
  time: string;
  type: string;
};
