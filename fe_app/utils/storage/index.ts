const projectName = "Crypto_Raffle";
const storageKey = (key: string) => `${projectName}_${key}`;

const storageOperations = (storage: any) => {
  if (typeof window !== "undefined") {
    return {
      set: (key: string, value: string | boolean) =>
        storage.setItem(storageKey(key), JSON.stringify(value)),
      get: (key: string) => JSON.parse(storage.getItem(storageKey(key))),
    };
  }
};

export const LocalStorage = storageOperations(localStorage);
