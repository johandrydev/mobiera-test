import { types } from "../types/types";

const initialState = {
  isAutenticated: false,
  dataUser: null
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        isAutenticated: true,
        dataUser: {
          ...action?.payload
        }
      };

    case types.LOGUOT:
      return initialState;

    case types.CHANGE_INFO_USER:
      return {
        ...state,
        dataUser: {
          ...action?.payload
        }
      };

    default:
      return state;
  }
};
