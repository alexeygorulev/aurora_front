import { MediaSizes } from 'components/_themes/dark/types';
import { StyledLoaderComponentProps, StyledLoaderInnerComponentProps } from './types';

export const getSizeLoader = (props: StyledLoaderComponentProps, mediaSize: MediaSizes): string => {
  const { theme, sSize } = props;
  return theme.loader.size[mediaSize][sSize];
};

export const getColorLoader = (props: StyledLoaderInnerComponentProps): string => {
  const { theme, sLoaderType } = props;
  return theme.loader.colors[sLoaderType];
};
