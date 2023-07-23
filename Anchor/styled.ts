import styled from 'styled-components';
import { AnchorProps } from './props';

export const StyledAnchor = styled.a<Partial<AnchorProps>>`
  background: ${(props) => (props.anchorStyle === 'full' ? `rgba(${Object.values(props.background)})` : 'transparent')};
  border-width: ${(props) => props?.borderWidth && `${props.borderWidth}px`};
  border-style: ${(props) => props?.borderStyle && `${props.borderStyle}`};
  border-color: ${(props) => props?.borderColor && `rgba(${Object.values(props.borderColor)})`};
  border-radius: ${(props) => props?.borderRadius && `${props.borderRadius}px`};
  padding: ${({ padding }) => `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`};
  margin: ${({ margin }) => `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
`;
