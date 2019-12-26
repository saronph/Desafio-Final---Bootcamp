import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/headerlogo.png';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />
          <Link to="/dashboard">STUDENTS</Link>
          <Link to="/plan">PLANS</Link>
          <Link to="/registration">REGISTRATIONS</Link>
          <Link to="/helpOrders">HELP ORDERS</Link>
        </nav>

        <aside>
          <div>
            <strong>Administrador</strong>
            <Link to="/">Log Out</Link>
          </div>
        </aside>
      </Content>
    </Container>
  );
}
