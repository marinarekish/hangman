const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

export const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

// import styled from "styled-components";

// const HEAD = styled.div`
//   width: 50px;
//   height: 50px;
//   border: 10px solid black;
//   border-radius: 100%;
//   position: absolute;
//   top: 50px;
//   right: -30px;
// `;

// const BODY = styled.div`
//   width: 10px;
//   height: 100px;
//   background-color: black;
//   position: absolute;
//   top: 120px;
//   right: 0px;
// `;

// const RIGHT_ARM = styled.div`
//   width: 100px;
//   height: 10px;
//   background-color: black;
//   position: absolute;
//   top: 150px;
//   right: -100px;
//   rotate: -30deg;
//   transform-origin: left bottom;
// `;

// const LEFT_ARM = styled.div`
//   width: 100px;
//   height: 10px;
//   background-color: black;
//   position: absolute;
//   top: 150px;
//   right: 10px;
//   rotate: 30deg;
//   transform-origin: right bottom;
// `;

// const RIGHT_LEG = styled.div`
//   width: 100px;
//   height: 10px;
//   background-color: black;
//   position: absolute;
//   top: 210px;
//   right: -90px;
//   rotate: 60deg;
//   transform-origin: left bottom;
// `;

// const LEFT_LEG = styled.div`
//   width: 100px;
//   height: 10px;
//   background-color: black;
//   position: absolute;
//   top: 210px;
//   right: 0;
//   rotate: -60deg;
//   transform-origin: right bottom;
// `;
