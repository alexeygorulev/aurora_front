import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

import { InputTextProps } from './types';
import { formatTextValue, deformatTextValue } from './utils';
import { StyledInputText } from './style';
import { useTheme } from 'styled-components';
import { StyledInput, StyledInputIcon, StyledInputIconLeft, StyledInputLabel } from '../style';
import Icon from 'components/icons/Icon';

const InputText: React.FC<InputTextProps> = (props) => {
  const {
    id,
    size = 'm',
    error = false,
    disabled = false,
    onFocus = () => null,
    onBlur = () => null,
    onChange = () => null,
    value,
    label,
    width = '100%',
    autoFocus = false,
    success = false,
    clearable = false,
    textAlign = 'left',
    autoComplete = false,
    maxLength,
    format = formatTextValue,
    deformat = deformatTextValue,
    inputMode = 'text',
    leftIcon = true,
    typeIcon = 'iconMail',
  } = props;

  const [focused, setFocused] = useState(false);
  const [prevValue, setPrevValue] = useState<string | null>(null);
  const [formattedValue, setFormattedValue] = useState('');
  const [caretPosition, setCaretPosition] = useState(null);

  const theme = useTheme();
  const inputNode = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    setFocused(true);
    onFocus({ id, value, formattedValue });
  };

  const handleBlur = useCallback(() => {
    setFocused(false);
    setCaretPosition(null);
    onBlur({ id, value, formattedValue });
  }, [formattedValue, id, onBlur, value]);

  const handleChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
    const eValue = e.currentTarget.value;
    const fValue = format(eValue, maxLength);
    const dfValue = deformat(fValue);

    setPrevValue(dfValue);
    setFormattedValue(fValue);

    onChange({ id, value: dfValue, formattedValue: fValue });
  };

  const handleKeyDown = () => {
    setCaretPosition(null);
  };

  useEffect(() => {
    if (autoFocus && inputNode.current) inputNode.current.focus();
  }, [autoFocus]);

  useEffect(() => {
    if (disabled && focused) handleBlur();
  }, [disabled, focused, handleBlur]);

  useEffect(() => {
    if (value !== prevValue && value) {
      setFormattedValue(format(value, maxLength));
      setPrevValue(value);
    }
  }, [format, maxLength, prevValue, value]);

  useEffect(() => {
    if (caretPosition !== null && inputNode.current) {
      inputNode.current.setSelectionRange(caretPosition, caretPosition);
    }
  });

  const smallLabel = useMemo(() => focused || !!value, [focused, value]);
  const successIcon = useMemo(() => success && !disabled && !focused, [success, disabled, focused]);
  const clearableIcon = useMemo(
    () => clearable && !!value && focused && !disabled,
    [clearable, value, focused, disabled],
  );
  const withIcon = useMemo(() => successIcon || clearableIcon, [successIcon, clearableIcon]);

  return (
    <StyledInput sWidth={width}>
      <StyledInputText
        ref={inputNode}
        as="input"
        inputMode={inputMode}
        id={id}
        data-testid={id}
        value={formattedValue}
        maxLength={maxLength}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        sSize={size}
        sTextAlign={textAlign}
        sAutoComplete={autoComplete}
        sDisabled={disabled}
        sFocused={focused}
        sError={error}
        sWithLabel={!!label && smallLabel}
        sWithIcon={withIcon}
        theme={theme}
        sLeftIcon={leftIcon}
      />

      {label && (
        <StyledInputLabel
          sSize={size}
          sSmall={smallLabel}
          sError={error}
          sDisabled={disabled}
          sFocused={focused}
          theme={theme}
          sLeftIcon={leftIcon}
        >
          {label}
        </StyledInputLabel>
      )}
      {leftIcon && (
        <StyledInputIconLeft theme={theme} sSize={size}>
          <Icon type={typeIcon} size={size} />
        </StyledInputIconLeft>
      )}
      {successIcon && (
        <StyledInputIcon theme={theme} sSize={size}>
          <Icon type="iconSuccess" size={size} />
        </StyledInputIcon>
      )}
    </StyledInput>
  );
};

export default InputText;
