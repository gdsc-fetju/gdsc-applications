import { useState } from 'react';

function getLocalStorageValueOrDefault<T>(key: string, initialValue: T): T {
  const initialData = localStorage.getItem(key);
  return initialData ? JSON.parse(initialData) : initialValue;
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [data, setData] = useState<T>(
    getLocalStorageValueOrDefault<T>(key, initialValue)
  );

  const updateData = (value: T) => {
    setData(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [data, updateData];
}
