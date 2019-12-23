import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4f64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: 100%;
  max-height: 500px;
  width: 100%;
  max-width: 400px;
  background: #eceef1;
  text-align: center;
  border-radius: 4px;

  ul {
    align-items: center;

    img {
      padding-top: 50px;
    }

    strong {
      text-align: left;
      padding-bottom: 8px;
      font-size: 14px;
      color: #444444;
    }

    form {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      padding: 30px;

      input {
        background: #eceef1;
        border-radius: 4px;
        height: 44px;
        color: #444444;
        border-width: 1px;
        border-style: solid;
        border-color: #a9a9a9;
        padding: 0 15px;
        margin: 0 0 10px;
      }

      span {
        color: #f64c75;
        align-self: flex-start;
        margin: 0 0 8px;
        font-weight: bold;
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
  }
`;
