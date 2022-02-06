import { changeInfoUser, login } from "../../services/authServices";
import { removeLoadingAction, setErrorAction, setLoadingAction, setSuccessAction } from "./uiActions";
import { types } from "../types/types";

export const loginDispatch = (data) => {
  return async (dispatch) => {
    dispatch(setLoadingAction());
    const resp = await login(data);
    dispatch(resp.length > 0 ? loginAction(resp[0]) : setErrorAction('Nombre de usuario o contraseña incorrectos'));
    dispatch(removeLoadingAction());
  };
};

export const loginAction = (data) => ({
  type: types.LOGIN,
  payload: data
});

export const logoutAction = () => ({
  type: types.LOGUOT
});

export const changeInfoUserDispatch = (data, id) => {
  return async (dispatch) => {
    dispatch(setLoadingAction());
    const resp = await changeInfoUser(data, id);
    dispatch(Object.keys(resp).length > 0 ? setSuccessAction('Usuario guardado exitoxamente') : setErrorAction('Error al guardar al usuario'));
    if (Object.keys(resp).length > 0)
      dispatch(changeInfoUserAction(resp))
    dispatch(removeLoadingAction());
  };
};

export const changeInfoUserAction = (data) => ({
  type: types.CHANGE_INFO_USER,
  payload: data
});
