export type TextProps = Partial<{
  fontSize: string;
  fontFamily: string;
  textAlign: string;
  fontWeight: string;
  fontStyle: string;
  color: Record<'r' | 'g' | 'b' | 'a', string>;
  shadow: number;
  text: any;
  margin: string[];
  styledClassNames: Record<string, any>;
  className: string;
  tagName: string;
  nestedPropKey?: string;
}>;

export const defaultProps: TextProps = {
  fontSize: '15',
  textAlign: 'left',
  fontWeight: '500',
  color: { r: '92', g: '90', b: '90', a: '1' },
  margin: ['0', '0', '0', '0'],
  shadow: 0,
  text: 'Text',
  styledClassNames: {},
  tagName: 'h3',
  fontStyle: 'normal',
};
