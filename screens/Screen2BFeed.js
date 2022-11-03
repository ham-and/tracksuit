import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  Checkbox,
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
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const Screen2BFeed = props => {
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
          styles.View63690a8d,
          { borderColor: theme.colors['04 Border'] },
        ]}
      >
        <View style={styles.View6a955cc3}>
          <Text
            style={[styles.Textc908c464, { color: theme.colors['01 Primary'] }]}
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
      </View>

      <ScrollView bounces={true} showsVerticalScrollIndicator={false}>
        <XanoApi.FetchGETTracksExtGET user_id={Constants['user_id']}>
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
                listKey={'LGJSbOkr'}
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
                          <View style={styles.View25c2c1a5}>
                            {/* username */}
                            <Text
                              style={[
                                styles.Text21f1b2c3,
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
                              {/* Song */}
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
                                {/* Artist */}
                                <Text
                                  style={[
                                    styles.Text47766d43,
                                    { color: theme.colors['02 Body'] },
                                  ]}
                                  numberOfLines={1}
                                  ellipsizeMode={'tail'}
                                >
                                  {listData?.artist}
                                </Text>
                              </View>
                              {/* Plays */}
                              <Text
                                style={[
                                  styles.Texte9511d5f,
                                  { color: theme.colors['02 Body'] },
                                ]}
                              >
                                {'125 plays · Tracksuit'}
                              </Text>
                            </View>
                          </View>
                        </Touchable>
                        {/* Actions */}
                        <View style={styles.Viewb078db66}>
                          {/* Social */}
                          <View style={styles.Viewdd62dc42}>
                            {/* Like */}
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
                                {/* Like */}
                                <Checkbox
                                  onPress={newLikeValue => {
                                    const handler = async () => {
                                      const checkboxValue = newLikeValue;
                                      try {
                                        const likeResponse =
                                          await xanoPOSTLikesPOST.mutateAsync({
                                            tracks_id: listData?.id,
                                            users_id: Constants['user_id'],
                                          });
                                        console.log(newLikeValue);
                                        console.log(listData?.userliked);
                                        console.log(likeResponse);
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    };
                                    handler();
                                  }}
                                  style={styles.Checkboxe359ef9f}
                                  uncheckedColor={theme.colors['01 Primary']}
                                  size={23}
                                  color={theme.colors['like']}
                                  checkedIcon={'Ionicons/heart-sharp'}
                                  uncheckedIcon={'Ionicons/heart-outline'}
                                  defaultValue={listData?.userliked}
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
                          </View>
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
                                status={checkboxValue}
                                uncheckedColor={theme.colors['01 Primary']}
                                uncheckedIcon={'Ionicons/bookmark-outline'}
                                color={theme.colors['01 Primary']}
                                size={20}
                                checkedIcon={'Ionicons/bookmark'}
                              />
                            </View>
                          </Touchable>
                        </View>
                        {/* Stats */}
                        <View style={styles.Viewf8304bf6}>
                          <Text
                            style={[
                              styles.Text7effd8b6,
                              { color: theme.colors['02 Body'] },
                            ]}
                          >
                            {'68 likes · 4 comments '}
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
  Checkboxe359ef9f: {
    marginTop: 1.5,
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
  ScrollViewe4660988: {
    height: 120,
  },
  Text21f1b2c3: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 14,
    lineHeight: 18,
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
  Text47766d43: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 13,
    lineHeight: 16,
    marginBottom: 6,
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
  Texte9511d5f: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 13,
    lineHeight: 16,
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
  View117ace62: {
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  View25c2c1a5: {
    alignSelf: 'center',
    flex: 1,
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
  View63690a8d: {
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },
  View6a955cc3: {
    justifyContent: 'center',
  },
  Viewb078db66: {
    flexDirection: 'row',
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

export default withTheme(Screen2BFeed);
