import {
  NavigationProp,
  NavigationState,
  useNavigation,
} from '@react-navigation/native';
import * as React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Spacer from '../../components/Spacer';
import icons from '../../styles/icons';
import styles from './styles';

type NavigationPropType = Omit<
  NavigationProp<ReactNavigation.RootParamList>,
  'getState'
> & {
  getState(): NavigationState | undefined;
};

export default function LoginScreen() {
  const navigation: NavigationPropType = useNavigation();

  const handleLogin = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Log In</Text>
          <Text style={styles.subheaderText}>
            Please sign in to your existing account
          </Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.labelDark}>EMAIL</Text>
          <TextInput
            placeholder="example@gmail.com"
            keyboardType="email-address"
            style={styles.input}
            autoCorrect={false}
          />
          <Spacer height={24} />
          <Text style={styles.labelDark}>PASSWORD</Text>
          <View style={[styles.inputContainer, styles.input]}>
            <TextInput
              placeholder="* * * * * * * * * *"
              autoCorrect={false}
              secureTextEntry={true}
            />
            <SvgXml xml={icons.eyeOpen} width={24} height={24} />
          </View>
          <Spacer height={24} />
          <View style={styles.forgotPasswordContainer}>
            <View style={styles.rememberMeContainer}>
              <SvgXml
                xml={icons.checkbox}
                width={24}
                height={24}
                style={styles.checkbox}
              />
              <Text style={[styles.labelDark, styles.labelGrey]}>
                Remeber me
              </Text>
            </View>
            <Text style={[styles.labelDark, styles.labelPrimary]}>
              Forgot Password
            </Text>
          </View>
          <Spacer height={24} />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
          <Spacer height={24} />
          <View style={styles.signupContainer}>
            <Text style={styles.labelDarkGrey}>Don't have an account?</Text>
            <Spacer width={10} />
            <Text style={styles.labelPrimaryBold}>SIGN UP</Text>
          </View>
          <Spacer height={24} />
          <Text style={[styles.labelDarkGrey, styles.textAlignCenter]}>Or</Text>
          <Spacer height={24} />
          <View style={styles.socialContainer}>
            <SvgXml xml={icons.facebook} width={62} height={62} />
            <Spacer width={30} />
            <SvgXml
              xml={icons.twitter}
              width={62}
              height={62}
              style={styles.checkbox}
            />
            <Spacer width={30} />
            <SvgXml
              xml={icons.apple}
              width={62}
              height={62}
              style={styles.checkbox}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
