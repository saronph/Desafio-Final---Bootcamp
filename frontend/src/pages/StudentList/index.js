import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '~/services/api';
import history from '~/services/history';

import { Content, Table } from './styles';

import {
  ContainerForm,
  TitleWrapper,
} from '~/styles/components';

export default class StudentList extends Component {
  state = {
    students: [],
  };

  async componentDidMount() {
    const response = await api.get('students');

    this.setState({ students: response.data })
  }

  render() {
    const {students } = this.state;

  return (
    <ContainerForm>
      <TitleWrapper>
        <strong>Student management</strong>
        <div>
          <button type="button" onClick={() => history.push('/dashboard')}>Register</button>
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
                <strong>E-mail</strong>
              </th>
              <th>
                <strong>AGE</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>
                  <span>{student.name}</span>
                </td>
                <td>
                  <span>{student.email}</span>
                </td>
                <td>
                  <span>{student.age}</span>
                </td>
                <td>
                  <div>
                    <Link to={`/students/${student.id}`}>editar</Link>
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
