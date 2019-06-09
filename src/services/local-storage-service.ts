export const localStorageService = {
  getItem<T>(id: string): T | undefined {
    try {
      const stored = localStorage.getItem(id);

      return stored ? JSON.parse(stored) : undefined;
    } catch (e) {
      localStorage.removeItem(id);
    }
  },
  setItem(id: string, value: object | number | string | boolean): void {
    const toBeStore = JSON.stringify(value);
    localStorage.setItem(id, toBeStore);
  }
};
