import { MapIcons } from './_mapIcons';
import { IconProps } from './types';

export default function Icon(props: IconProps) {
  return MapIcons[props.type](props);
}
