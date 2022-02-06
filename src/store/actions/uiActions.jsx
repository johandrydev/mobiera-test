import { types } from "../types/types";

export const setLoadingAction = () => ({
  type: types.SET_LOADING
});

export const removeLoadingAction = () => ({
  type: types.REMOVE_LOADING
});

export const setErrorAction = (msj) => ({
  type: types.SET_ERROR,
  payload: msj
});

export const removeErrorAction = () => ({
  type: types.REMOVE_ERROR
});

export const setSuccessAction = (msj) => ({
  type: types.SET_SUCCESS,
  payload: msj
});

export const removeSuccessAction = () => ({
  type: types.REMOVE_SUCCESS
});
