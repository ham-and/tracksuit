import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  Checkbox,
  Divider,
  Icon,
  IconButton,
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
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const TTFeedCheckboxplaygroundScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const xanoPOSTLikesPOST = XanoApi.usePOSTLikesPOST();

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [sort_direction, setSort_direction] = React.useState('desc');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={[styles.screen, { backgroundColor: theme.colors['06 Secondary'] }]}
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
      hasBottomSafeArea={false}
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
          bounces={true}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.View6a955cc3}>
            <Text
              style={[
                styles.Textc908c464,
                { color: theme.colors['01 Primary'] },
              ]}
            >
              {'Tracks'}
            </Text>
          </View>

          <View style={styles.View43207fca}>
            <Touchable>
              <Icon
                style={styles.Icon869bce86}
                size={24}
                name={'Ionicons/ios-bookmark-outline'}
                color={theme.colors['01 Primary']}
              />
            </Touchable>
          </View>
        </ScrollView>
      </View>

      <ScrollView bounces={true} showsVerticalScrollIndicator={false}>
        <XanoApi.FetchGETTracksExtGET>
          {({ loading, error, data, refetchGETTracksExt }) => {
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
                data={fetchData?.result_1}
                listKey={'z7IIisKY'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <>
                      {/* Post */}
                      <View
                        style={[
                          styles.Viewb0de33cb,
                          { borderColor: theme.colors['04 Border'] },
                        ]}
                      >
                        {/* Author */}
                        <Row
                          alignItems={'flex-start'}
                          justifyContent={'flex-start'}
                        >
                          <Image
                            style={styles.Imageb7c71631}
                            resizeMode={'cover'}
                            source={Images.Avitar}
                          />
                          <View>
                            {/* username */}
                            <Text
                              style={[
                                styles.Text7565906b,
                                { color: theme.colors['01 Primary'] },
                              ]}
                            >
                              {listData && listData['_user']?.username}
                            </Text>
                            {/* date */}
                            <Text
                              style={[
                                styles.Text785ff173,
                                { color: theme.colors['02 Body'] },
                              ]}
                            >
                              {'1d ago'}
                            </Text>
                          </View>
                        </Row>
                        {/* Description */}
                        <View style={styles.Viewf8304bf6}>
                          <Text
                            style={[
                              styles.Text3372bb74,
                              { color: theme.colors._02Body },
                            ]}
                          >
                            {listData?.description}
                          </Text>
                        </View>
                        {/* Link */}
                        <Touchable
                          onPress={() => {
                            const handler = async () => {
                              try {
                                await WebBrowser.openBrowserAsync(
                                  `${listData?.trackUrl}`
                                );
                              } catch (err) {
                                console.error(err);
                              }
                            };
                            handler();
                          }}
                          style={[
                            styles.Touchable8c80ae35,
                            {
                              borderRadius: 10,
                              borderColor: theme.colors['04 Border'],
                            },
                          ]}
                        >
                          {/* Content */}
                          <View
                            style={[
                              styles.View5b2d607e,
                              {
                                borderColor: theme.colors['04 Border'],
                                borderRadius: 10,
                              },
                            ]}
                          >
                            {/* Image */}
                            <View style={styles.View117ace62}>
                              <Image
                                style={[
                                  styles.Image272360f8,
                                  { borderRadius: 10 },
                                ]}
                                resizeMode={'cover'}
                                source={Images.CoverArt}
                              />
                            </View>
                            {/* Text */}
                            <View style={styles.View3d427558}>
                              <View>
                                {/* Track */}
                                <Text
                                  style={[
                                    styles.Text2ef85b0e,
                                    { color: theme.colors._01Primary },
                                  ]}
                                  numberOfLines={1}
                                  ellipsizeMode={'tail'}
                                >
                                  {listData?.title}
                                </Text>
                                {/* Track */}
                                <Text
                                  style={[
                                    styles.Text15d50375,
                                    { color: theme.colors['02 Body'] },
                                  ]}
                                  numberOfLines={1}
                                  ellipsizeMode={'tail'}
                                >
                                  {listData?.artist}
                                </Text>
                              </View>
                              {/* Link */}
                              <Text
                                style={[
                                  styles.Text9b03f362,
                                  { color: theme.colors['02 Body'] },
                                ]}
                              >
                                {'open.tracksuit.link'}
                              </Text>
                            </View>
                          </View>
                        </Touchable>
                        {/* Actions */}
                        <View style={styles.View91edb4b3}>
                          {/* Social */}
                          <View style={styles.Viewdd62dc42}>
                            {/* Like */}
                            <Touchable style={styles.Touchable27d4405a}>
                              <View
                                style={[
                                  styles.View0b69746a,
                                  {
                                    borderRadius: 10,
                                    borderColor: theme.colors['04 Border'],
                                  },
                                ]}
                              >
                                {/* Like */}
                                <Checkbox
                                  status={checkboxValue}
                                  color={theme.colors['like']}
                                  uncheckedColor={theme.colors['01 Primary']}
                                  checkedIcon={'Ionicons/heart-sharp'}
                                  uncheckedIcon={'Ionicons/heart-outline'}
                                  size={23}
                                />
                              </View>
                            </Touchable>
                            {/* Comment */}
                            <Touchable style={styles.Touchable27d4405a}>
                              <View
                                style={[
                                  styles.Viewebaa5a72,
                                  {
                                    borderRadius: 10,
                                    borderColor: theme.colors['04 Border'],
                                  },
                                ]}
                              >
                                {/* Comment */}
                                <Icon
                                  color={theme.colors['01 Primary']}
                                  name={'Ionicons/chatbubble-outline'}
                                  size={20}
                                />
                              </View>
                            </Touchable>
                            {/* Bookmark */}
                            <Touchable>
                              <View
                                style={[
                                  styles.Viewebaa5a72,
                                  {
                                    borderRadius: 10,
                                    borderColor: theme.colors['04 Border'],
                                  },
                                ]}
                              >
                                {/* Bookmark */}
                                <Checkbox
                                  onPress={newBookmarkValue => {
                                    const handler = async () => {
                                      const checkboxValue = newBookmarkValue;
                                      console.log('Bookmark ON_PRESS Start');
                                      let error = null;
                                      try {
                                        console.log(
                                          'Start ON_PRESS:0 FETCH_REQUEST'
                                        );
                                        const likeResponse =
                                          await xanoPOSTLikesPOST.mutateAsync({
                                            tracks_id: listData?.id,
                                            users_id: Constants['user_id'],
                                          });
                                        console.log(
                                          'Complete ON_PRESS:0 FETCH_REQUEST',
                                          { likeResponse }
                                        );
                                        console.log(
                                          'Start ON_PRESS:1 CONSOLE_LOG'
                                        );
                                        console.log(likeResponse);
                                        console.log(
                                          'Complete ON_PRESS:1 CONSOLE_LOG'
                                        );
                                        console.log(
                                          'Start ON_PRESS:2 CONSOLE_LOG'
                                        );
                                        console.log(newBookmarkValue);
                                        console.log(
                                          'Complete ON_PRESS:2 CONSOLE_LOG'
                                        );
                                      } catch (err) {
                                        console.error(err);
                                        error = err.message ?? err;
                                      }
                                      console.log(
                                        'Bookmark ON_PRESS Complete',
                                        error ? { error } : 'no error'
                                      );
                                    };
                                    handler();
                                  }}
                                  uncheckedIcon={'Ionicons/bookmark-outline'}
                                  color={theme.colors['01 Primary']}
                                  uncheckedColor={theme.colors['01 Primary']}
                                  size={20}
                                  checkedIcon={'Ionicons/bookmark'}
                                  defaultValue={listData?.userliked}
                                />
                              </View>
                            </Touchable>
                          </View>
                          <>
                            {!listData?.userliked ? null : (
                              <IconButton
                                onPress={() => {
                                  const handler = async () => {
                                    console.log('Icon Button ON_PRESS Start');
                                    let error = null;
                                    try {
                                      console.log(
                                        'Start ON_PRESS:0 FETCH_REQUEST'
                                      );
                                      await xanoPOSTLikesPOST.mutateAsync({
                                        tracks_id: listData?.id,
                                        users_id: Constants['user_id'],
                                      });
                                      console.log(
                                        'Complete ON_PRESS:0 FETCH_REQUEST'
                                      );
                                    } catch (err) {
                                      console.error(err);
                                      error = err.message ?? err;
                                    }
                                    console.log(
                                      'Icon Button ON_PRESS Complete',
                                      error ? { error } : 'no error'
                                    );
                                  };
                                  handler();
                                }}
                                icon={'FontAwesome/photo'}
                                size={32}
                                color={theme.colors['09 Negative text']}
                              />
                            )}
                          </>
                          <>
                            {listData?.userliked ? null : (
                              <IconButton
                                onPress={() => {
                                  const handler = async () => {
                                    console.log('Icon Button ON_PRESS Start');
                                    let error = null;
                                    try {
                                      console.log(
                                        'Start ON_PRESS:0 FETCH_REQUEST'
                                      );
                                      await xanoPOSTLikesPOST.mutateAsync({
                                        tracks_id: listData?.id,
                                        users_id: Constants['user_id'],
                                      });
                                      console.log(
                                        'Complete ON_PRESS:0 FETCH_REQUEST'
                                      );
                                      console.log(
                                        'Start ON_PRESS:1 CONSOLE_LOG'
                                      );
                                      console.log(fetchData);
                                      console.log(
                                        'Complete ON_PRESS:1 CONSOLE_LOG'
                                      );
                                    } catch (err) {
                                      console.error(err);
                                      error = err.message ?? err;
                                    }
                                    console.log(
                                      'Icon Button ON_PRESS Complete',
                                      error ? { error } : 'no error'
                                    );
                                  };
                                  handler();
                                }}
                                icon={'FontAwesome/photo'}
                                size={32}
                                color={theme.colors['03 Disabled']}
                              />
                            )}
                          </>
                        </View>
                        {/* Stats */}
                        <View style={styles.View6728d304}>
                          <Text
                            style={[
                              styles.Text7effd8b6,
                              { color: theme.colors['02 Body'] },
                            ]}
                          >
                            {'420 plays · 68 likes · 4 comments '}
                          </Text>
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
        </XanoApi.FetchGETTracksExtGET>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Dividerde11d607: {
    height: 1,
  },
  Fetch431eb058: {
    minHeight: 40,
  },
  FlatListc992f941Content: {
    flex: 1,
  },
  Icon869bce86: {
    marginBottom: 8,
    marginLeft: 8,
    marginTop: 8,
  },
  Iconb86346ac: {
    marginBottom: 12,
    marginRight: 16,
    marginTop: 12,
  },
  Iconddb41ff1: {
    marginBottom: 12,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 12,
  },
  Image272360f8: {
    height: 64,
    width: 64,
  },
  Imageb7c71631: {
    height: 36,
    marginRight: 8,
    width: 36,
  },
  ScrollView9c5f127c: {
    height: 56,
    width: '100%',
  },
  ScrollView9c5f127cContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ScrollViewe4660988: {
    height: 120,
  },
  Text15d50375: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 13,
    lineHeight: 16,
    marginBottom: 6,
  },
  Text2ef85b0e: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 4,
  },
  Text3372bb74: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 14,
    lineHeight: 18,
  },
  Text7565906b: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 14,
    lineHeight: 20,
  },
  Text785ff173: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 12,
    lineHeight: 16,
  },
  Text7effd8b6: {
    fontFamily: 'SpaceGrotesk_400Regular',
    lineHeight: 18,
  },
  Text9b03f362: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 12,
    lineHeight: 16,
  },
  Textc908c464: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
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
  Touchable27d4405a: {
    marginRight: 8,
  },
  Touchable8c80ae35: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    marginTop: 8,
  },
  Touchableabfaec79: {
    height: 56,
  },
  View0b69746a: {
    alignContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 36,
    justifyContent: 'center',
    paddingTop: 2,
    width: 36,
  },
  View117ace62: {
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  View1ef8e7e8: {
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  View3d427558: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 8,
  },
  View43207fca: {
    height: 40,
    marginBottom: 8,
    marginTop: 8,
    width: 32,
  },
  View5b2d607e: {
    flexDirection: 'row',
  },
  View6728d304: {
    marginTop: 16,
  },
  View6a955cc3: {
    justifyContent: 'center',
  },
  View91edb4b3: {
    marginTop: 8,
  },
  Viewb0de33cb: {
    borderBottomWidth: 1,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
  },
  Viewdd62dc42: {
    flexDirection: 'row',
    height: 36,
  },
  Viewebaa5a72: {
    alignContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  Viewf8304bf6: {
    marginTop: 12,
  },
  screen: {
    flex: 1,
  },
});

export default withTheme(TTFeedCheckboxplaygroundScreen);
