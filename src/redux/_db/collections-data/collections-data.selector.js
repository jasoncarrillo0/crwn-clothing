import { createSelector } from 'reselect';
 

/* ----------------------CREATE SELECTORS FOR EACH KEY OF FIREBASECOLLECTIONS SLICE---------------------*/
const selectFirebaseCollections = appState => appState.firebaseCollections;
export const selectCollections = createSelector(
    [selectFirebaseCollections],
    firebaseCollections => firebaseCollections.collections
);
export const selectIsFetching = createSelector(
    [selectFirebaseCollections],
    firebaseCollections => firebaseCollections.collectionsIsFetching
);
export const selectErrorMsg = createSelector(
    [selectFirebaseCollections],
    firebaseCollections => firebaseCollections.errorMsg
);



/* -------------------------------------OTHER SELECTORS-----------------------------------------*/
export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollectionsIsLoaded = createSelector(
    [selectCollections],
    collections => collections ? true : false
);

export function selectCollection(collectionUrlParam) {
    return createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParam] : []
    );
}