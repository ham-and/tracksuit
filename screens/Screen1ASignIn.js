import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  Divider,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Screen1ASignIn = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors._06Secondary }}
      hasTopSafeArea={false}
      scrollable={false}
      hasSafeArea={true}
    >
      {/* Header */}
      <View style={styles.View1230205a}>
        <Row justifyContent={'space-between'} alignItems={'flex-start'}>
          {/* Back */}
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.Touchable26cae30d}
          >
            {/* Back */}
            <Icon
              style={styles.Icon5d52e2fa}
              name={'Feather/arrow-left'}
              size={24}
              color={theme.colors._01Primary}
            />
          </Touchable>

          <Text
            style={[styles.Text04068947, { color: theme.colors._01Primary }]}
          >
            {'Log in'}
          </Text>
          {/* Hidden */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator', {
                  screen: 'Screen2BFeed',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.Touchableafd6cb8b}
          >
            {/* Back */}
            <Icon
              style={styles.Icon5d52e2fa}
              name={'AntDesign/questioncircleo'}
              size={24}
              color={theme.colors._06Secondary}
            />
          </Touchable>
        </Row>
        <Divider
          style={styles.Dividerde11d607}
          color={theme.colors._04Border}
        />
        <View style={styles.View7245b3d8}>
          <Text
            style={[styles.Text167594e9, { color: theme.colors._01Primary }]}
          >
            {'Email'}
          </Text>
          {/* email input */}
          <TextInput
            onChangeText={newEmailInputValue => {
              try {
                setEmail(newEmailInputValue);
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
            value={email}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            placeholder={'Enter a value...'}
            placeholderTextColor={theme.colors._06Secondary}
            clearButtonMode={'while-editing'}
            autoFocus={true}
            spellcheck={true}
            autoCapitalize={'none'}
          />
        </View>

        <View style={styles.View7245b3d8}>
          <Text
            style={[styles.Text167594e9, { color: theme.colors._01Primary }]}
          >
            {'Password'}
          </Text>
          {/* Password input */}
          <TextInput
            onChangeText={newPasswordInputValue => {
              try {
                setPassword(newPasswordInputValue);
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
            value={password}
            placeholder={'Enter a value...'}
            keyboardType={'default'}
            returnKeyType={'done'}
            placeholderTextColor={theme.colors._06Secondary}
            spellcheck={true}
            secureTextEntry={true}
            clearTextOnFocus={true}
            autoFocus={false}
            enablesReturnKeyAutomatically={true}
            autoCapitalize={'none'}
          />
        </View>
        <>
          {!Constants['Error_Message_Auth'] ? null : (
            <Text
              style={[
                styles.Textaf5c0439,
                { color: theme.colors['09 Negative text'] },
              ]}
            >
              {'Error: '}
              {Constants['Error_Message_Auth']}
            </Text>
          )}
        </>
      </View>

      <View style={styles.Viewb5dee52e}>
        {/* Primary button */}
        <ButtonSolid
          onPress={() => {
            const handler = async () => {
              console.log('Primary button ON_PRESS Start');
              let error = null;
              try {
                console.log('Start ON_PRESS:0 FETCH_REQUEST');
                const response_login = await XanoApi.loginPOST(Constants, {
                  email: email,
                  password: password,
                });
                console.log('Complete ON_PRESS:0 FETCH_REQUEST', {
                  response_login,
                });
                console.log('Start ON_PRESS:1 CONSOLE_LOG');
                console.log(response_login);
                console.log('Complete ON_PRESS:1 CONSOLE_LOG');
                console.log('Start ON_PRESS:2 EXTRACT_KEY');
                const errorMessage = response_login.message;
                console.log('Complete ON_PRESS:2 EXTRACT_KEY', {
                  errorMessage,
                });
                console.log('Start ON_PRESS:3 EXTRACT_KEY');
                const response_authToken = response_login.authToken;
                console.log('Complete ON_PRESS:3 EXTRACT_KEY', {
                  response_authToken,
                });
                console.log('Start ON_PRESS:4 SET_GLOBAL_VARIABLE');
                setGlobalVariableValue({
                  key: 'auth_header',
                  value: response_authToken,
                });
                console.log('Complete ON_PRESS:4 SET_GLOBAL_VARIABLE');
                console.log('Start ON_PRESS:5 TERMINATION_CHECK');
                if (!Constants['auth_header']) {
                  return;
                }
                console.log('Complete ON_PRESS:5 TERMINATION_CHECK');
                console.log('Start ON_PRESS:6 SET_GLOBAL_VARIABLE');
                setGlobalVariableValue({
                  key: 'Error_Message_Auth',
                  value: errorMessage,
                });
                console.log('Complete ON_PRESS:6 SET_GLOBAL_VARIABLE');
                console.log('Start ON_PRESS:7 EXTRACT_KEY');
                const response_id = response_login.id;
                console.log('Complete ON_PRESS:7 EXTRACT_KEY', { response_id });
                console.log('Start ON_PRESS:8 SET_GLOBAL_VARIABLE');
                setGlobalVariableValue({
                  key: 'user_id',
                  value: response_id,
                });
                console.log('Complete ON_PRESS:8 SET_GLOBAL_VARIABLE');
                console.log('Start ON_PRESS:9 EXTRACT_KEY');
                const response_username = response_login.username;
                console.log('Complete ON_PRESS:9 EXTRACT_KEY', {
                  response_username,
                });
                console.log('Start ON_PRESS:10 SET_GLOBAL_VARIABLE');
                setGlobalVariableValue({
                  key: 'user_username',
                  value: response_username,
                });
                console.log('Complete ON_PRESS:10 SET_GLOBAL_VARIABLE');
                console.log('Start ON_PRESS:11 EXTRACT_KEY');
                const response_name = response_login.name;
                console.log('Complete ON_PRESS:11 EXTRACT_KEY', {
                  response_name,
                });
                console.log('Start ON_PRESS:12 SET_GLOBAL_VARIABLE');
                setGlobalVariableValue({
                  key: 'user_fullname',
                  value: response_name,
                });
                console.log('Complete ON_PRESS:12 SET_GLOBAL_VARIABLE');
                console.log('Start ON_PRESS:13 NAVIGATE_SCREEN');
                navigation.navigate('BottomTabNavigator', {
                  screen: 'Screen2BFeed',
                });
                console.log('Complete ON_PRESS:13 NAVIGATE_SCREEN');
              } catch (err) {
                console.error(err);
                error = err.message ?? err;
              }
              console.log(
                'Primary button ON_PRESS Complete',
                error ? { error } : 'no error'
              );
            };
            handler();
          }}
          style={[
            styles.ButtonSolidc6c6276e,
            {
              backgroundColor: theme.colors._01Primary,
              borderColor: theme.colors._01Primary,
            },
          ]}
          disabled={false}
          title={'Log in'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidc6c6276e: {
    borderRadius: 10,
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 14,
    height: 36,
    lineHeight: 20,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 0,
    textAlign: 'center',
  },
  Dividerde11d607: {
    height: 1,
  },
  Icon5d52e2fa: {
    bottom: 12,
    top: 12,
  },
  Text04068947: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    marginLeft: 48,
    marginRight: 48,
    marginTop: 12,
    textAlign: 'center',
  },
  Text167594e9: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 15,
    lineHeight: 20,
    marginTop: 24,
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
  Textaf5c0439: {
    alignSelf: 'flex-start',
    fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 15,
    lineHeight: 20,
    marginLeft: 16,
    marginRight: 16,
  },
  Touchable26cae30d: {
    height: 48,
    marginLeft: 16,
  },
  Touchableafd6cb8b: {
    height: 48,
    marginRight: 16,
  },
  View1230205a: {
    marginTop: 0,
  },
  View7245b3d8: {
    marginLeft: 16,
    marginRight: 16,
  },
  Viewb5dee52e: {
    bottom: 24,
    marginBottom: 0,
    marginTop: 0,
    position: 'absolute',
    width: '100%',
  },
});

export default withTheme(Screen1ASignIn);
