import styled from 'styled-components';

export const FQBtn = styled.button`
  background-color: ${(props) => props.theme.purple};
  padding: 1em;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25em;
  font-size: 1.5em;
  color: ${(props) => props.theme.pureWhite};
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
