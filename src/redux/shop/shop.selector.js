import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.shopData
);

export const selectSelectionForPreview = createSelector(
  [selectShopData],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionId) => {
  return createSelector(
    [selectShopData],
    (collections) => collections[collectionId]
  );
};
