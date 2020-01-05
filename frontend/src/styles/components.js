import styled from 'styled-components';
import { darken } from 'polished';
import { Form } from '@rocketseat/unform';

export const Container = styled.div`
  max-width: ${props => (props.large ? '1440px' : '1200px')};
  width: ${props => (props.small ? '700px' : 'auto')};
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-radius: 4px;
  background: #fff;
  max-width: ${props => (props.large ? '1440px' : '1200px')};
  width: ${props => (props.small ? '700px' : 'auto')};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px auto 30px auto;

  button {
    align-items: absolute;
    height: 40px;
    width: 70px;
    background: #a9a9a9;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 18px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#A9A9A9')};
    }
  }

  strong {
    font-size: 24px;
    color: #444444;
  }

  span {
    margin-right: 15px;
    text-transform: uppercase;
  }
  svg {
    position: absolute;
    margin-top: -2px;
    margin-left: -8px;
  }
  input {
    width: 237px;
    height: 36px;
    border-radius: 4px;
    border: solid 1px #ddd;
    background-color: #fff;
    margin-left: 10px;
    padding-left: 15px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  tr + tr {
    border-top: 1px solid #eee;
  }
  tr {
    color: #444;
    font-size: 16px;
  }
  thead th {
    text-align: left;
    padding: 40px 40px 0 40px;
    text-transform: uppercase;
  }
  tbody td {
    padding: 10px 20px 10px 40px;
  }
  div {
    display: flex;
    align-items: center;
    width: 100px;
    padding: 10px;
  }
  span {
    margin-left: 10px;
  }
`;

export const ContainerForm = styled.div`
  width: 900px;
  margin: 0 auto;
`;

export const MyForm = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 24px;
  > label {
    margin-left: 5px;
    align-self: flex-start;
  }
  label {
    padding-top: 8px;
    padding-bottom: 8px;
    font-weight: bold;
    text-transform: uppercase;
  }
  input:nth-of-type(1) {
    margin-bottom: 15px;
  }
  input {
    padding: 0.75em;
    width: 840px;
    height: 45px;
    border-radius: 4px;
    border: solid 1px #ddd;
    margin-bottom: 10px;
  }
  span {
    color: #fb6f91;
    font-weight: bold;
  }

  button {
    display: block;
    align-items: left;
    height: 55px;
    width: 100px;
    background: #ee4f64;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 18px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#ee4f64')};
    }
  }
`;

export const EmptyContainer = styled.div`
  background-color: #fff;
  h2 {
    padding: 20px;
    font-size: 16px;
    text-align: center;
  }
`;
