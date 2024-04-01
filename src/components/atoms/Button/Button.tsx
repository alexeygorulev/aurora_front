import React, { useState, useEffect, useRef } from 'react';

import { ButtonComponentProps } from './types';
import { StyledButton } from './styles';
import { useTheme } from 'styled-components';
import Loader from 'components/atoms/Loader';

const Button: React.FC<ButtonComponentProps> = (props) => {
  const {
    id,
    type = 'primary',
    size = 's',
    width = 'auto',
    display = 'inline',
    disabled = false,
    loading = false,
    rounded = false,
    weight = 'medium',
    loaderType = 'secondary',
    loaderSize = 's',
    onClick = () => null,
    children,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClick = () => {
    if (!disabled && !loading) onClick({ id });
  };

  useEffect(() => {
    if ((disabled || loading) && isFocused) handleBlur();
  }, [disabled, loading, isFocused]);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    const button = buttonRef.current;

    if (disabled) return;
    if (button) {
      const scale = Math.max(button.offsetWidth, button.offsetHeight) / 12;
      button.style.setProperty('--scale-factor', scale.toString());
    }
  };

  return (
    <StyledButton
      data-component="Button"
      ref={buttonRef}
      theme={useTheme()}
      id={id}
      disabled={disabled || loading}
      sType={type}
      sSize={size}
      sWidth={width}
      sDisplay={display}
      sFocused={isFocused}
      sDisabled={disabled || loading}
      sRounded={rounded}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
      isLeaveBackGround={loading}
      sFontWeight={weight}
      onMouseEnter={handleMouseEnter}
    >
      {type === 'primary' && (
        <>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </>
      )}
      {loading ? <Loader size={loaderSize} type={loaderType} /> : children}
    </StyledButton>
  );
};

export default Button;
