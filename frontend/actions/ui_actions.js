export const OPEN_USER_MODAL = "OPEN_USER_MODAL";
export const CLOSE_USER_MODAL = "CLOSE_USER_MODAL";
export const CLOSE_ALL_MODALS = "CLOSE_ALL_MODALS";

export const openUserModal = () => ({
  type: OPEN_USER_MODAL,
})

export const closeUserModal = () => ({
  type: CLOSE_USER_MODAL,
});

export const closeAllModals = () => ({
  type: CLOSE_ALL_MODALS
})