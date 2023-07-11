export type RadioProps = Partial<{
  width: string;
  height: string;
  background: Record<'r' | 'g' | 'b' | 'a', string>;
  color: Record<'r' | 'g' | 'b' | 'a', string>;
  padding: any[];
  margin: any[];
  inputOptions: {
    required?: boolean;
    readonly?: boolean;
  };
  placeholder: string;
  className: string;
  styledClassNames: Record<string, any>;
}>;

export const defaultProps: RadioProps = {
  background: { r: '255', g: '255', b: '255', a: '0.5' },
  color: { r: '0', g: '0', b: '0', a: '1' },
  padding: ['10', '10', '10', '10'],
  margin: ['10', '0', '10', '0'],
  width: '100%',
  height: 'auto',
  styledClassNames: {},
  inputOptions: {
    required: true,
    readonly: false,
  },
};
