import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  ButtonOutline,
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

const TTFeedScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;

  const xanoPOSTLikesPOST = XanoApi.usePOSTLikesPOST();

  const [sort_direction, setSort_direction] = React.useState('desc');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors._06Secondary }}
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={false}
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
              {'Tracks'}
            </Text>
          </View>

          <View style={styles.View43207fca}>
            <Touchable>
              <Icon
                style={styles.Icon869bce86}
                size={24}
                name={'Feather/headphones'}
              />
            </Touchable>
          </View>
        </ScrollView>
      </View>

      <ScrollView
        contentContainerStyle={styles.ScrollViewc992f941Content}
        bounces={true}
        showsVerticalScrollIndicator={false}
      >
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
                listKey={'Semvp3Zo'}
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
                                styles.Text6a772b9d,
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
                              styles.Text202a59dd,
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
                          style={styles.Touchable91edb4b3}
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
                                  styles.Image5f82c078,
                                  { borderRadius: 4 },
                                ]}
                                resizeMode={'cover'}
                              />
                            </View>
                            {/* Text */}
                            <View style={styles.View3d427558}>
                              {/* Track */}
                              <Text
                                style={[
                                  styles.Text57c23719,
                                  { color: theme.colors._01Primary },
                                ]}
                                numberOfLines={2}
                              >
                                {listData?.title}
                                {'\n'}
                                {listData?.artist}
                              </Text>
                              {/* Link */}
                              <Text
                                style={[
                                  styles.Text6b78be6f,
                                  { color: theme.colors['02 Body'] },
                                ]}
                              >
                                {'tracksuit.open.link'}
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
                                  styles.Viewebaa5a72,
                                  {
                                    borderRadius: 10,
                                    borderColor: theme.colors['04 Border'],
                                  },
                                ]}
                              >
                                <Image
                                  style={styles.Imageb8f41526}
                                  resizeMode={'cover'}
                                  source={Images.Like}
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
                                <Image
                                  style={styles.Imageb8f41526}
                                  resizeMode={'cover'}
                                  source={Images.Comment}
                                />
                              </View>
                            </Touchable>
                            {/* Playback */}
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
                                <Image
                                  style={styles.Imageb8f41526}
                                  resizeMode={'cover'}
                                />
                              </View>
                            </Touchable>
                          </View>
                        </View>
                        {/* Stats */}
                        <View style={styles.Viewf8304bf6}>
                          <Text
                            style={[
                              styles.Text8fa53bcb,
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
  ButtonOutlinedcd6d813: {
    backgroundColor: 'transparent',
    borderRadius: 4,
    borderWidth: 1,
    fontFamily: 'SpaceGrotesk_600SemiBold',
    height: 40,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    textAlign: 'center',
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
  Image5f82c078: {
    height: 64,
    width: 64,
  },
  Imageb7c71631: {
    height: 36,
    marginRight: 8,
    width: 36,
  },
  Imageb8f41526: {
    height: 20,
    marginBottom: 8,
    marginTop: 8,
    width: 20,
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
  Text202a59dd: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 15,
    lineHeight: 20,
  },
  Text57c23719: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 8,
  },
  Text6a772b9d: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 15,
    lineHeight: 20,
  },
  Text6b505a1b: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontSize: 16,
    lineHeight: 24,
    paddingBottom: 16,
    paddingTop: 16,
    textAlign: 'left',
  },
  Text6b78be6f: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 12,
    lineHeight: 16,
  },
  Text785ff173: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 12,
    lineHeight: 16,
  },
  Text8fa53bcb: {
    fontFamily: 'SpaceGrotesk_400Regular',
    lineHeight: 20,
  },
  Touchable27d4405a: {
    marginRight: 8,
  },
  Touchable91edb4b3: {
    marginTop: 8,
  },
  Touchabled0568a57: {
    marginRight: 24,
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
});

export default withTheme(TTFeedScreen);
