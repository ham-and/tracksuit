import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen3AProfileSelf = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors._06Secondary }}
      hasSafeArea={false}
      scrollable={false}
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
              {Constants['user_username']}
            </Text>
          </View>

          <View style={styles.View43207fca}>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen4ASettings');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Icon
                style={styles.Icon869bce86}
                size={24}
                name={'Feather/menu'}
              />
            </Touchable>
          </View>
        </ScrollView>
      </View>
      <ScrollView
        contentContainerStyle={styles.ScrollViewc992f941Content}
        showsVerticalScrollIndicator={true}
        bounces={true}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
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
  ScrollViewc992f941Content: {
    flex: 1,
  },
  Text6b505a1b: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 16,
    lineHeight: 24,
    paddingBottom: 16,
    paddingTop: 16,
    textAlign: 'left',
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
  View6a955cc3: {
    justifyContent: 'center',
  },
});

export default withTheme(Screen3AProfileSelf);
