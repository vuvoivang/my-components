import cx from 'classnames';
import React from 'react';

import { StyledCheckbox } from './styled';

import { defaultProps } from './props';

export const Checkbox = (props) => {
  const { styledClassNames, className, inputOptions, ...otherProps } = props;
  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();
  const { required, readonly } = inputOptions;
  return (
    <StyledCheckbox
      className={cx([
        className,
        'input rounded w-full px-4 py-2 mt-4',
       
        styledClassNamesValues,
      ])}
      type='checkbox'
      checked={false}
      required={required}
      readOnly={readonly}
      {...otherProps}
    />
  );
};

Checkbox.defaultProps = defaultProps;
