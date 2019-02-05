function LocalStorageService() {
  return {
    getItem(id: string): string | undefined {
      try {
        return localStorage.getItem(id) || undefined;
      } catch (e) {
        localStorage.removeItem(id);
      }
    },
    setItem(id: string, value: string) {
      localStorage.setItem(id, value);
    }
  };
}

export const localStorageService = LocalStorageService();
