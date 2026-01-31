import { computed } from "vue";
import { useRoute } from "vue-router";

export function usePageType() {
  const route = useRoute();

  const curPageType = computed(() => {
    if (route.name) {
      return route.name;
    }
    return "";
  });

  return curPageType;
}
