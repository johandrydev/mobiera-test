import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { FormValidation } from '../store/types/types';
import { useDispatch, useSelector } from 'react-redux';

import { changeInfoUserDispatch } from '../store/actions/authActions';

const validationsForm = Yup.lazy(values => Yup.object().shape({
  names: Yup.string().required(FormValidation.required),
  lastNames: Yup.string().required(FormValidation.required),
  email: Yup.string().required(FormValidation.required),
  address: Yup.string().required(FormValidation.required),
  username: Yup.string().required(FormValidation.required),
}));

const EditUserForm = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { loading } = state.ui;
  const { dataUser } = state.auth;

  const formik = useFormik({
    validationSchema: validationsForm,
    initialValues: {
      names: dataUser?.names || '',
      lastNames: dataUser?.lastNames || '',
      email: dataUser?.email || '',
      address: dataUser?.address || '',
      username: dataUser?.username || '',
    },
    onSubmit: (values) => {
      dispatch(changeInfoUserDispatch({
        ...dataUser,
        ...values
      }, dataUser.id));
    }
  });
  const { values, errors, touched, handleChange, handleSubmit } = formik;

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label
          for="names"
          sm={2}
        >
          Nombres
        </Label>
        <Col sm={10}>
          <Input
            id="names"
            name="names"
            placeholder="Ingrese los nombres del usuario"
            type="text"
            value={values.names}
            invalid={errors.names && touched.names}
            onChange={handleChange}
          />
          <FormFeedback>{errors.names}</FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="lastNames"
          sm={2}
        >
          Apellidos
        </Label>
        <Col sm={10}>
          <Input
            id="lastNames"
            name="lastNames"
            placeholder="Ingrese los apellidos del usuario"
            type="text"
            value={values.lastNames}
            invalid={errors.lastNames && touched.lastNames}
            onChange={handleChange}
          />
          <FormFeedback>{errors.lastNames}</FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="email"
          sm={2}
        >
          Correo
        </Label>
        <Col sm={10}>
          <Input
            id="email"
            name="email"
            placeholder="Ingrese el correo del usuario"
            type="email"
            value={values.email}
            invalid={errors.email && touched.email}
            onChange={handleChange}
          />
          <FormFeedback>{errors.email}</FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="address"
          sm={2}
        >
          Dirección
        </Label>
        <Col sm={10}>
          <Input
            id="address"
            name="address"
            placeholder="Ingrese la dirección del usuario"
            type="text"
            value={values.address}
            invalid={errors.address && touched.address}
            onChange={handleChange}
          />
          <FormFeedback>{errors.address}</FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="username"
          sm={2}
        >
          Nombre de usuario
        </Label>
        <Col sm={10}>
          <Input
            id="username"
            name="username"
            placeholder="Ingrese el nombre de usuario"
            type="text"
            value={values.username}
            invalid={errors.username && touched.username}
            onChange={handleChange}
          />
          <FormFeedback>{errors.username}</FormFeedback>
        </Col>
      </FormGroup>
      <Button
        block
        type="submit"
        color="dark"
        disabled={loading}
      >
        Guardar
      </Button>
    </Form>
  );
};
export default EditUserForm;
