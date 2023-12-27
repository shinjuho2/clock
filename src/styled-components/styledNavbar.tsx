import styled from 'styled-components';

export const lightTheme = {
    backgroundColor: '#333',
    textColor: 'white',
};

export const darkTheme = {
    backgroundColor: '#111',
    textColor: 'lightgray',
};

export const NavBarContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 10px;
  color: ${(props) => props.theme.textColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavItems = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: ${(props) => props.theme.textColor};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const DarkModeToggle = styled.button`
background-color: transparent;
color: ${(props) => props.theme.textColor};
border: none;
cursor: pointer;
`;

export const Button = styled.label`
  color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
`;
