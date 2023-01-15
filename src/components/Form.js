import React from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const FormRegister = () =>{

    const registerSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, '*Debe tener mínimo 2 caracteres!')
            .required('*Este campo es requerido'),
        lastName: Yup.string()
            .min(2, '*Debe tener mínimo 2 caracteres!')
            .required('*Este campo es requerido'),
        email: Yup.string()
            .min(5, '*Debe tener mínimo 5 caracters!')
            .email('Correo inválido').required('*Este campo es requerido'),

        password: Yup.string()
            .min(8, '*Debe tener mínimo 8 caracteres')
            .required('*Este campo es requerido')
            .oneOf([Yup.ref('confirmPassword'), null], '*Ambas contraseñas deben coincidir'),
        confirmPassword: Yup.string()
            .min(8, '*Debe tener mínimo 8 caracteres')
            .oneOf([Yup.ref('password'), null], '*Ambas contraseñas deben coincidir')
            .required('*Este campo es requerido'),
/*        rut: Yup.string()
            .matches(/^[0-9]+[-|‐]{1}[0-9kK]{1}$/, '*Debe ingresar un rut con el siguiente formato 11111111-1')
            .required('*Este campo es requerido'), */
    });    
    
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    return(
        <div>
            <h1>Formulario de Registro</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="fisrtName">First Name: </label>
                            <Field name="firstName" />
                            {errors.firstName && touched.fisrtName ? (
                                <div className="error-msg">{errors.fullName}</div>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name: </label>
                            <Field name="lastName" />
                            {errors.lastName && touched.lastName ? (
                                <div className="error-msg">{errors.fullName}</div>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <Field name="email" type="email" />
                            {errors.email && touched.email ? <div className="error-msg">{errors.email}</div> : null}
                        </div>        
                        <div className="form-group">
                            <label htmlFor="password">Password: </label>
                            <Field name="password" type="password" />
                            {errors.password && touched.password ? (
                                <div className="error-msg">{errors.password}</div>
                            ) : null}
                        </div>        
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password: </label>
                            <Field name="confirmPassword" type="password" />
                            {errors.confirmPassword && touched.confirmPassword ? (
                                <div className="error-msg">{errors.confirmPassword}</div>
                            ) : null}
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )}
                </Formik>
        </div>
    );
}

export default FormRegister