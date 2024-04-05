import { refs as typographyRefs, styles as typographyStyles } from './_typography';
import { colors, gradients } from './_colors';

export const components = {
  general: 'block',
};

export const refs = {
  sizes: typographyRefs.sizes,
  margin: typographyRefs.sizes,
  padding: typographyRefs.sizes,
  textAlign: typographyRefs.textAlign,
  colors: typographyRefs.colors,
};

export const styles = {
  fontFamily: typographyStyles.paragraphFontFamily,
  fontWeight: typographyStyles.paragraphFontWeight,
  lineHeight: typographyStyles.paragraphLineHeight,
  blockMargin: typographyStyles.blockMargin,
  blockPadding: typographyStyles.blockPadding,
  blockPaddingUnit: typographyStyles.blockPaddingUnit,
  colors: typographyStyles.colors,
  fontSizes: typographyStyles.headingSizes,
  display: typographyStyles.display,

  backgrounds: {
    background_main: gradients.background_main,
    background_secondary: colors.primary20,
  },
};
