import { useTheme } from 'styled-components';
import { StyledTabs } from './style';
import { TabsComponentProps } from './types';

const Tabs: React.FC<TabsComponentProps> = (props) => {
  const {
    children,
    id,
    handleClick,
    type = 'secondary',
    size = 's',
    width = 'auto',
    display = 'inline',
    fontSize = 's',
    rounded = true,
  } = props;

  const theme = useTheme();

  return (
    <StyledTabs
      sType={type}
      sSize={size}
      sWidth={width}
      sDisplay={display}
      sFontSize={fontSize}
      sDisabled={false}
      sRounded={rounded}
      theme={theme}
      onClick={() => handleClick(id)}
    >
      {children}
    </StyledTabs>
  );
};

export default Tabs;
