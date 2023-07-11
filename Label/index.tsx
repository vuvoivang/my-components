import React from 'react';
import { LabelProps } from './props';
import cx from 'classnames';
import { defaultProps } from './props';

export const Label = ({
  fontSize,
  textAlign,
  fontWeight,
  fontStyle,
  color,
  shadow,
  text,
  margin,
  styledClassNames,
  className,
}: LabelProps) => {
  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();
  return (
    <label
      className={cx([className, styledClassNamesValues])}
      style={{
        width: '100%',
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        color: `rgba(${Object.values(color)})`,
        fontSize: `${fontSize}px`,
        textShadow: `0px 0px 2px rgba(0,0,0,${(shadow || 0) / 100})`,
        fontWeight,
        fontStyle,
        textAlign: textAlign as any,
      }}
    >
      {text?.type === "dynamic-data" ? text?.value : text}
    </label>
  );
};

Label.defaultProps = defaultProps;
