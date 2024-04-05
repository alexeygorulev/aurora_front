import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

import { InputPasswordProps } from './types';
import { StyledInputPassword } from './style';
import { deformatTextValue, formatTextValue } from '../InputText/utils';
import { StyledInput, StyledInputIcon, StyledInputIconLeft, StyledInputLabel } from '../style';
import Icon from 'components/icons/Icon';
import { useTheme } from 'styled-components';

const InputPassword: React.FC<InputPasswordProps> = (props) => {
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
    textAlign = 'left',
    autoComplete = false,
    leftIcon = false,
    maxLength,
    format = formatTextValue,
    deformat = deformatTextValue,
    visible = false,
  } = props;

  const [focused, setFocused] = useState(false);
  const [prevValue, setPrevValue] = useState<string | null>(null);
  const [formattedValue, setFormattedValue] = useState('');
  const [caretPosition, setCaretPosition] = useState(null);
  const [disallowBlurFlag, setDisallowBlurFlag] = useState(false);
  const [hidden, setHidden] = useState(true);

  const inputNode = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setFocused(true);
    onFocus({ id, value, formattedValue });
  };

  const handleBlur = useCallback(() => {
    if (disallowBlurFlag) return;
    setFocused(false);
    setCaretPosition(null);
    onBlur({ id, value, formattedValue });
  }, [disallowBlurFlag, formattedValue, id, onBlur, value]);

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

  const disallowBlur = () => {
    setDisallowBlurFlag(true);
  };

  const allowBlur = () => {
    if (disallowBlurFlag && inputNode.current) {
      setDisallowBlurFlag(false);
      inputNode.current.focus();
    }
  };

  const handleToggleHidden = () => {
    if (!disabled) setHidden(!hidden);
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [format, maxLength, value]);

  useEffect(() => {
    if (caretPosition !== null && inputNode.current) {
      inputNode.current.setSelectionRange(caretPosition, caretPosition);
    }
  });

  const smallLabel = useMemo(() => focused || !!value, [focused, value]);
  const withIcon = useMemo(() => visible && !disabled, [visible, disabled]);
  const theme = useTheme();
  return (
    <StyledInput sWidth={width}>
      <StyledInputPassword
        ref={inputNode}
        theme={theme}
        as="input"
        id={id}
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
        sLeftIcon={leftIcon}
        sWithLabel={!!label && smallLabel}
        sWithIcon={withIcon}
        sHidden={hidden || disabled}
      />
      {label && (
        <StyledInputLabel
          theme={theme}
          sSize={size}
          sLeftIcon={leftIcon}
          sSmall={smallLabel}
          sError={error}
          sDisabled={disabled}
          sFocused={focused}
        >
          {label}
        </StyledInputLabel>
      )}
      {leftIcon && (
        <StyledInputIconLeft theme={theme} sSize={size}>
          <Icon type="iconLock" size={size} />
        </StyledInputIconLeft>
      )}
      {withIcon && (
        <StyledInputIcon
          theme={theme}
          sSize={size}
          sClickable
          sDisabled={disabled}
          onMouseDown={disallowBlur}
          onMouseUp={allowBlur}
          onClick={handleToggleHidden}
        >
          {hidden && <Icon type="iconEyeOff" display="block" size={size} />}
          {!hidden && <Icon type="iconEye" display="block" size={size} />}
        </StyledInputIcon>
      )}
    </StyledInput>
  );
};

export default InputPassword;
