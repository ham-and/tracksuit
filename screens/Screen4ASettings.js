import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import {
  Divider,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen4ASettings = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    console.log('Screen ON_SCREEN_FOCUS Start');
    let error = null;
    try {
      if (!isFocused) {
        return;
      }
      console.log('Start ON_SCREEN_FOCUS:0 CONSOLE_LOG');
      console.log('Bearer ' + Constants['auth_header']);
      console.log('Complete ON_SCREEN_FOCUS:0 CONSOLE_LOG');
    } catch (err) {
      console.error(err);
      error = err.message ?? err;
    }
    console.log(
      'Screen ON_SCREEN_FOCUS Complete',
      error ? { error } : 'no error'
    );
  }, [isFocused]);

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
          <View style={styles.View6a955cc3}>
            <Text
              style={[
                styles.Text6b505a1b,
                { color: theme.colors['01 Primary'] },
              ]}
            >
              {'Settings'}
            </Text>
          </View>

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
              <Icon style={styles.Icon869bce86} size={24} name={'Feather/x'} />
            </Touchable>
          </View>
        </ScrollView>
      </View>
      {/* Account */}
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('TTAccountScreen');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {/* Content */}
        <View style={styles.View67656024}>
          <Row alignItems={'flex-start'} justifyContent={'space-between'}>
            <View>
              <Row justifyContent={'flex-start'} alignItems={'flex-start'}>
                <Icon
                  style={styles.Icon09162134}
                  size={24}
                  name={'Feather/info'}
                  color={theme.colors['01 Primary']}
                />
                <Text
                  style={[
                    styles.Textcc702048,
                    { color: theme.colors._01Primary },
                  ]}
                >
                  {'Account'}
                </Text>
              </Row>
            </View>
            <Icon
              size={24}
              name={'Feather/chevron-right'}
              color={theme.colors._03Disabled}
            />
          </Row>
        </View>
        <Divider
          style={styles.Divider49168198}
          color={theme.colors._04Border}
        />
      </Touchable>
      {/* Security */}
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('Screen4DSecurity');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {/* Content */}
        <View style={styles.View67656024}>
          <Row justifyContent={'space-between'} alignItems={'flex-start'}>
            <View>
              <Row justifyContent={'flex-start'} alignItems={'flex-start'}>
                <Icon
                  style={styles.Icon09162134}
                  size={24}
                  color={theme.colors._01Primary}
                  name={'Feather/lock'}
                />
                <Text
                  style={[
                    styles.Texta00be07d,
                    { color: theme.colors._01Primary },
                  ]}
                >
                  {'Security'}
                </Text>
              </Row>
            </View>
            <Icon
              name={'Feather/chevron-right'}
              size={24}
              color={theme.colors._03Disabled}
            />
          </Row>
        </View>
        <Divider
          style={styles.Divider49168198}
          color={theme.colors._04Border}
        />
      </Touchable>
      {/* Feedback */}
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('Screen1Launch');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {/* Content */}
        <View style={styles.View67656024}>
          <Row justifyContent={'space-between'} alignItems={'flex-start'}>
            <View>
              <Row justifyContent={'flex-start'} alignItems={'flex-start'}>
                <Icon
                  style={styles.Icon09162134}
                  size={24}
                  name={'Feather/message-circle'}
                  color={theme.colors._01Primary}
                />
                <Text
                  style={[
                    styles.Textef67e3c6,
                    { color: theme.colors._01Primary },
                  ]}
                >
                  {'Feedback'}
                </Text>
              </Row>
            </View>
            <Icon
              name={'Feather/chevron-right'}
              size={24}
              color={theme.colors._03Disabled}
            />
          </Row>
        </View>
        <Divider
          style={styles.Divider49168198}
          color={theme.colors._04Border}
        />
      </Touchable>
      {/* Donate */}
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('Screen4EDonate');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {/* Content */}
        <View style={styles.View67656024}>
          <Row justifyContent={'space-between'} alignItems={'flex-start'}>
            <View>
              <Row justifyContent={'flex-start'} alignItems={'flex-start'}>
                <Icon
                  style={styles.Icon09162134}
                  size={24}
                  name={'Feather/smile'}
                  color={theme.colors._01Primary}
                />
                <Text
                  style={[
                    styles.Textef67e3c6,
                    { color: theme.colors._01Primary },
                  ]}
                >
                  {'Donate'}
                </Text>
              </Row>
            </View>
            <Icon
              name={'Feather/chevron-right'}
              size={24}
              color={theme.colors._03Disabled}
            />
          </Row>
        </View>
        <Divider
          style={styles.Divider49168198}
          color={theme.colors._04Border}
        />
      </Touchable>
      {/* Contact us */}
      <Touchable
        onPress={() => {
          try {
            Linking.openURL(
              'mailto:hey.tracksuit@gmail.com?subject=Contact us'
            );
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {/* Content */}
        <View style={styles.View67656024}>
          <Row justifyContent={'space-between'} alignItems={'flex-start'}>
            <View>
              <Row justifyContent={'flex-start'} alignItems={'flex-start'}>
                <Icon
                  style={styles.Icon09162134}
                  size={24}
                  name={'Feather/mail'}
                  color={theme.colors._01Primary}
                />
                <Text
                  style={[
                    styles.Textef67e3c6,
                    { color: theme.colors._01Primary },
                  ]}
                >
                  {'Contact us'}
                </Text>
              </Row>
            </View>
            <Icon
              name={'Feather/chevron-right'}
              size={24}
              color={theme.colors._03Disabled}
            />
          </Row>
        </View>
        <Divider
          style={styles.Divider49168198}
          color={theme.colors._04Border}
        />
      </Touchable>
      {/* Log out */}
      <Touchable
        onPress={() => {
          try {
            setGlobalVariableValue({
              key: 'auth_header',
              value: '',
            });
            Utils.showAlert({
              title: 'logged out',
              message: 'logged out',
              buttonText: 'ok',
            });
            console.log('Bearer ' + Constants['auth_header']);
            navigation.navigate('Screen1Launch', { signedOut: true });
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {/* Content */}
        <View style={styles.View67656024}>
          <Row justifyContent={'space-between'} alignItems={'flex-start'}>
            <View>
              <Row justifyContent={'flex-start'} alignItems={'flex-start'}>
                <Icon
                  style={styles.Icon09162134}
                  size={24}
                  color={theme.colors._01Primary}
                  name={'Feather/arrow-right-circle'}
                />
                <Text
                  style={[
                    styles.Textef67e3c6,
                    { color: theme.colors._01Primary },
                  ]}
                >
                  {'Log out'}
                </Text>
              </Row>
            </View>
            <Icon
              name={'Feather/chevron-right'}
              size={24}
              color={theme.colors._03Disabled}
            />
          </Row>
        </View>
        <Divider
          style={styles.Divider49168198}
          color={theme.colors._04Border}
        />
      </Touchable>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Divider49168198: {
    height: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  Icon09162134: {
    marginRight: 12,
  },
  Icon869bce86: {
    marginBottom: 8,
    marginLeft: 8,
    marginTop: 8,
  },
  ScrollView9c5f127c: {
    height: 56,
    width: '100%',
  },
  ScrollView9c5f127cContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Text6b505a1b: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 16,
    lineHeight: 24,
    paddingBottom: 16,
    paddingTop: 16,
    textAlign: 'left',
  },
  Texta00be07d: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 15,
    lineHeight: 24,
  },
  Textcc702048: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 15,
    lineHeight: 24,
  },
  Textef67e3c6: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 15,
    lineHeight: 24,
  },
  View1ef8e7e8: {
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  View43207fca: {
    height: 40,
    marginBottom: 8,
    marginTop: 8,
    width: 32,
  },
  View67656024: {
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
  },
  View6a955cc3: {
    justifyContent: 'center',
  },
});

export default withTheme(Screen4ASettings);
