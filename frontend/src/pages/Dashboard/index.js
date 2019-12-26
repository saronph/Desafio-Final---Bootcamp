import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { regStudentRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Enter a valid e-mail')
    .required('Email is required'),
  age: Yup.number()
    .required()
    .typeError('Age is required'),
  weight: Yup.number()
    .required()
    .typeError('Weight is required'),
  height: Yup.number()
    .required()
    .typeError('Height is required'),
});

export default function Dashboard() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, age, weight, height }) {
    dispatch(regStudentRequest(name, email, age, weight, height));
  }

  return (
    <>
      <ul>
        <strong>Student Registration</strong>
      </ul>
      <ul>
        <Form schema={schema} onSubmit={handleSubmit}>
          <strong>FULL NAME</strong>
          <Input name="name" type="string" placeholder="Saron Medeiros" />
          <strong>E-MAIL ADDRESS</strong>
          <Input name="email" type="email" placeholder="example@email.com" />
          <strong>AGE</strong>
          <Input name="age" type="number" placeholder="ex: 30" />
          <strong>WEIGHT (in kg)</strong>
          <Input name="weight" type="decimal" placeholder="ex: 85.5" />
          <strong>HEIGHT (in cm)</strong>
          <Input name="height" type="decimal" placeholder="ex: 178.5" />

          <button type="submit">Save</button>
        </Form>
      </ul>
    </>
  );
}
