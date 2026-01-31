import { useRouter } from "vue-router";

export function useNavTo() {
  const router = useRouter();
  return (path: string) => {
    router.push(path);
  };
}
