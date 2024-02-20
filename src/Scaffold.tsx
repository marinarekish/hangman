import { FC } from "react";
import styled from "styled-components";
// import { BASE_HORIZ, BASE_VERT, BOTTOM, SMALL_VERT } from "./Constants_Scaffold";

const Container = styled.div`
  position: relative;
`;

const BASE_VERT = styled.div`
  height: 10px;
  width: 200px;
  background-color: black;
  margin-left: 120px;
`;

const BASE_HORIZ = styled.div`
  height: 400px;
  width: 10px;
  background-color: black;
  margin-left: 120px;
`;

const BOTTOM = styled.div`
  height: 10px;
  width: 250px;
  background-color: black;
`;

const SMALL_VERT = styled.div`
  height: 50px;
  width: 10px;
  background-color: black;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Scaffold: FC = () => {
  return (
    <Container>
      <BASE_HORIZ />
      <BASE_VERT />
      <BOTTOM />
      <SMALL_VERT />
    </Container>
  );
};
