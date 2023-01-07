import { Field, Formik, Form, ErrorMessage } from 'formik';
import { useRef } from 'react';
import * as Yup from 'yup';
import './AddTask.css';

export default function AddTask({ create }) {
  function handleOnSubmit(e) {
    console.log(e.title);
    console.log(e.body);
    let { title, body } = e;
    create({ title, body });
  }

  const dataForm = {
    title: '',
    body: '',
  };

  const schema = Yup.object().shape({
    title: Yup.string()
      .min(5, 'el titulo debe contener como mínimo 5 letras')
      .max(30, 'el titulo de la tarea no debe ser mayor de 30 palabras')
      .required('el titulo es requerido'),
    body: Yup.string()
      .min(5, 'la descripción de la tarea debe tener como mínimo 5 letras')
      .max(100, 'la descripción de la tarea debe tenet como máximo 100 letras')
      .required('la descripción es requerida'),
  });

  return (
    <div>
      <Formik
        initialValues={dataForm}
        validationSchema={schema}
        onSubmit={handleOnSubmit}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form className="formTask">
            <Field
              type="text"
              name="title"
              placeholder="titulo"
              className="formTask__input"
            />
            <Field
              type="text"
              name="body"
              placeholder="descripción"
              className="formTask__input"
            />
            <button type="submit">añadir tarea</button>
            <span className="formTask__messageError">
              {errors.title && touched.title && <ErrorMessage name="title" />}
            </span>
            <span className="formTask__messageError">
              {errors.body && errors.body && <ErrorMessage name="body" />}
            </span>
          </Form>
        )}
      </Formik>
    </div>
  );
}
