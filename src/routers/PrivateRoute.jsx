import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { isAutenticated } = useSelector(state => state.auth);
  return isAutenticated
    ? children
    : <Navigate to="/login" />
}
