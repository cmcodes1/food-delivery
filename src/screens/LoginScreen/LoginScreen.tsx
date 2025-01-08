import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import icons from '../../assets/icons';
import Input from '../../components/Input';
import Spacer from '../../components/Spacer';
import {NavigationPropType} from '../../navigation/types';
import {emailRegex} from '../../utils/utils';
import styles from './styles';

export default function LoginScreen() {
  const navigation: NavigationPropType = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const error = 'Invalid email or password';

  const handleLogin = () => {
    if (emailRegex.test(email) && email.length > 0 && password.length > 0) {
      setShowError(false);
      navigation.navigate('HomeScreen');
    } else {
      setShowError(true);
    }
  };

  return (
    <ScrollView>
      <View style={[styles.root, styles.flex1]}>
        <View style={styles.header}>
          <View style={styles.bgIconsContainer}>
            <SvgXml xml={icons.ellipse} />
            <SvgXml xml={icons.vector} />
          </View>
          <Text style={styles.headerText}>Log In</Text>
          <Text style={styles.subheaderText}>
            Please sign in to your existing account
          </Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.blackRock2}>EMAIL</Text>
          <Input
            value={email.toLowerCase()}
            onChangeText={setEmail}
            placeholder={'example@gmail.com'}
            keyboardType={'email-address'}
            style={styles.input}
            autoCorrect={false}
          />
          <Spacer height={24} />
          <Text style={styles.blackRock2}>PASSWORD</Text>
          <View style={[styles.inputContainer, styles.input]}>
            <Input
              value={password}
              onChangeText={setPassword}
              placeholder={'* * * * * * * * * *'}
              autoCorrect={false}
              secureTextEntry={!showPassword}
              style={styles.flex1}
            />
            <SvgXml
              xml={icons.eyeOpen}
              width={24}
              height={24}
              onPress={() => setShowPassword(!showPassword)}
            />
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
              <Text style={[styles.blackRock2, styles.lightSlateGrey]}>
                Remeber me
              </Text>
            </View>
            <Text style={[styles.blackRock2, styles.pumpkin]}>
              Forgot Password
            </Text>
          </View>
          <Spacer height={24} />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
          {showError && <Text style={styles.errorText}>{error}</Text>}
          <Spacer height={24} />
          <View style={styles.signupContainer}>
            <Text style={styles.comet}>Don't have an account?</Text>
            <Spacer width={10} />
            <Text style={styles.labelPrimaryBold}>SIGN UP</Text>
          </View>
          <Spacer height={24} />
          <Text style={[styles.comet, styles.textAlignCenter]}>Or</Text>
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
