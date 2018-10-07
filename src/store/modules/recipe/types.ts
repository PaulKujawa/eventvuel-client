export interface RecipeState {
    recipes: Recipe[];
    error: boolean;
}

export interface Recipe {
    id: number;
    name: string;
    is_vegan: true;
    servings: number;
    preparation_time?: number;
    cook_time?: number;
    macros: object;
    instructions: object[];
    ingredients: object[];
    photos: string[];
}
