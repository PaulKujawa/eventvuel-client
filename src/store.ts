import { localStorageService } from "@/services/local-storage-service";

export type City = {
  readonly country_id: number;
  readonly id: number;
  readonly name: string;
  readonly region_id?: number;
};

const debug = true;

const reducer = {
  setCity(city: City) {
    if (debug) {
      window.console.log("CITY_UPDATED", city);
    }
    state.city = city;
    localStorageService.setItem("city", city);
  }
};

const selector = {
  getCity() {
    return { ...state.city };
  }
};

const state = {
  city: localStorageService.getItem<City>("city") || {
    country_id: 276,
    id: 60000,
    name: "Berlin"
  }
};

export const store = {
  reducer,
  selector
};
