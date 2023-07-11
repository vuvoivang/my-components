export type LabelProps = Partial<{
  fontSize: string;
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
  for: string;
}>;

export const defaultProps: LabelProps = {
  fontSize: '15',
  textAlign: 'left',
  fontWeight: '400',
  color: { r: '0', g: '0', b: '0', a: '1' },
  margin: ['0', '0', '0', '0'],
  shadow: 0,
  text: `I'm a label`,
  styledClassNames: {},
  tagName: 'h3',
  fontStyle: 'normal',
  for: "",
};
