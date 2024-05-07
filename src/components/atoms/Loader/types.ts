import { LoaderSize, LoaderTypes } from 'components/_themes/dark/types';
import { Theme } from 'components/_themes/types';

export type LoaderComponentProps = Readonly<{
  size?: LoaderSize;
  type?: LoaderTypes;
  isCentred?: boolean;
  isShowLoadingWords?: boolean;
}>;

export type LoaderTypeItem = 'one' | 'two' | 'three';

export type StyledLoaderComponentProps = Readonly<{
  theme: Theme;
  sSize: LoaderSize;
  sLoaderType: LoaderTypes;
  sCentred: boolean;
}>;

export type StyledLoaderInnerComponentProps = Readonly<{
  theme: Theme;
  sInnerType: LoaderTypeItem;
  sLoaderType: LoaderTypes;
}>;
