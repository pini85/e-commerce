import { ModalActionTypes } from "./modal.types";
export const setModal = state => ({
  type: ModalActionTypes.SET_MODAL,
  payload: state
});
