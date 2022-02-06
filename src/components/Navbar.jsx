import React, { useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { logoutAction } from '../store/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

export const Navbar = () => {
  const dispatch = useDispatch();
  const { dataUser } = useSelector(state => state.auth);

  const [open, setOpen] = useState(false);

  const handleToogle = () => setOpen(!open);

  const handleLogout = () => dispatch(logoutAction());

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <div className="d-flex justify-content-center px-2 px-md-5">
            <Dropdown isOpen={open} toggle={handleToogle}>
              <DropdownToggle caret>
                {`${dataUser?.names} ${dataUser?.lastNames}`}
              </DropdownToggle>
              <DropdownMenu
                dark
                end
              >
                <NavLink
                  to="/user"
                  className="text-decoration-none"
                >
                  <DropdownItem>
                    Editar usuario
                  </DropdownItem>
                </NavLink>
                <DropdownItem onClick={handleLogout}>
                  Salir
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </ul>
      </div>
    </nav>
  );
};
