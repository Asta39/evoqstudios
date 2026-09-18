import { useMemo, useRef } from "react";

export function useTapGesture() {
  const gestureRef = useRef(null);

  return useMemo(
    () => ({
      start(event, state) {
        gestureRef.current = { pointerType: event.pointerType, state };
      },
      take() {
        const gesture = gestureRef.current;
        gestureRef.current = null;
        return gesture;
      },
      drop() {
        gestureRef.current = null;
      },
    }),
    [],
  );
}
