import React from 'react';
import {
  Divider,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const Screen4EDonate = props => {
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
      {/* Header */}
      <View style={styles.View1230205a}>
        <Row justifyContent={'space-between'} alignItems={'flex-start'}>
          <Text
            style={[styles.Text45f6b6b9, { color: theme.colors._01Primary }]}
          >
            {'Donate'}
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
            <Icon style={styles.Iconb86346ac} name={'Feather/x'} size={24} />
          </Touchable>
        </Row>
        <Divider
          style={styles.Dividerde11d607}
          color={theme.colors._04Border}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Dividerde11d607: {
    height: 1,
  },
  Iconb86346ac: {
    marginBottom: 12,
    marginRight: 16,
    marginTop: 12,
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
  View1230205a: {
    marginTop: 0,
  },
});

export default withTheme(Screen4EDonate);
