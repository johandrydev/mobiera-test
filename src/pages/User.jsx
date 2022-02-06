import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  Alert,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import EditUserForm from "../components/EditUserForm";

const User = () => {
  const { errorMsj, successMsj } = useSelector(state => state.ui);

  return (
    <>
      <div className="d-flex justify-content-end mt-2">
        <Breadcrumb>
          <BreadcrumbItem>
            <NavLink
              to="/home"
              className="text-decoration-none"
            >
              Home
            </NavLink>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            Editar Usuario
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <h3 className="mb-4">Editar Usuario</h3>
      {
        errorMsj && <Alert color="danger" className="text-center">{errorMsj}</Alert>
      }
      {
        successMsj && <Alert color="success" className="text-center">{successMsj}</Alert>
      }
      <EditUserForm />
    </>
  );
};

export default User;
