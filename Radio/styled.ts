import styled from 'styled-components';
import { RadioProps } from './props';

export const StyledRadio = styled.input<RadioProps>`
  color: ${(props) => `rgba(${Object.values(props.color)})`};
  padding: ${({ padding }) => `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`};
  margin: ${({ margin }) => `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
`;
