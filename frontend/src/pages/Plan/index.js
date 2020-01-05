import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Content, Table } from './styles';

import {
  ContainerForm,
  MyForm,
  TitleWrapper,
} from '~/styles/components';

export default class PlanList extends Component {
  state = {
    plans: [],
  };

  async componentDidMount() {
    const response = await api.get('plans');

    this.setState({ plans: response.data })
  }

  render() {
    const {plans } = this.state;

  return (
    <ContainerForm>
      <TitleWrapper>
        <strong>Plans management</strong>
        <div>
          <button type="button" onClick={() => history.push('/planRegister')}>Register</button>
        </div>
      </TitleWrapper>

      <Content>
        <Table>
          <thead>
            <tr>
              <th>
                <strong>NAME</strong>
              </th>
              <th>
                <strong>PRICE (PER MONTH)</strong>
              </th>
              <th>
                <strong>DURATION (IN MONTHS)</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td>
                  <span>{plan.title}</span>
                </td>
                <td>
                  <span>{plan.price}</span>
                </td>
                <td>
                  <span>{plan.duration}</span>
                </td>
                <td>
                  <div>
                    <Link>editar</Link>
                    <button type="button">apagar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </ContainerForm>
  );
}}
