import { StyledInputElementProps, StyledInputLabelProps } from './types';

export const getCaretPosition = (value: string, beforeCaretPosValue: string, firstPosition: number) => {
  let pos = 0;
  let conj = 0;
  if (beforeCaretPosValue) {
    value.split('').forEach((symbol) => {
      pos += 1;
      if (symbol === beforeCaretPosValue[conj]) {
        conj += 1;
        if (conj === beforeCaretPosValue.length) return true;
      }
      return false;
    });
  }
  if (firstPosition && pos < firstPosition) return firstPosition;
  return pos;
};

export function getInputLabelColor(props: StyledInputLabelProps): string {
  const theme = props.theme.input;
  if (props.sDisabled) return theme.label.colors.disabled;
  if (props.sError) return theme.label.colors.error;
  if (props.sFocused) return theme.label.colors.focused;
  return theme.label.colors.normal;
}

export function getInputFontFamily(props: StyledInputLabelProps): string {
  const theme = props.theme.input.label;
  return theme.fontFamily;
}

export function getInputLabelFontWeight(props: StyledInputLabelProps): number {
  const theme = props.theme.input;
  if (props.sSmall) return theme.label.fontWeight.small;
  return theme.label.fontWeight.normal;
}

export function getInputLabelLeft(props: StyledInputLabelProps, mediaSize: string) {
  const theme = props.theme.input;
  if (props.sLeftIcon) return `${theme.label.position[mediaSize][props.sSize].left + 26}px`;
  return `${theme.label.position[mediaSize][props.sSize].left}px`;
}

export function getInputLabelRight(props: StyledInputLabelProps, mediaSize: string) {
  const theme = props.theme.input;
  return `${theme.label.position[mediaSize][props.sSize].right}px`;
}

export function getInputLabelTop(props: StyledInputLabelProps, mediaSize: string) {
  const theme = props.theme.input;
  if (props.sSmall) return `${theme.label.position[mediaSize][props.sSize].top}px`;
  return '50%';
}

export function getInputLabelFontSize(props: StyledInputLabelProps, mediaSize: string) {
  const theme = props.theme.input;
  if (props.sSmall) return `${theme.label.fontSize.small[mediaSize][props.sSize]}px`;
  return `${theme.label.fontSize.normal[mediaSize][props.sSize]}px`;
}

export function getInputLabelLineHeight(props: StyledInputLabelProps, mediaSize: string) {
  const theme = props.theme.input;
  if (props.sSmall) return `${theme.label.lineHeight.small[mediaSize][props.sSize]}px`;
  return `${theme.label.lineHeight.normal[mediaSize][props.sSize]}px`;
}

// INPUT ELEMENT

export function getInputBorderRadius(props: StyledInputElementProps): number {
  const theme = props.theme.input;
  return theme.inputRadius;
}

export function getInputElementFontWeight(props: StyledInputElementProps) {
  const theme = props.theme.input;
  return theme.element.fontWeight[props.sSize];
}

export function getInputElementFontSize(props: StyledInputElementProps, mediaSize: string) {
  const theme = props.theme.input;
  return `${theme.element.fontSize[mediaSize][props.sSize]}px`;
}

export function getInputElementColor(props: StyledInputElementProps) {
  const theme = props.theme.input;
  if (props.sDisabled) return theme.element.colors.disabled;
  if (props.sError) return theme.element.colors.error;
  if (props.sFocused) return theme.element.colors.focused;
  return theme.element.colors.normal;
}

export function getInputElementBackgroundColor(props: StyledInputElementProps) {
  const theme = props.theme.input;
  if (props.sDisabled) return theme.element.backgroundColors.disabled;
  if (props.sError) return theme.element.backgroundColors.error;
  if (props.sFocused) return theme.element.backgroundColors.focused;
  return theme.element.backgroundColors.normal;
}

export function getInputElementBorderColor(props: StyledInputElementProps) {
  const theme = props.theme.input;
  if (props.sDisabled) return theme.element.borderColors.disabled;
  if (props.sError) return theme.element.borderColors.error;
  if (props.sFocused) return theme.element.borderColors.focused;
  return theme.element.borderColors.normal;
}

export function getInputElementHeight(props: StyledInputLabelProps, mediaSize: string) {
  const theme = props.theme.input;
  return `${theme.element.height[mediaSize][props.sSize]}px`;
}

export function getInputElementLineHeight(props: StyledInputLabelProps, mediaSize: string) {
  const theme = props.theme.input;
  return `${theme.element.lineHeight[mediaSize][props.sSize]}px`;
}

export function getInputElementPadding(props: StyledInputElementProps, mediaSize: string) {
  const theme = props.theme.input;
  const vPadding = props.sWithLabel
    ? theme.element.padding[mediaSize].vertical.withLabel[props.sSize]
    : theme.element.padding[mediaSize].vertical.normal[props.sSize];
  const hPadding = props.sWithIcon
    ? theme.element.padding[mediaSize].horizontal.withIcon[props.sSize]
    : theme.element.padding[mediaSize].horizontal.normal[props.sSize];
  return `${vPadding[0]}px ${hPadding[1]}px ${vPadding[1]}px ${hPadding[0]}px`;
}
