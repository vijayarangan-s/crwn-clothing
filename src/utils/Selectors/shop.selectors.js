import { createSelector } from 'reselect'

export const selectShop = state => state.collections

export const selectCollection = createSelector(
    [selectShop],
    shop => shop.collections
)


