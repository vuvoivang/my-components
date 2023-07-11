import cx from 'classnames';
import React from 'react';

import { StyledRadio } from './styled';

import { defaultProps } from './props';

export const Radio = (props) => {
  const { styledClassNames, className, inputOptions, ...otherProps } = props;
  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();
  const { required, readonly } = inputOptions;
  return (
    <StyledRadio
      className={cx([
        className,
        'input rounded w-full px-4 py-2 mt-4',
       
        styledClassNamesValues,
      ])}
      type='radio'
      required={required}
      readOnly={readonly}
      checked={false}
      {...otherProps}
    />
  );
};

Radio.defaultProps = defaultProps;
