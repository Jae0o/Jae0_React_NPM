import { useCallback, useState } from "react";
import {
  SetSessionStorage,
  UseSessionStorage,
  UseSessionStorageProps,
} from "./useSessionStorage.type";

/**
 * @function useSessionStorage
 *
 * Session Storage에 쉽게 저장하고 데이터를 꺼내기 위한 hook 입니다.
 *
 * @param key
 *
 * Session Storage에 접근할 `key` 값을 전달받습니다.
 *
 * @param initial
 *
 * 전달한 `key`에 해당하는 Session Storage의 기본 값을 전달받습니다.
 *
 * <hr>
 *
 * @returns data : T
 *
 * 전달한 `key`에 해당하는 Session Storage 값을 사용할 수 있습니다.
 *
 * @returns setSessionStorage : ( newData : T ) => T
 *
 * 전달한 `key`에 해당하는 Session Storage에 값을 추가합니다.
 *
 * @returns removeSessionStorage : () => void
 *
 * 전달한 `key`에 해당하는 Session Storage를 제거합니다.
 *
 */
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
