import { useFormik } from 'formik';
import {
  Alert,
  Button,
  Card,
  CardBody,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import { FormValidation } from '../store/types/types';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { loginDispatch } from '../store/actions/authActions';

const validationsForm = Yup.object().shape({
  username: Yup.string().required(FormValidation.required),
  password: Yup.string().required(FormValidation.required),
});

const Login = () => {
  const dispatch = useDispatch();
  const { errorMsj, loading } = useSelector(state => state.ui);

  const formik = useFormik({
    validationSchema: validationsForm,
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(loginDispatch(values));
    }
  });
  const { values, errors, touched, handleChange, handleSubmit } = formik;

  return (
    <div className="login-page">
      <Card className="d-flex justify-content-center align-items-center login-card">
        <CardBody>
          <div className="d-flex justify-content-center flex-column login-content">
            <h3 className="mb-4 text-center">Login</h3>
            {
              errorMsj ? <Alert color="danger" className="text-center">{errorMsj}</Alert> :
                <Alert color="info" className="text-center">Ingrese sus credenciales para ingresar al sistema</Alert>
            }
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="username">
                  Nombre de usuario
                </Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="Ingrese el nombre de usuario"
                  value={values.username}
                  onChange={handleChange}
                  invalid={errors.username && touched.username}
                />
                <FormFeedback>{errors.username}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="password">
                  Contraseña
                </Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Ingrese la contraseña"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  invalid={errors.password && touched.password}
                />
                <FormFeedback>{errors.password}</FormFeedback>
              </FormGroup>
              <Button
                block
                type="submit"
                color="dark"
                disabled={loading}
              >
                Ingresar
              </Button>
            </Form>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
export default Login;
