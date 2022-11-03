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
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Screen4BFeedback = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const xanoPOSTFeedbackPOST = XanoApi.usePOSTFeedbackPOST();

  const [description_input, setDescription_input] = React.useState('');
  const [feedbackValue, setFeedbackValue] = React.useState('');
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
      <View style={styles.View1230205a}>
        <Row justifyContent={'space-between'} alignItems={'flex-start'}>
          <Text
            style={[styles.Text45f6b6b9, { color: theme.colors._01Primary }]}
          >
            {'Feedback'}
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
            <Icon style={styles.Iconb86346ac} size={24} name={'Feather/x'} />
          </Touchable>
        </Row>
        <Divider
          style={styles.Dividerde11d607}
          color={theme.colors._04Border}
        />
      </View>

      <View style={styles.View6e13d8dd}>
        {/* Feedback */}
        <View style={styles.View33d4974a}>
          <View>
            <Text
              style={[styles.Text0ddaf33b, { color: theme.colors._01Primary }]}
            >
              {'Share feedback'}
            </Text>
            {/* feedback */}
            <TextInput
              onChangeText={newFeedbackValue => {
                try {
                  setFeedbackValue(newFeedbackValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInput5153d201,
                { borderColor: theme.colors._04Border },
              ]}
              placeholder={"What's on your mind?"}
              value={feedbackValue}
              keyboardType={'default'}
              returnKeyType={'done'}
              placeholderTextColor={theme.colors._03Disabled}
              clearButtonMode={'while-editing'}
              clearTextOnFocus={false}
              multiline={true}
              autoFocus={true}
            />
          </View>
        </View>

        <View>
          {/* Post button */}
          <ButtonSolid
            onPress={() => {
              const handler = async () => {
                try {
                  const feedbackResponse =
                    await xanoPOSTFeedbackPOST.mutateAsync({
                      feedback: feedbackValue,
                      userId: Constants['user_id'],
                      username: Constants['user_username'],
                    });
                  Utils.showAlert({
                    title: 'Feedback submitted',
                    message: 'Thanks for making Tracksuit a better place',
                    buttonText: 'Back to Feed',
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
              styles.ButtonSolidbc4a8c35,
              {
                backgroundColor: theme.colors._01Primary,
                borderColor: theme.colors._01Primary,
              },
            ]}
            disabled={false}
            title={'Send feedback'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidbc4a8c35: {
    borderRadius: 10,
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 14,
    height: 36,
    lineHeight: 20,
    textAlign: 'center',
  },
  Dividerde11d607: {
    height: 1,
  },
  Iconb86346ac: {
    marginBottom: 12,
    marginRight: 16,
    marginTop: 12,
  },
  Text0ddaf33b: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 14,
    lineHeight: 20,
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
  TextInput5153d201: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 4,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 14,
    height: 160,
    lineHeight: 20,
    marginTop: 4,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  View1230205a: {
    marginTop: 0,
  },
  View33d4974a: {
    marginLeft: 0,
    marginRight: 0,
  },
  View6e13d8dd: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 24,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 24,
  },
});

export default withTheme(Screen4BFeedback);
