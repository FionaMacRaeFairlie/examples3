import React from "react";
import styled from "styled-components";

const Box = styled.div`
  margin-right: 20%;
  margin-left: 20%;
  margin-top: 2%;
  border: 1px rgb(253,197,213) solid;
  background-color: rgba(253,197,213,0.28);
  border-radius: 37px 37px 37px 37px;
-webkit-border-radius: 37px 37px 37px 37px;
-moz-border-radius: 37px 37px 37px 37px;
`;

const Content = styled.p`
  font-size: 16px;
  text-align: center;
`;

export default function StyledBox({ children }) {
  return (
    <Box>
      <Content> Styling React Components {children} </Content>
    </Box>
  );
}
