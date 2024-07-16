import { useCallback, useState } from "react";

import { SetLocalStorage, UseLocalStorage, UseLocalStorageProps } from "./useLocalStorage.type";

/**
 * @function useLocalStorage
 *
 * Local Storage에 쉽게 저장하고 데이터를 꺼내기 위한 hook 입니다.
 *
 * @param key
 *
 * Local Storage에 접근할 `key` 값을 전달받습니다.
 *
 * @param initial
 *
 * 전달한 `key`에 해당하는 Local Storage의 기본 값을 전달받습니다.
 *
 * <hr>
 *
 * @returns data : T
 *
 * 전달한 `key`에 해당하는 Local Storage 값을 사용할 수 있습니다.
 *
 * @returns setLocalStorage : ( newData : T ) => T
 *
 * 전달한 `key`에 해당하는 Local Storage에 값을 추가합니다.
 *
 * @returns removeLocalStorage : () => void
 *
 * 전달한 `key`에 해당하는 Local Storage를 제거합니다.
 *
 */
const useLocalStorage: UseLocalStorage = <T>({ key, initialData }: UseLocalStorageProps<T>) => {
  const [data, setData] = useState<T>(() => {
    try {
      const res = localStorage.getItem(key);

      if (!res) {
        return initialData;
      }

      return JSON.parse(res);
    } catch (e) {
      console.error(e, "jae0brary local storage hook get error!!");

      return initialData;
    }
  });

  const setLocalStorage: SetLocalStorage<T> = useCallback(
    newData => {
      try {
        const stringifiedData = JSON.stringify(newData);
        localStorage.setItem(key, stringifiedData);
        setData(newData);

        return newData;
      } catch (e) {
        console.error(e, "jae0brary session storage hook set error!!");
        return initialData;
      }
    },
    [initialData, key],
  );

  const removeLocalStorage = useCallback(() => {
    localStorage.removeItem(key);
  }, [key]);

  return { data, setLocalStorage, removeLocalStorage };
};

export default useLocalStorage;
