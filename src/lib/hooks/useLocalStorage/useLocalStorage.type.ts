export type SetLocalStorage<T> = (newData: T) => T;
export type RemoveLocalStorage = () => void;

export interface UseLocalStorageProps<T> {
  key: string;
  initialData: T;
}

export type UseLocalStorage = <T>(props: UseLocalStorageProps<T>) => {
  data: T;
  setLocalStorage: SetLocalStorage<T>;
  removeLocalStorage: RemoveLocalStorage;
};
