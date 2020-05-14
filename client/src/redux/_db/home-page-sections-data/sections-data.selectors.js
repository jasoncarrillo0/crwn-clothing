import { createSelector } from 'reselect';

/*--------------------------SELECT ALL PROPERTIES OF FIREBASEHOMEPAGESECTIONS------------------------*/
const selectFirebaseHomePageSections = state => state.firebaseHomePageSections;
export const selectSections = createSelector(
    [selectFirebaseHomePageSections],
    firebaseHomePageSections => firebaseHomePageSections.sections
);
export const selectSectionsAreLoading = createSelector(
    [selectFirebaseHomePageSections],
    firebaseHomePageSections => firebaseHomePageSections.sectionsAreLoading
);
export const selectErrorMsg = createSelector(
    [selectFirebaseHomePageSections],
    firebaseHomePageSections => firebaseHomePageSections.errorMsg
);


/*--------------------------OTHER SELECTORS------------------------*/
export const selectFormattedSections = createSelector(
    [selectSections],
    sections => sections ? sections.map((obj, idx) => sections[sections.findIndex(key => key.id === idx + 1)]) : []
);


