import Heading from './Heading';
import Paragraph from './Paragraph';
import Span from './Span';
import Block from './Block';
import { refs as typographyRefs } from 'components/_themes/dark/_typography';
import { HeadingComponentProps } from './Heading/types';

const H1 = (props: HeadingComponentProps) => <Heading size={typographyRefs.sizes.xl} {...props} />;
const H2 = (props: HeadingComponentProps) => <Heading size={typographyRefs.sizes.l} {...props} />;
const H3 = (props: HeadingComponentProps) => <Heading size={typographyRefs.sizes.m} {...props} />;
const H4 = (props: HeadingComponentProps) => <Heading size={typographyRefs.sizes.s} {...props} />;
const H5 = (props: HeadingComponentProps) => <Heading size={typographyRefs.sizes.xs} {...props} />;

const Typography = {
  Heading,
  Block,
  H1,
  H2,
  H3,
  H4,
  H5,
  Paragraph,
  P: Paragraph,
  Span,
};

export default Typography;
