import { useEffect, useRef } from "react";

import { UseClickAwayCallback } from "./useClickAway.type";

const useClickAway = <T>(callback: UseClickAwayCallback) => {
  const ref = useRef<T | null>(null);
  const saveCallback = useRef(callback);

  useEffect(() => {
    saveCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const element = ref.current;

    if (!element || !(element instanceof HTMLElement)) {
      return;
    }

    const handleEvent = (e: MouseEvent | TouchEvent) => {
      const { target } = e;

      if (!target || !(target instanceof HTMLElement)) {
        return;
      }

      if (element.contains(target)) {
        return;
      }

      saveCallback.current(e);
    };

    document.addEventListener("mousedown", handleEvent);
    document.addEventListener("touchstart", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
      document.removeEventListener("touchstart", handleEvent);
    };
  }, []);

  return ref;
};

export default useClickAway;
