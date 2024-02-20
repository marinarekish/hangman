const SMALL_VERT = (
  <div
    style={{
      height: "50px",
      width: "10px",
      background: "black",
      position: "absolute",
      top: 0,
      right: 0,
    }}
  />
);

const BASE_VERT = (
  <div
    style={{
      height: "10px",
      width: "200px",
      background: "black",
      marginLeft: "120px",
    }}
  />
);

const BASE_HORIZ = (
  <div
    style={{
      height: "400px",
      width: "10px",
      background: "black",
      marginLeft: "120px",
    }}
  />
);

const BOTTOM = (
  <div
    style={{
      height: "10px",
      width: "250px",
      background: "black",
    }}
  />
);

export const SCAFFOLD = (
  <div>
    {SMALL_VERT}
    {BASE_VERT}
    {BASE_HORIZ}
    {BOTTOM}
  </div>
);

// import styled from "styled-components";

// const BASE_VERT = styled.div`
//   height: 10px;
//   width: 200px;
//   background-color: black;
//   margin-left: 120px;
// `;

// const BASE_HORIZ = styled.div`
//   height: 400px;
//   width: 10px;
//   background-color: black;
//   margin-left: 120px;
// `;

// const BOTTOM = styled.div`
//   height: 10px;
//   width: 250px;
//   background-color: black;
// `;

// const SMALL_VERT = styled.div`
//   height: 50px;
//   width: 10px;
//   background-color: black;
//   position: absolute;
//   top: 0;
//   right: 0;
// `;
