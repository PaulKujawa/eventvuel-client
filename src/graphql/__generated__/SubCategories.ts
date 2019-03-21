/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SubCategories
// ====================================================

export interface SubCategories_subCategories {
  __typename: "Category";
  id: string;
  name: string;
}

export interface SubCategories {
  subCategories: SubCategories_subCategories[];
}

export interface SubCategoriesVariables {
  categoryId: string;
}
