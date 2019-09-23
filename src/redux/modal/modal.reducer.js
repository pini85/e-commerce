import { ModalActionTypes } from "./modal.types";
const INITIAL_STATE = {
  modalHidden: true
};
const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalActionTypes.SET_MODAL:
      return {
        ...state,
        modal: action.payload
      };

    default:
      return state;
  }
};

export default modalReducer;
