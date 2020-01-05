import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    a {
      padding: 8px;
    }

    img {
      max-height: 64px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #444444;
    }
  }

  aside {
    display: flex;
    align-items: center;

    div {
      text-align: right;
      margin-right: 10px;

      strong {
        display: block;
        color: #333;
      }

      a {
        display: block;
        margin-top: 2px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
