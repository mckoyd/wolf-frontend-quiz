import styled from 'styled-components';

export const ThemeToggleContainer = styled.div`
  display: flex;

  .toggle-input {
    display: none;
  }

  .toggle-label {
    display: flex;
    align-items: center;
    width: 3em;
    height: 24px;
    text-indent: -150%;
    clip: rect(0 0 0 0);
    color: transparent;
    user-select: none;
  }

  .toggle-label::before,
  .toggle-label::after {
    content: '';
    display: block;
    position: absolute;
    cursor: pointer;
  }

  .toggle-label::before {
    width: inherit;
    height: inherit;
    background-color: ${(props) => props.theme.purple};
    border-radius: 9999em;
    -webkit-transition: background-color 0.25s ease;
    transition: background-color 0.25s ease;
  }

  .toggle-label::after {
    margin: 0 0.3em;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
    -webkit-transition: left 0.25s ease;
    transition: left 0.25s ease;
  }

  .toggle-input:checked + .toggle-label::before {
    background-color: ${(props) => props.theme.purple};
  }

  .toggle-input:checked + .toggle-label::after {
    left: 18.25em;
  }
`;
