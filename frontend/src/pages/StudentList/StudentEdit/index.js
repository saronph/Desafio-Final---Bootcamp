import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

export default function StudentEdit() {
  return (
    <>
      <ul>
        <strong>Student Edit</strong>
        <Link to="/studentEdit">Edit</Link>
      </ul>
      <ul>
        <Form>
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
