import { createGlobalStyle, styled } from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
`;

export const ClockContainer = styled.div`
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #000000;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export const Time = styled.p`
  font-size: 24px;
  color: #333;
`;