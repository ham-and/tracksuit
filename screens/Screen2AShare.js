import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import {
  ButtonSolid,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Screen2AShare = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const xanoPOSTTracksPOST = XanoApi.usePOSTTracksPOST();

  const [artist_input, setArtist_input] = React.useState('');
  const [description_input, setDescription_input] = React.useState('');
  const [name_input, setName_input] = React.useState('');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [url_input, setUrl_input] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors._06Secondary }}
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
      hasBottomSafeArea={false}
    >
      {/* Header */}
      <View
        style={[
          styles.Viewbdcd4dfa,
          { borderColor: theme.colors['04 Border'] },
        ]}
      >
        <View style={styles.Viewa2a83a81}>
          <Text
            style={[styles.Textc908c464, { color: theme.colors['01 Primary'] }]}
          >
            {'New post'}
          </Text>
        </View>

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
          style={styles.Touchableeb7cd7f2}
        >
          <View style={styles.View145f8fb2}>
            <Icon
              size={24}
              name={'Feather/x'}
              color={theme.colors['01 Primary']}
            />
          </View>
        </Touchable>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={styles.KeyboardAwareScrollViewa16b39f2Content}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        {/* Form */}
        <View>
          {/* Title */}
          <View style={styles.View7245b3d8}>
            <Text
              style={[styles.Text4f64c130, { color: theme.colors._01Primary }]}
            >
              {'Title'}
            </Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setName_input(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInput4f70e07c,
                { borderColor: theme.colors._04Border },
              ]}
              placeholder={'Robot Rock'}
              returnKeyType={'done'}
              keyboardType={'default'}
              placeholderTextColor={theme.colors._03Disabled}
              clearButtonMode={'while-editing'}
              autoCapitalize={'words'}
              selectTextOnFocus={false}
            />
          </View>
          {/* Artist */}
          <View style={styles.View7245b3d8}>
            {/* Artist */}
            <Text
              style={[styles.Text4f64c130, { color: theme.colors._01Primary }]}
            >
              {'Artist'}
            </Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setArtist_input(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInput4f70e07c,
                { borderColor: theme.colors._04Border },
              ]}
              placeholder={'Daft Punk'}
              keyboardType={'default'}
              placeholderTextColor={theme.colors._03Disabled}
              clearButtonMode={'while-editing'}
              returnKeyType={'done'}
              autoCapitalize={'words'}
            />
          </View>
          {/* Link */}
          <View style={styles.View7245b3d8}>
            <Text
              style={[styles.Text524c0d6d, { color: theme.colors._01Primary }]}
            >
              {'Track link'}
            </Text>
            {/* Url Input */}
            <TextInput
              onChangeText={newUrlInputValue => {
                try {
                  setUrl_input(newUrlInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInput7380a33b,
                { borderColor: theme.colors._04Border },
              ]}
              placeholder={'open.spotify.com/track/link-details'}
              returnKeyType={'done'}
              placeholderTextColor={theme.colors._03Disabled}
              multiline={false}
              textContentType={'URL'}
              clearButtonMode={'unless-editing'}
            />
          </View>
          {/* Description */}
          <View style={styles.View7245b3d8}>
            <Text
              style={[styles.Textcaeeaa35, { color: theme.colors._01Primary }]}
            >
              {'Description'}
            </Text>
            {/* description */}
            <TextInput
              onChangeText={newDescriptionValue => {
                try {
                  setDescription_input(newDescriptionValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInputd0c4d140,
                { borderColor: theme.colors._04Border },
              ]}
              placeholder={'Just a bunch of daft punks'}
              returnKeyType={'done'}
              keyboardType={'default'}
              placeholderTextColor={theme.colors._03Disabled}
              clearButtonMode={'while-editing'}
              autoCapitalize={'sentences'}
            />
          </View>
        </View>

        <View style={styles.Viewb313e3e6}>
          {/* Post button */}
          <ButtonSolid
            onPress={() => {
              const handler = async () => {
                console.log('Post button ON_PRESS Start');
                let error = null;
                try {
                  console.log('Start ON_PRESS:0 FETCH_REQUEST');
                  const response_post = await xanoPOSTTracksPOST.mutateAsync({
                    artist: artist_input,
                    description: description_input,
                    title: name_input,
                    url: url_input,
                    users_id: Constants['user_id'],
                  });
                  console.log('Complete ON_PRESS:0 FETCH_REQUEST', {
                    response_post,
                  });
                  console.log('Start ON_PRESS:1 CONSOLE_LOG');
                  console.log(response_post);
                  console.log('Complete ON_PRESS:1 CONSOLE_LOG');
                  Utils.showAlert({
                    title: 'Success!',
                    message: 'Track posted',
                    buttonText: 'Back to feed',
                  });
                  console.log('Start ON_PRESS:3 SET_SCREEN_LOCAL_STATE');
                  setUrl_input('');
                  console.log('Complete ON_PRESS:3 SET_SCREEN_LOCAL_STATE');
                  console.log('Start ON_PRESS:7 NAVIGATE_SCREEN');
                  navigation.navigate('BottomTabNavigator', {
                    screen: 'Screen2BFeed',
                  });
                  console.log('Complete ON_PRESS:7 NAVIGATE_SCREEN');
                } catch (err) {
                  console.error(err);
                  error = err.message ?? err;
                }
                console.log(
                  'Post button ON_PRESS Complete',
                  error ? { error } : 'no error'
                );
              };
              handler();
            }}
            style={[
              styles.ButtonSolid0c5f4bb4,
              {
                borderColor: theme.colors._01Primary,
                backgroundColor: theme.colors._01Primary,
              },
            ]}
            title={'Post track'}
            disabled={false}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid0c5f4bb4: {
    borderRadius: 10,
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 14,
    height: 36,
    lineHeight: 40,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 0,
    textAlign: 'center',
  },
  KeyboardAwareScrollViewa16b39f2Content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  Text4f64c130: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 15,
    lineHeight: 20,
    marginTop: 24,
  },
  Text524c0d6d: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 15,
    lineHeight: 20,
    marginTop: 24,
  },
  TextInput4f70e07c: {
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
  TextInput7380a33b: {
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
  TextInputd0c4d140: {
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
  Textc908c464: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
  },
  Textcaeeaa35: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 15,
    lineHeight: 20,
    marginTop: 24,
  },
  Touchableeb7cd7f2: {
    height: 56,
  },
  View145f8fb2: {
    height: 56,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  View7245b3d8: {
    marginLeft: 16,
    marginRight: 16,
  },
  Viewa2a83a81: {
    height: 56,
    justifyContent: 'center',
  },
  Viewb313e3e6: {
    paddingBottom: 24,
  },
  Viewbdcd4dfa: {
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(Screen2AShare);
