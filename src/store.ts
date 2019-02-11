export type City = {
  readonly country_id: number;
  readonly id: number;
  readonly name: string;
  readonly region_id?: number;
};

const reducer = {
  setCity(city: City) {
    state.city = { ...city };
  }
};

const selector = {
  getCity() {
    return state.city || null;
  }
};

const state: { city: City | null } = {
  city: null
};

export const store = {
  reducer,
  selector
};
