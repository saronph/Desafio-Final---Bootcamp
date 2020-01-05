import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #f5f5f5;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 950px;
  max-height: 300px;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto;
  background: #ffffff;

  form {
    display: absolute;
    margin-top: 30px;
    padding: 20px;
    grid-column-gap: 0;
    justify-content: space-evenly;

    strong {
      position: absolute;
      padding-left: 10px;
    }

    input {
      background: #ffffff;
      border-radius: 4px;
      border-width: 1px;
      border-style: solid;
      border-color: #f5f5f5;
      height: 44px;
      color: #444444;
      padding: 20px;
      margin: 10px;
      margin-top: 10px;

      &::placeholder {
        color: #a9a9a9;
      }
    }

    button {
      margin: 5px 0 0;
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
