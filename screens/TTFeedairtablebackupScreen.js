import React from 'react';
import * as TracksuitAirbaseApi from '../apis/TracksuitAirbaseApi.js';
import {
  ButtonOutline,
  Divider,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const TTFeedairtablebackupScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [sort_direction, setSort_direction] = React.useState('desc');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors._06Secondary }}
      scrollable={true}
      hasSafeArea={false}
      hasTopSafeArea={false}
    >
      {/* Header */}
      <ScrollView
        contentContainerStyle={styles.ScrollViewc1902a92Content}
        showsVerticalScrollIndicator={true}
        bounces={true}
        showsHorizontalScrollIndicator={false}
      >
        <Row justifyContent={'space-between'} alignItems={'flex-start'}>
          <Text
            style={[styles.Textcb5eec30, { color: theme.colors._01Primary }]}
          >
            {'Music'}
          </Text>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('Screen4BFeedback');
              } catch (err) {
                console.error(err);
              }
            }}
            style={{ borderColor: theme.colors._01Primary }}
          >
            <Icon
              style={styles.Icona3d7e8e0}
              size={24}
              color={theme.colors._01Primary}
              name={'Feather/message-circle'}
            />
          </Touchable>
        </Row>
        <Divider
          style={styles.Dividerde11d607}
          color={theme.colors._04Border}
        />
      </ScrollView>

      <ScrollView
        contentContainerStyle={styles.ScrollViewc992f941Content}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <TracksuitAirbaseApi.FetchGETTracksSortedGET
          direction={sort_direction}
          field={'Created'}
        >
          {({ loading, error, data, refetchGETTracksSorted }) => {
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
              <>
                <FlatList
                  data={fetchData?.records}
                  listKey={'Bp0GPKBI'}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <>
                        {/* Track post */}
                        <View style={styles.View293234f4}>
                          <Touchable
                            onPress={() => {
                              const handler = async () => {
                                try {
                                  await WebBrowser.openBrowserAsync(
                                    `${listData?.fields?.trackUrl}`
                                  );
                                } catch (err) {
                                  console.error(err);
                                }
                              };
                              handler();
                            }}
                          >
                            <Row
                              justifyContent={'flex-start'}
                              alignItems={'flex-start'}
                            >
                              {/* Full name */}
                              <>
                                {!listData?.createdTime ? null : (
                                  <Text
                                    style={[
                                      styles.Textb5d899a9,
                                      { color: theme.colors._07ActionText },
                                    ]}
                                  >
                                    {listData?.fields?.full_Name &&
                                      listData?.fields?.full_Name[0]}
                                  </Text>
                                )}
                              </>
                            </Row>
                            {/* track caption */}
                            <Text
                              style={[
                                styles.Texta4bfa93d,
                                { color: theme.colors._02Body },
                              ]}
                            >
                              {listData?.fields?.description}
                            </Text>
                            {/* track name */}
                            <Text
                              style={[
                                styles.Text1fda2afa,
                                { color: theme.colors._01Primary },
                              ]}
                            >
                              {listData?.fields?.Name}
                            </Text>
                            {/* CTA */}
                            <ButtonOutline
                              onPress={() => {
                                const handler = async () => {
                                  try {
                                    await WebBrowser.openBrowserAsync(
                                      `${listData?.fields?.trackUrl}`
                                    );
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                              style={[
                                styles.ButtonOutline4648c4a0,
                                {
                                  borderColor: theme.colors._04Border,
                                  color: theme.colors._01Primary,
                                },
                              ]}
                              title={'Play track'}
                              disabled={false}
                            />
                          </Touchable>
                          <Divider
                            style={styles.Dividerde11d607}
                            color={theme.colors._04Border}
                          />
                        </View>
                      </>
                    );
                  }}
                  contentContainerStyle={styles.FlatListc992f941Content}
                  numColumns={1}
                />
                <ButtonOutline
                  onPress={() => {
                    try {
                      navigation.navigate('Screen1Launch');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonOutline6101a062,
                    {
                      color: theme.colors._03Disabled,
                      borderColor: theme.colors._06Secondary,
                    },
                  ]}
                  title={'Restart'}
                />
              </>
            );
          }}
        </TracksuitAirbaseApi.FetchGETTracksSortedGET>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonOutline4648c4a0: {
    backgroundColor: 'transparent',
    borderRadius: 4,
    borderWidth: 1,
    fontFamily: 'SpaceGrotesk_600SemiBold',
    height: 40,
    marginBottom: 24,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    textAlign: 'center',
  },
  ButtonOutline6101a062: {
    backgroundColor: 'transparent',
    borderRadius: 4,
    borderWidth: 1,
    fontFamily: 'SpaceGrotesk_600SemiBold',
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    textAlign: 'center',
  },
  Dividerde11d607: {
    height: 1,
  },
  Fetch431eb058: {
    minHeight: 40,
  },
  FlatListc992f941Content: {
    flex: 1,
  },
  Icona3d7e8e0: {
    marginBottom: 12,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 12,
  },
  Iconb86346ac: {
    marginBottom: 12,
    marginRight: 16,
    marginTop: 12,
  },
  ScrollViewc1902a92Content: {
    marginTop: 44,
  },
  ScrollViewc992f941Content: {
    flex: 1,
  },
  Text1fda2afa: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 15,
    lineHeight: 24,
    marginLeft: 16,
    marginRight: 16,
  },
  Text2ec28dbe: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 15,
    lineHeight: 24,
    marginLeft: 4,
    paddingBottom: 8,
  },
  Texta4bfa93d: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 15,
    lineHeight: 20,
    marginLeft: 16,
    marginRight: 16,
    paddingBottom: 8,
  },
  Textb5d899a9: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 15,
    lineHeight: 24,
    marginLeft: 16,
    paddingBottom: 8,
  },
  Textcb5eec30: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 12,
  },
  View293234f4: {
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 24,
  },
  View91edb4b3: {
    marginTop: 8,
  },
});

export default withTheme(TTFeedairtablebackupScreen);
