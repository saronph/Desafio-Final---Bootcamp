import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import history from '~/services/history';

import {
  Content,
  ContainerForm,
  MyForm,
  TitleWrapper,
} from '~/styles/components';

import { regPlanRequest } from '~/store/modules/plan/actions';

const schema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  duration: Yup.number()
    .required()
    .typeError('Number of duration is required'),
  price: Yup.number()
    .required()
    .typeError('Price is required'),
});

export default function PlanRegister() {
  const dispatch = useDispatch();

  function handleSubmit({ title, duration, price }) {
    dispatch(regPlanRequest(title, duration, price));
  }

  return (
    <ContainerForm>
      <>
        <TitleWrapper>
          <strong>Plan create</strong>
          <button type="button" onClick={() => history.push('/studentEdit')}>
            Edit
          </button>
          <button type="button" onClick={() => history.push('/plan')}>
            List
          </button>
        </TitleWrapper>
        <Content>
          <MyForm schema={schema} onSubmit={handleSubmit}>
            <ul>
              <strong>PLAN TITLE</strong>
              <Input name="title" type="string" placeholder="Gold" />
              <strong>DURATION (IN MONTHS)</strong>
              <Input name="duration" type="number" placeholder="3" />
              <strong>PRICE (PER MONTH)</strong>
              <Input name="price" type="number" placeholder="ex: 150.00" />

              <button type="submit">Save</button>
            </ul>
          </MyForm>
        </Content>
      </>
    </ContainerForm>
  );
}
