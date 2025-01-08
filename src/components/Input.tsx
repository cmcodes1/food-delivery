import React from 'react';
import {KeyboardTypeOptions, TextInput} from 'react-native';

type InputProps = {
  value?: string;
  onChangeText?: (value: string) => void;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  style: object;
  autoCorrect?: boolean;
  secureTextEntry?: boolean;
};

export default function Input({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  style,
  autoCorrect,
  secureTextEntry,
}: InputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      style={style}
      autoCorrect={autoCorrect ?? false}
      secureTextEntry={secureTextEntry ?? false}
    />
  );
}
