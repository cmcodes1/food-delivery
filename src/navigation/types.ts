import {NavigationProp, NavigationState} from '@react-navigation/native';

export type NavigationPropType = Omit<
  NavigationProp<ReactNavigation.RootParamList>,
  'getState'
> & {
  getState(): NavigationState | undefined;
};
