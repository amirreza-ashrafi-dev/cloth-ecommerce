import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.shopData
);

export const selectSelectionForPreview = createSelector(
  [selectShopData],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionId) => {
  return createSelector([selectShopData], (collections) =>
    collections ? collections[collectionId] : null
  );
};

export const selectIsCollection = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectCollectionsIsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.shopData
);
