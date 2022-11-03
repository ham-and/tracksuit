import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  ButtonSolid,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';

const Screen1Launch = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

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
      console.log(Constants['auth_header']);
      console.log('Complete ON_SCREEN_FOCUS:0 CONSOLE_LOG');
      console.log('Start ON_SCREEN_FOCUS:1 TERMINATION_CHECK');
      if (props.route?.params?.signedOut ?? '') {
        return;
      }
      console.log('Complete ON_SCREEN_FOCUS:1 TERMINATION_CHECK');
      console.log('Start ON_SCREEN_FOCUS:2 TERMINATION_CHECK');
      if (Constants['auth_header'] === '') {
        return;
      }
      console.log('Complete ON_SCREEN_FOCUS:2 TERMINATION_CHECK');
      Utils.showAlert({
        title: 'welcome back',
        message: 'welcome back!',
        buttonText: 'welcome back',
      });
      console.log('Start ON_SCREEN_FOCUS:4 NAVIGATE_SCREEN');
      navigation.navigate('BottomTabNavigator', { screen: 'Screen2BFeed' });
      console.log('Complete ON_SCREEN_FOCUS:4 NAVIGATE_SCREEN');
    } catch (err) {
      console.error(err);
      error = err.message ?? err;
    }
    console.log(
      'Screen ON_SCREEN_FOCUS Complete',
      error ? { error } : 'no error'
    );
  }, [isFocused]);

  return (
    <ScreenContainer
      style={[styles.screen, { backgroundColor: theme.colors._06Secondary }]}
      hasSafeArea={true}
      scrollable={true}
      hasTopSafeArea={false}
    >
      <View style={styles.Viewd329b5db}>
        {/* Content */}
        <View style={styles.Viewcd4b5a75}>
          <Image
            style={styles.Image7ae3bed6}
            resizeMode={'cover'}
            source={Images.Frame}
          />
          <Text
            style={[styles.Textec67c0bd, { color: theme.colors['02 Body'] }]}
          >
            {'Discover and share your favourite tracks'}
          </Text>
        </View>
        {/* Buttons */}
        <View style={styles.View3c2a9605}>
          {/* Sign up */}
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('Screen1BSignUp');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidc6c6276e,
              {
                backgroundColor: theme.colors._01Primary,
                borderColor: theme.colors._01Primary,
              },
            ]}
            title={'Sign up'}
            disabled={false}
          />
          {/* Log in */}
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('Screen1ASignIn');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolid184d9d3e,
              {
                backgroundColor: theme.colors['06 Secondary'],
                borderColor: theme.colors['04 Border'],
                color: theme.colors._01Primary,
              },
            ]}
            disabled={false}
            title={'Log in'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid184d9d3e: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 10,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 14,
    height: 36,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    textAlign: 'center',
  },
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
  Image7ae3bed6: {
    height: 32,
    marginBottom: 16,
    width: 240,
  },
  Textec67c0bd: {
    fontFamily: 'SpaceGrotesk_400Regular',
    lineHeight: 20,
    textAlign: 'center',
  },
  View3c2a9605: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 24,
  },
  Viewcd4b5a75: {
    alignItems: 'center',
    marginTop: 48,
  },
  Viewd329b5db: {
    flex: 1,
    justifyContent: 'space-between',
  },
  screen: {
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
});

export default withTheme(Screen1Launch);
