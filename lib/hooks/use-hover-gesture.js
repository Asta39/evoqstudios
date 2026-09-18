import { useMemo } from "react";

export function useHoverGesture() {
  return useMemo(
    () => ({
      enter: (event) => event.pointerType !== "touch",
      leave: (event) => event.pointerType !== "touch",
    }),
    [],
  );
}
