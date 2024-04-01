import { Size } from 'components/_themes/dark/types';
import { gridRefs, gridSizes } from './_constants';
import GridItem from './_internal/GridItem';

export type GridComponentJustify = keyof typeof gridRefs.justify;
export type GridComponentAlignItems = keyof typeof gridRefs.alignItems;
export type GridComponentDirection = keyof typeof gridRefs.directions;
export type GridComponentSpacing = keyof typeof gridRefs.spacing;
export type GridComponentSizes = keyof typeof gridSizes;

export interface GridComponent extends React.FC<GridComponentProps> {
  Item: typeof GridItem;
}

export type GridComponentProps = Readonly<{
  justify?: GridComponentJustify;
  alignItems?: GridComponentAlignItems;
  direction?: GridComponentDirection;
  spacing?: GridComponentSpacing;
  noWrap?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type GridItemComponentProps = Readonly<{
  size?: GridComponentSizes;
  padding?: Size | null;
  tablet?: GridComponentSizes | null;
  desktop?: GridComponentSizes | null;
  grow?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type StyledGridProps = Readonly<{
  sNoWrap: boolean;
  sSpacing: Size;
  sJustify: GridComponentJustify;
  sAlignItems: GridComponentAlignItems;
  sDirection: GridComponentDirection;
}>;

export type StyledGridItemProps = Readonly<{
  sSize: GridComponentSizes;
  isGrow: boolean;
  sTablet: GridComponentSizes | null;
  sDesktop: GridComponentSizes | null;
  sPadding: Size | null;
}>;
