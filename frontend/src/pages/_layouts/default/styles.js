import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #f5f5f5;
`;

export const Content = styled.div`
  align-self: center;
  width: 100%;
  max-width: 900px;
  background: #ffffff;

  form {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    flex-direction: column;
    margin-top: 30px;
    height: 100%;

    input {
      background: #ffffff;
      border-radius: 4px;
      border-width: 1px;
      border-style: solid;
      border-color: #f5f5f5;
      height: 44px;
      padding: 0 15px;
      color: #444444;
      margin: 0 0 10px;

      &::placeholder {
        color: #a9a9a9;
      }
    }

    button {
      margin: 5px 0 0;
      height: 55px;
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
