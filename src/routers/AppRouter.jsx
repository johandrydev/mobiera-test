import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { PrivatedRouter } from './PrivatedRouter';
import Login from '../pages/Login';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />

        <Route path="/*" element={
          <PrivateRoute>
            <PrivatedRouter />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
};
