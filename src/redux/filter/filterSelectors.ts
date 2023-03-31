import { RootState } from "../store";

export const selectFilter = (state: RootState) => state.filter;
export const selectFilterSortName = (state: RootState) => state.filter.sortName;
export const selectCategories = (state: RootState) => state.filter.categoryId;