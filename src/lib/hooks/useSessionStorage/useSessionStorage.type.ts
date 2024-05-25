export type SetSessionStorage<T> = (newData: T) => T;
export type RemoveSessionStorage = () => void;

export interface UseSessionStorageProps<T> {
  key: string;
  initialData: T;
}

export type UseSessionStorage = <T>(props: UseSessionStorageProps<T>) => {
  data: T;
  setSessionStorage: SetSessionStorage<T>;
  removeSessionStorage: RemoveSessionStorage;
};
