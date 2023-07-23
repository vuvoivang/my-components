export type ContainerProps = Partial<{
  background: Record<'r' | 'g' | 'b' | 'a', string>;
  color: Record<'r' | 'g' | 'b' | 'a', string>;
  flexDirection: string;
  alignItems: string;
  justifyContent: string;
  fillSpace: string;
  width: string;
  height: string;
  maxWidth: string;
  minHeight: string;
  padding: string[];
  margin: string[];
  shadow: number;
  children: React.ReactNode;
  borderWidth: string;
  borderStyle: string;
  borderRadius: number;
  borderColor: Record<'r' | 'g' | 'b' | 'a', string>;
  styledClassNames?: Record<string, string>;
  className?: string;
}>;
export const defaultProps: ContainerProps = {
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  fillSpace: 'no',
  padding: ['0', '0', '0', '0'],
  margin: ['0', '0', '0', '0'],
  background: { r: '255', g: '255', b: '255', a: '1' },
  color: { r: '0', g: '0', b: '0', a: '1' },
  shadow: 0,
  borderWidth: '0',
  borderStyle: 'none',
  borderRadius: 0,
  borderColor: { r: '217', g: '227', b: '234', a: '1' },
  width: '100%',
  height: 'auto',
  styledClassNames: {},
  maxWidth: '1280px',
  minHeight: '0',
};
