import { createSelector } from 'reselect';

const selectCollectionState = state => state.collections;
export const selectCollections = createSelector(
    [selectCollectionState],
    collectionsState => collectionsState.collections
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)


export function selectCollection(collectionUrlParam) {
    return createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );
}