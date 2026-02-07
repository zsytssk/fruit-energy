import dayjs from "dayjs";
import { showToast } from "vant";

export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("已复制到剪贴板");
  } catch (err) {
    console.error("复制失败", err);
  }
}

export const getRandomArrItem = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)];

export const getRandomNumber = (start: number, end: number) => {
  return start + Math.floor(Math.random() * (end - start));
};

export function formateDate(
  time: string | number | Date | dayjs.Dayjs,
  format = "YYYY-MM-DD HH:mm:ss",
) {
  return dayjs(time).format(format);
}

export const genRandomString = () => {
  const randomStr = Math.random().toString().substring(2);
  return randomStr;
};
