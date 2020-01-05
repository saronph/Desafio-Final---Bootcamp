import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    strong {
      font-size: 28px;
      padding-right: 10px;
    }

    div {
      display: flex;
      align-self: right;
      align-items: right;
    }

    button {
      display: block;
      align-items: right;
      margin-left: 100px;
      height: 55px;
      width: 100px;
      background: #ee4f64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#ee4f64')};
      }
    }
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
    width: 80px;
    padding: 10px;
  }
  a {
    text-decoration: none;
    font-size: 15px;
  }
  button {
    font-size: 15px;
    border: 0;
    margin-left: 15px;
    color: #de3b3b;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-radius: 4px;
  background: #fff;
  max-width: 1200px;
`;
