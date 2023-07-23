import { Text } from '../Text';

type EventKeys = 'pageNavigate' | 'absoluteUrlNavigate' | 'href' | 'clickType';

export type AnchorProps = Partial<{
  text: string;
  fontFamily: string;
  fontSize: string;
  textAlign: string;
  fontWeight: string;
  width: string;
  height: string;
  background: Record<'r' | 'g' | 'b' | 'a', string>;
  color: Record<'r' | 'g' | 'b' | 'a', string>;
  anchorStyle: string;
  borderWidth: string;
  borderStyle: string;
  borderRadius: string;
  borderColor: Record<'r' | 'g' | 'b' | 'a', string>;
  padding: any[];
  margin: any[];
  textComponent: any;
  styledClassNames: Record<string, any>;
  className: string;
  events: Record<EventKeys, string>;
  onClick: any;
  nestedPropKey?: string;
}>;

export const defaultProps: AnchorProps = {
  text: 'Click',
  fontSize: '14',
  textAlign: 'center',
  fontWeight: '500',
  background: { r: '255', g: '255', b: '255', a: '0.5' },
  color: { r: '92', g: '90', b: '90', a: '1' },
  anchorStyle: 'full',
  borderWidth: '0',
  borderStyle: 'solid',
  borderRadius: '4',
  borderColor: { r: '217', g: '227', b: '234', a: '1' },
  padding: ['10', '10', '10', '10'],
  margin: ['5', '0', '5', '0'],
  textComponent: {
    ...Text.defaultProps,
  },
  width: '100%',
  height: 'auto',
  styledClassNames: {},
  events: {
    pageNavigate: '',
    absoluteUrlNavigate: '',
    href: '',
    clickType: 'href',
  },
};
