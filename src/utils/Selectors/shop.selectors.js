import { createSelector } from "reselect";
import memoize from "lodash.memoize";

export const selectShop = (state) => state.collections;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  (collections) => collections? Object.keys(collections).map((key) => collections[key]) : []
);


export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

