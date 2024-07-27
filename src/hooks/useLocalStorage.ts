
import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;

  const [value, setValue] = useState<T>(() => {
    if (isLocalStorageAvailable) {
      const jsonValue = localStorage.getItem(key);
      if (jsonValue !== null) return JSON.parse(jsonValue);
    }

    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    if (isLocalStorageAvailable) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, isLocalStorageAvailable]);

  return [value, setValue] as [typeof value, typeof setValue];
}