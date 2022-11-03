import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import {
  ButtonSolid,
  Divider,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const Screen4CAccount = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [description_input, setDescription_input] = React.useState('');
  const [name_input, setName_input] = React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [url_input, setUrl_input] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors._06Secondary }}
      scrollable={false}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <XanoApi.FetchAuthMeGET>
        {({ loading, error, data, refetchAuthMe }) => {
          const fetchData = data;
          if (!fetchData || loading) {
            return <ActivityIndicator />;
          }

          if (error) {
            return (
              <Text style={{ textAlign: 'center' }}>
                There was a problem fetching this data
              </Text>
            );
          }

          return (
            <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
              {/* Header */}
              <View style={styles.Viewc1902a92}>
                <Row justifyContent={'space-between'} alignItems={'flex-start'}>
                  <Text
                    style={[
                      styles.Text45f6b6b9,
                      { color: theme.colors._01Primary },
                    ]}
                  >
                    {'Account'}
                  </Text>

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
                      style={styles.Iconb86346ac}
                      name={'Feather/x'}
                      size={24}
                    />
                  </Touchable>
                </Row>
                <Divider
                  style={styles.Dividerde11d607}
                  color={theme.colors._04Border}
                />
              </View>
              {/* Username */}
              <View style={styles.Viewfeb08702}>
                {/* Header */}
                <Text
                  style={[styles.Text89add4e6, { color: theme.colors._02Body }]}
                >
                  {'Username:'}
                </Text>
                {/* Input */}
                <Text
                  style={[
                    styles.Text428e2e5e,
                    { color: theme.colors._01Primary },
                  ]}
                >
                  {Constants['user_username']}
                </Text>
              </View>
              {/* Full name */}
              <View style={styles.Viewfeb08702}>
                {/* Header */}
                <Text
                  style={[styles.Text0618458a, { color: theme.colors._02Body }]}
                >
                  {'Name:'}
                </Text>
                {/* Input */}
                <Text
                  style={[
                    styles.Textcc702048,
                    { color: theme.colors._01Primary },
                  ]}
                >
                  {Constants['user_fullname']}
                </Text>
              </View>
              {/* Email */}
              <View style={styles.Viewfeb08702}>
                {/* Header */}
                <Text
                  style={[styles.Text89add4e6, { color: theme.colors._02Body }]}
                >
                  {'Header:'}
                </Text>
                {/* Input */}
                <Text
                  style={[
                    styles.Text428e2e5e,
                    { color: theme.colors._01Primary },
                  ]}
                >
                  {Constants['auth_header']}
                </Text>
              </View>
              {/* UserID */}
              <View style={styles.Viewfeb08702}>
                {/* Header */}
                <Text
                  style={[styles.Text89add4e6, { color: theme.colors._02Body }]}
                >
                  {'UserID:'}
                </Text>
                {/* Input */}
                <Text
                  style={[
                    styles.Text428e2e5e,
                    { color: theme.colors._01Primary },
                  ]}
                >
                  {Constants['user_id']}
                </Text>
              </View>

              <View style={styles.View02f8ec45}>
                <>
                  {!Constants['auth_header'] ? null : (
                    <Text
                      style={{ color: theme.colors.strong }}
                      disabled={false}
                    >
                      {'MF YOU LOGGED INNNNN'}
                    </Text>
                  )}
                </>
                <>
                  {Constants['auth_header'] ? null : (
                    <Text style={{ color: theme.colors.strong }}>
                      {'MF YOU LOGGED OUTTTTTo'}
                    </Text>
                  )}
                </>
              </View>

              <View style={styles.View02f8ec45}>
                <ButtonSolid
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'auth_header',
                        value: '',
                      });
                      setGlobalVariableValue({
                        key: 'user_username',
                        value: 'some user_username',
                      });
                      setGlobalVariableValue({
                        key: 'user_fullname',
                        value: 'some user_fullname',
                      });
                      setGlobalVariableValue({
                        key: 'user_email',
                        value: 'some user_email',
                      });
                      setGlobalVariableValue({
                        key: 'user_id',
                        value: 'some user_id',
                      });
                      setGlobalVariableValue({
                        key: 'isLoggedIn',
                        value: false,
                      });
                      console.log(Constants['user_fullname']);
                      console.log(Constants['auth_header']);
                      Utils.showAlert({
                        title: 'bye',
                        message: 'you have been logged out',
                        buttonText: 'bye',
                      });
                      navigation.navigate('Screen1Launch');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSolide0234031,
                    {
                      backgroundColor: theme.colors.primary,
                      color: theme.colors._09NegativeText,
                      borderColor: theme.colors._09NegativeText,
                    },
                  ]}
                  title={'Log out'}
                />
              </View>

              <View style={styles.View02f8ec45}>
                <ButtonSolid
                  onPress={() => {
                    const handler = async () => {
                      try {
                        const response_me = await XanoApi.authMeGET(Constants);
                        console.log(response_me);
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  style={[
                    styles.ButtonSolidd3846a19,
                    {
                      backgroundColor: theme.colors.primary,
                      borderColor: theme.colors._09NegativeText,
                      color: theme.colors._07ActionText,
                    },
                  ]}
                  title={'Test /me/'}
                />
              </View>
            </ScrollView>
          );
        }}
      </XanoApi.FetchAuthMeGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidd3846a19: {
    borderRadius: 8,
    borderStyle: 'dotted',
    fontFamily: 'System',
    fontWeight: '700',
    marginLeft: 24,
    marginRight: 24,
    textAlign: 'center',
  },
  ButtonSolide0234031: {
    borderRadius: 8,
    borderStyle: 'dotted',
    fontFamily: 'System',
    fontWeight: '700',
    marginLeft: 24,
    marginRight: 24,
    textAlign: 'center',
  },
  Dividerde11d607: {
    height: 1,
  },
  Fetch431eb058: {
    minHeight: 40,
  },
  Iconb86346ac: {
    marginBottom: 12,
    marginRight: 16,
    marginTop: 12,
  },
  Text0618458a: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 15,
    lineHeight: 20,
    paddingBottom: 4,
  },
  Text428e2e5e: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 15,
    lineHeight: 24,
  },
  Text45f6b6b9: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 12,
  },
  Text89add4e6: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 15,
    lineHeight: 20,
    paddingBottom: 4,
  },
  Textcc702048: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 15,
    lineHeight: 24,
  },
  View02f8ec45: {
    marginTop: 20,
  },
  Viewc1902a92: {
    marginTop: 44,
  },
  Viewfeb08702: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 24,
  },
});

export default withTheme(Screen4CAccount);
