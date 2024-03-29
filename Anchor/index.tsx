import cx from 'classnames';
import React from 'react';
import { CLICK_TYPE } from '../constant';
import { Text } from '../Text';
import { AnchorProps, defaultProps } from './props';

import { StyledAnchor } from './styled';
export const Anchor = (props: AnchorProps) => {
  const {
    text,
    textComponent,
    color,
    styledClassNames,
    fontSize,
    fontWeight,
    fontFamily,
    textAlign,
    className,
    events,
    ...otherProps
  } = props;

  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();

  const { pageNavigate, absoluteUrlNavigate, href, clickType } = events;
  const handleNavigate = () => {
    if (isUsedHref) return;
    if (pageNavigate || absoluteUrlNavigate) {
      const desUrl = pageNavigate || absoluteUrlNavigate;
      window.location.href = desUrl;
    }
  };

  const mapClickEvent = {
    [CLICK_TYPE.NAVIGATE]: handleNavigate,
  };

  const isUsedHref = clickType === CLICK_TYPE.HREF;

  return (
    <StyledAnchor
      className={cx([
        className,
        'anchor w-full px-4 py-2 mt-4 cursor-pointer',
        {
          'shadow-lg': props.anchorStyle === 'full',
        },
        styledClassNamesValues,
      ])}
      href={isUsedHref ? '#' + href : undefined}
      onClick={!isUsedHref && mapClickEvent[clickType]}
      {...otherProps}
    >
      <Text
        {...textComponent}
        text={text}
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
      />
    </StyledAnchor>
  );
};

Anchor.defaultProps = defaultProps;
