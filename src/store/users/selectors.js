export const selectUsersItems = (state) => state.users.items;
export const selectUserById = (id) => (state) => {
    return state.users.items.find((item) => item.id === +id);
};
export const selectUsersLoading = (state) => state.users.loading;
export const selectUsersError = (state) => state.users.error;
