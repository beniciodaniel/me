import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
`;

export const Text = styled.main`
  position: absolute;
  top: 45%;
  left: 60%;

  color: #000;
`;

export const Background = styled.div`
  flex: 1;
  background: url("../../cat_meme.png") no-repeat top center;
  background-size: cover;
  filter: opacity(0.15);
`;
