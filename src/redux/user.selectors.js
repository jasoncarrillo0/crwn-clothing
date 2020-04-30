import { createSelector } from 'reselect';

// 1st get "slice" from the store
const user = state => state.user;
export const selectUser = createSelector(
    [user],
    user => user.currentUser
);