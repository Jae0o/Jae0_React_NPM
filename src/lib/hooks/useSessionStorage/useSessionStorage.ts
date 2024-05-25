import { useCallback, useState } from "react";
import {
  SetSessionStorage,
  UseSessionStorage,
  UseSessionStorageProps,
} from "./useSessionStorage.type";

const useSessionStorage: UseSessionStorage = <T>({
  key,
  initialData,
}: UseSessionStorageProps<T>) => {
  const [data, setData] = useState<T>(() => {
    try {
      const res = sessionStorage.getItem(key);

      if (!res) {
        return initialData;
      }

      return JSON.parse(res);
    } catch (e) {
      console.error(e, "jae0brary session storage hook get error!!");

      return initialData;
    }
  });

  const setSessionStorage: SetSessionStorage<T> = useCallback(
    (newData) => {
      try {
        const stringifiedData = JSON.stringify(newData);
        sessionStorage.setItem(key, stringifiedData);
        setData(newData);

        return newData;
      } catch (e) {
        console.error(e, "jae0brary session storage hook set error!!");
        return initialData;
      }
    },
    [initialData, key]
  );

  const removeSessionStorage = useCallback(() => {
    sessionStorage.removeItem(key);
  }, [key]);

  return { data, setSessionStorage, removeSessionStorage };
};

export default useSessionStorage;
