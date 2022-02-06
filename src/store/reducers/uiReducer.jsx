import { types } from "../types/types";

const initialState = {
  loading: false,
  errorMsj: null,
  successMsj: null,
};
export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        successMsj: null,
        errorMsj: null,
        loading: true
      };

    case types.REMOVE_LOADING:
      return {
        ...state,
        loading: false
      };

    case types.SET_ERROR:
      return {
        ...state,
        errorMsj: action.payload
      };

    case types.REMOVE_ERROR:
      return {
        ...state,
        errorMsj: null
      };

    case types.SET_SUCCESS:
      return {
        ...state,
        successMsj: action.payload
      };

    case types.REMOVE_SUCCESS:
      return {
        ...state,
        successMsj: null
      };

    default:
      return state;
  }
};
