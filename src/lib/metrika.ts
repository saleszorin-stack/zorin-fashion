import { YANDEX_METRIKA_ID } from "@/lib/site";

type YandexMetrika = (...args: unknown[]) => void;

export function trackGoal(goal: string) {
  if (typeof window === "undefined") return;
  const ym = (window as typeof window & { ym?: YandexMetrika }).ym;
  if (typeof ym === "function") {
    ym(YANDEX_METRIKA_ID, "reachGoal", goal);
  }
}
