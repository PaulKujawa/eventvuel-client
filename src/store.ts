import { localStorageService } from "@/services/local-storage-service";

export type City = {
  readonly country_id: number;
  readonly id: number;
  readonly name: string;
  readonly region_id?: number;
};

const reducer = {
  setCity(city: City) {
    state.city = { ...city };
    localStorageService.setItem("city", city);
  }
};

const selector = {
  getCity() {
    return state.city || null;
  }
};

const state: { city: City | null } = {
  city: localStorageService.getItem<City>("city") || null
};

export const store = {
  reducer,
  selector
};
