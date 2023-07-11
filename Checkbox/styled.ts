import styled from 'styled-components';
import { CheckboxProps } from './props';

export const StyledCheckbox = styled.input<CheckboxProps>`
  border: 2px solid transparent;
  border-color: ${(props) => `rgba(${Object.values(props.borderColor)})`};
  color: ${(props) => `rgba(${Object.values(props.color)})`};
  padding: ${({ padding }) => `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`};
  margin: ${({ margin }) => `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  &:focus {
    border-color: ${(props) => `rgba(${Object.values(props.borderColorFocus)})`};
    outline: none;
  }
`;
