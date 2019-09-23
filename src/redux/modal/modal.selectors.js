import { createSelector } from "reselect";

const selectModal = state => state.modal;

export const modal = createSelector(
  [selectModal],
  modal => modal.modal
);

export default modal;
