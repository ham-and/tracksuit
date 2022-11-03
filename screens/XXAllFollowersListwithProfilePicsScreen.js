import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Images from '../config/Images';
import {
  CircleImage,
  Icon,
  Link,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const XXAllFollowersListwithProfilePicsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(true);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Header Frame */}
      <View style={styles.Viewdbf79098}>
        {/* Navigation Frame */}
        <View style={styles.View0d6090cf}>
          {/* Flex Touchable */}
          <View style={styles.View0419a0dc}>
            <Touchable
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Left Frame */}
              <View style={styles.View408345b6}>
                {/* Icon Frame */}
                <View style={styles.View8c65efc9}>
                  {/* Back */}
                  <Icon
                    name={'AntDesign/arrowleft'}
                    size={24}
                    color={theme.colors.custom_rgb97_116_246}
                  />
                </View>
                {/* Screen Title Frame */}
                <View style={styles.View8c65efc9}>
                  {/* Title */}
                  <Text
                    style={[
                      styles.Text4cb05b5c,
                      { color: theme.colors.strong },
                    ]}
                  >
                    {'Followers'}
                  </Text>
                </View>
              </View>
            </Touchable>
          </View>
        </View>
      </View>
      {/* Scroll Content Frame */}
      <ScrollView
        style={styles.ScrollView0419a0dc}
        contentContainerStyle={styles.ScrollView0419a0dcContent}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* Following List Frame */}
        <View style={styles.Viewf8304bf6}>
          {/* List Content Frame */}
          <View>
            {/* List Title Frame  */}
            <View style={styles.View12981c6a}>
              {/* Rich Text Title */}
              <Text
                style={[styles.Texte61fc18f, { color: theme.colors.strong }]}
              >
                {'Followers (2,121)'}
              </Text>
            </View>

            <DraftbitExampleDataApi.FetchExampleDataList10GET>
              {({ loading, error, data, refetchExampleDataList10 }) => {
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
                  <FlatList
                    data={fetchData}
                    listKey={'qs5MpxN2'}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <>
                          {/* Records Frame */}
                          <View style={styles.Viewf8304bf6}>
                            {/* Flex Touchable */}
                            <View style={styles.View006d6a31}>
                              <Touchable>
                                {/* Record Item Frame */}
                                <View
                                  style={[
                                    styles.View64289faf,
                                    {
                                      borderRadius: 12,
                                      borderColor:
                                        theme.colors.custom_rgb218_218_218,
                                    },
                                  ]}
                                >
                                  {/* Left Side Frame */}
                                  <View
                                    style={[
                                      styles.Viewc9239892,
                                      {
                                        borderTopLeftRadius: 12,
                                        borderBottomLeftRadius: 12,
                                      },
                                    ]}
                                  >
                                    {/* Review Image */}
                                    <CircleImage
                                      source={
                                        Images.CharlieGreen3JmfENcL24MUnsplash
                                      }
                                      size={64}
                                    />
                                  </View>
                                  {/* Middle Frame */}
                                  <View style={styles.Viewfcd7183b}>
                                    {/* Top Frame */}
                                    <View style={styles.View09162134}>
                                      {/* Record Name */}
                                      <Text
                                        style={[
                                          styles.Textfadb31ce,
                                          { color: theme.colors.strong },
                                        ]}
                                        ellipsizeMode={'tail'}
                                      >
                                        {'Michael Zanderous'}
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                              </Touchable>
                            </View>
                          </View>
                        </>
                      );
                    }}
                    contentContainerStyle={styles.FlatListc992f941Content}
                    numColumns={1}
                  />
                );
              }}
            </DraftbitExampleDataApi.FetchExampleDataList10GET>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Fetch431eb058: {
    minHeight: 40,
  },
  FlatListc992f941Content: {
    flex: 1,
  },
  Link37b9b356: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 12,
    lineHeight: 19,
  },
  ScrollView0419a0dc: {
    flexGrow: 1,
  },
  ScrollView0419a0dcContent: {
    flexShrink: 0,
  },
  Text49682267: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 12,
    lineHeight: 18,
  },
  Text4cb05b5c: {
    fontFamily: 'Belgrano_400Regular',
    fontSize: 18,
    lineHeight: 24,
  },
  Text6abadbba: {
    fontFamily: 'OpenSans_400Regular',
  },
  Texte61fc18f: {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 16,
  },
  Texte88e1c80: {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 10,
    lineHeight: 16,
  },
  Textfadb31ce: {
    fontFamily: 'OpenSans_700Bold',
    paddingBottom: 9,
  },
  View006d6a31: {
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
  },
  View0419a0dc: {
    flexGrow: 1,
    flexShrink: 0,
  },
  View09162134: {
    marginRight: 12,
  },
  View0d6090cf: {
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 0,
  },
  View12981c6a: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
  View408345b6: {
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
  },
  View64289faf: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 0,
    paddingBottom: 12,
    paddingTop: 12,
  },
  View6a955cc3: {
    justifyContent: 'center',
  },
  View6fc1f5de: {
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'center',
  },
  View8c65efc9: {
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
  View9cb80b09: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 6,
  },
  Viewa2936e94: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 0,
  },
  Viewc9239892: {
    alignItems: 'center',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'center',
    paddingLeft: 12,
  },
  Viewda20f949: {
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  Viewdbf79098: {
    flexGrow: 0,
    flexShrink: 0,
  },
  Viewf6daf3cb: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'center',
    marginRight: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 6,
  },
  Viewf8304bf6: {
    marginTop: 12,
  },
  Viewfcd7183b: {
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
    marginLeft: 18,
  },
  Viewfe2670fd: {
    marginRight: 3,
  },
});

export default withTheme(XXAllFollowersListwithProfilePicsScreen);
