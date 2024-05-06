import { ButtonSizes, ButtonTypes, Display, Size } from 'components/_themes/dark/types';

export type TabsComponentProps = Readonly<{
  id: string;
  handleClick: (id: string) => void;
  type?: ButtonTypes;
  size?: ButtonSizes;
  fontSize?: Size;
  width?: number | string;
  rounded?: boolean;
  display?: Display;
  children: React.ReactNode | React.ReactNode[];
}>;
