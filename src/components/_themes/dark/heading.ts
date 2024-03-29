import { refs as typographyRefs, styles as typographyStyles } from './_typography';

export const components = {
  general: 'heading',
};

export const refs = {
  sizes: typographyRefs.fontSize,
  textAlign: typographyRefs.textAlign,
  colors: typographyRefs.colors,
};

export const styles = {
  fontFamily: typographyStyles.fontFamily.primary,
  fontWeight: typographyStyles.headingFontWeight,
  lineHeight: typographyStyles.headingLineHeight,
  fontSizes: typographyStyles.headingSizes,
  colors: typographyStyles.colors,
};
