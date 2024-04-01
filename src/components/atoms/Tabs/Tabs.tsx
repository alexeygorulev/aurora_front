import { StyledTabs } from './style';
import { TabsComponentProps } from './types';

const Tabs: React.FC<TabsComponentProps> = (props) => {
  const { children } = props;

  return <StyledTabs>{children}</StyledTabs>;
};

export default Tabs;
