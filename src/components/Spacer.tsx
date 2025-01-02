import * as React from 'react';
import {View} from 'react-native';

interface SpacerProps {
  height?: number;
  width?: number;
}

export default function Spacer({height, width}: SpacerProps) {
  return <View style={{height: height, width: width}} />;
}
