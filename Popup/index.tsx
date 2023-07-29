import cx from 'classnames';
import React from 'react';
import { PopupProps, defaultProps } from './props';
import { StyledModal, StyledModalContent } from './styled';
import { Text } from '../Text';
import { Button } from '../Button';
import { Container } from '../Container';

export const Popup = (props: PopupProps) => {
  const {
    id,
    styledClassNames,
    className,
    titleComponent,
    contentComponent,
    firstButtonComponent,
    secondButtonComponent,
    containerActionsComponent,
    events,
    ...otherProps
  } = props;
  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();

  const handleClose = () => {
    if (document.getElementById(id)) document.getElementById(id).style.display = 'none';
  };
  const { showPopup } = events;

  return (
    <StyledModal id={id} className={cx(['modal', styledClassNamesValues])}
      style={{
        display: showPopup ? 'block' : 'none',
      }}>
      <StyledModalContent className='modal-content'>
        <Text {...titleComponent} />
        <Text {...contentComponent} />
        <Container {...containerActionsComponent}>
          <Button {...firstButtonComponent} onClick={handleClose} />
          <Button {...secondButtonComponent} onClick={handleClose} />
        </Container>
      </StyledModalContent>
    </StyledModal>
  );
};

Popup.defaultProps = defaultProps;
