import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Screen1BSignUp = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [Sc_isLoggedIn, setSc_isLoggedIn] = React.useState(false);
  const [auth_response, setAuth_response] = React.useState([]);
  const [emailaddress, setEmailaddress] = React.useState('');
  const [fullname, setFullname] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors._06Secondary }}
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
    >
      {/* Header */}
      <View
        style={[
          styles.View1ef8e7e8,
          { borderColor: theme.colors['04 Border'] },
        ]}
      >
        <ScrollView
          style={[styles.ScrollView9c5f127c, { borderRadius: 1 }]}
          contentContainerStyle={styles.ScrollView9c5f127cContent}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.View43207fca}>
            <Touchable
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Icon
                style={styles.Icon7dd22c4a}
                size={24}
                name={'AntDesign/arrowleft'}
              />
            </Touchable>
          </View>

          <View style={styles.View6a955cc3}>
            <Text
              style={[
                styles.Text3af0d5c1,
                { color: theme.colors['01 Primary'] },
              ]}
            >
              {'Sign up'}
            </Text>
          </View>

          <View style={styles.View43207fca}>
            <Touchable></Touchable>
          </View>
        </ScrollView>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={styles.KeyboardAwareScrollViewd329b5dbContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'never'}
      >
        {/* Form */}
        <View>
          {/* Full name */}
          <View style={styles.View7245b3d8}>
            <Text
              style={[styles.Text167594e9, { color: theme.colors._01Primary }]}
            >
              {'Full name'}
            </Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setFullname(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInput8d36da15,
                {
                  borderColor: theme.colors._04Border,
                  color: theme.colors._02Body,
                },
              ]}
              autoFocus={false}
              returnKeyType={'next'}
              placeholder={'Enter a value...'}
              keyboardType={'default'}
              placeholderTextColor={theme.colors._06Secondary}
              clearButtonMode={'while-editing'}
              clearTextOnFocus={false}
            />
          </View>
          {/* User name */}
          <View style={styles.View7245b3d8}>
            <Text
              style={[styles.Text167594e9, { color: theme.colors._01Primary }]}
            >
              {'Username'}
            </Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setUsername(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInput8d36da15,
                {
                  borderColor: theme.colors._04Border,
                  color: theme.colors._02Body,
                },
              ]}
              placeholder={'Enter a value...'}
              keyboardType={'default'}
              returnKeyType={'done'}
              placeholderTextColor={theme.colors._06Secondary}
              clearButtonMode={'while-editing'}
            />
          </View>
          {/* Email */}
          <View style={styles.View7245b3d8}>
            <Text
              style={[styles.Text167594e9, { color: theme.colors._01Primary }]}
            >
              {'Email'}
            </Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setEmailaddress(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInputb349a796,
                {
                  borderColor: theme.colors._04Border,
                  color: theme.colors._02Body,
                },
              ]}
              placeholder={'Enter a value...'}
              keyboardType={'default'}
              returnKeyType={'done'}
              placeholderTextColor={theme.colors._06Secondary}
              clearButtonMode={'while-editing'}
            />
          </View>
          {/* Password */}
          <View style={styles.View7245b3d8}>
            <Text
              style={[styles.Text167594e9, { color: theme.colors._01Primary }]}
            >
              {'Password'}
            </Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setPassword(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInput8d36da15,
                {
                  borderColor: theme.colors._04Border,
                  color: theme.colors._02Body,
                },
              ]}
              placeholder={'Enter a value...'}
              keyboardType={'default'}
              returnKeyType={'done'}
              placeholderTextColor={theme.colors._06Secondary}
              clearButtonMode={'while-editing'}
              secureTextEntry={true}
            />
          </View>
        </View>
        {/* Sign up */}
        <View style={styles.View2d6d8dcf}>
          {/* Sign up */}
          <ButtonSolid
            onPress={() => {
              const handler = async () => {
                try {
                  const new_user = await XanoApi.signupPOST(Constants, {
                    email: emailaddress,
                    name: fullname,
                    password: password,
                    username: username,
                  });
                  console.log(new_user);
                  const signup_error = new_user.message;
                  setGlobalVariableValue({
                    key: 'Error_Message_Auth',
                    value: signup_error,
                  });
                  const response_authHeader = new_user.authToken;
                  if (!Constants['auth_header']) {
                    return;
                  }
                  setGlobalVariableValue({
                    key: 'auth_header',
                    value: response_authHeader,
                  });
                  const response_id = new_user.id;
                  setGlobalVariableValue({
                    key: 'user_id',
                    value: response_id,
                  });
                  const response_name = new_user.name;
                  setGlobalVariableValue({
                    key: 'user_fullname',
                    value: response_name,
                  });
                  const response_username = new_user.username;
                  setGlobalVariableValue({
                    key: 'user_username',
                    value: response_username,
                  });
                  navigation.navigate('BottomTabNavigator', {
                    screen: 'Screen2BFeed',
                  });
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={[
              styles.ButtonSolida9b9409e,
              {
                backgroundColor: theme.colors._01Primary,
                borderColor: theme.colors._01Primary,
              },
            ]}
            title={'Sign up'}
            disabled={false}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolida9b9409e: {
    borderRadius: 10,
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 14,
    height: 40,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 0,
    textAlign: 'center',
  },
  Icon7dd22c4a: {
    marginBottom: 8,
    marginTop: 8,
  },
  Icon869bce86: {
    marginBottom: 8,
    marginLeft: 8,
    marginTop: 8,
  },
  KeyboardAwareScrollViewd329b5dbContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ScrollView9c5f127c: {
    height: 56,
    width: '100%',
  },
  ScrollView9c5f127cContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Text167594e9: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 15,
    lineHeight: 20,
    marginTop: 24,
  },
  Text3af0d5c1: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 16,
    lineHeight: 24,
    paddingBottom: 8,
    paddingTop: 8,
    textAlign: 'left',
  },
  TextInput8d36da15: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 4,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 15,
    height: 40,
    lineHeight: 20,
    marginTop: 4,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  TextInputb349a796: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 4,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 15,
    height: 40,
    lineHeight: 20,
    marginTop: 4,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  Texteb4eddf3: {
    fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 15,
    lineHeight: 20,
    marginLeft: 16,
    marginRight: 16,
    paddingTop: 10,
  },
  View1ef8e7e8: {
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  View2d6d8dcf: {
    marginBottom: 24,
  },
  View43207fca: {
    height: 40,
    marginBottom: 8,
    marginTop: 8,
    width: 32,
  },
  View6a955cc3: {
    justifyContent: 'center',
  },
  View7245b3d8: {
    marginLeft: 16,
    marginRight: 16,
  },
});

export default withTheme(Screen1BSignUp);
