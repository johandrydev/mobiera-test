import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const { isAutenticated } = useSelector(state => state.auth);

  return isAutenticated
    ? <Navigate to="/home" />
    : children
}
