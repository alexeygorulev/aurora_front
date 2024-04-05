import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';

import Icon from 'components/icons/Icon';
import { InputCheckboxProps } from './types';
import {
  StyledInputCheckbox,
  StyledInputCheckboxInner,
  StyledInputCheckboxHtmlInput,
  StyledInputCheckboxIcon,
  StyledInputCheckboxLabel,
} from './style';
import { useTheme } from 'styled-components';

const InputCheckbox: React.FC<InputCheckboxProps> = (props) => {
  const {
    id,
    size = 'm',
    error = false,
    disabled = false,
    onFocus = () => null,
    onBlur = () => null,
    onChange = () => null,
    value = false,
    block = false,
    children,
  } = props;

  const [focused, setFocused] = useState(false);
  const [disallowBlurFlag, setDisallowBlurFlag] = useState(false);

  const inputNode = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (!focused) {
      setFocused(true);
      onFocus({ id, value });
    }
  };

  const handleBlur = useCallback(() => {
    if (disallowBlurFlag) return;
    setFocused(false);
    onBlur({ id, value });
  }, [disallowBlurFlag, id, onBlur, value]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange({ id, value: e.currentTarget.checked });
  };

  const disallowBlur = () => {
    setDisallowBlurFlag(true);
  };

  const allowBlur = () => {
    if (disallowBlurFlag) {
      setDisallowBlurFlag(false);
      if (inputNode.current) inputNode.current.focus();
    }
  };

  useEffect(() => {
    if (disabled && focused) handleBlur();
  }, [disabled, focused, handleBlur]);

  const checked = useMemo(() => !!value, [value]);

  return (
    <StyledInputCheckbox
      htmlFor={id}
      data-checked={checked}
      sSize={size}
      sDisabled={disabled}
      sChecked={checked}
      sFocused={focused}
      sError={error}
      sBlock={block}
      onMouseDown={disallowBlur}
      onMouseUp={allowBlur}
      theme={useTheme()}
    >
      <StyledInputCheckboxInner>
        <StyledInputCheckboxHtmlInput
          ref={inputNode}
          id={id}
          checked={checked}
          data-checked={checked}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <StyledInputCheckboxIcon>
          {checked && <Icon type="iconCheck" color="white" display="block" size={size} />}
        </StyledInputCheckboxIcon>
        {children && <StyledInputCheckboxLabel>{children}</StyledInputCheckboxLabel>}
      </StyledInputCheckboxInner>
    </StyledInputCheckbox>
  );
};

export default InputCheckbox;
