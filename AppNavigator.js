import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';

import Screen1ASignIn from './screens/Screen1ASignIn';
import Screen1BSignUp from './screens/Screen1BSignUp';
import Screen1Launch from './screens/Screen1Launch';
import Screen2AShare from './screens/Screen2AShare';
import Screen2BFeed from './screens/Screen2BFeed';
import Screen3AProfileOther from './screens/Screen3AProfileOther';
import Screen3AProfileSelf from './screens/Screen3AProfileSelf';
import Screen4ASettings from './screens/Screen4ASettings';
import Screen4BFeedback from './screens/Screen4BFeedback';
import Screen4CAccount from './screens/Screen4CAccount';
import Screen4DSecurity from './screens/Screen4DSecurity';
import Screen4EDonate from './screens/Screen4EDonate';
import Screen9 from './screens/Screen9';
import TTAccountScreen from './screens/TTAccountScreen';
import TTFeedCheckboxplaygroundScreen from './screens/TTFeedCheckboxplaygroundScreen';
import TTFeedScreen from './screens/TTFeedScreen';
import TTFeedairtablebackupScreen from './screens/TTFeedairtablebackupScreen';
import XXAllFollowersListwithProfilePicsScreen from './screens/XXAllFollowersListwithProfilePicsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Screen2BFeed"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: theme.colors._01Primary,
        inactiveTintColor: theme.colors._03Disabled,
        activeBackgroundColor: theme.colors['06 Secondary'],
        inactiveBackgroundColor: theme.colors['06 Secondary'],
        style: {
          backgroundColor: theme.colors['06 Secondary'],
          borderTopColor: theme.colors['04 Border'],
        },
      }}
    >
      <Tab.Screen
        name="Screen2BFeed"
        component={Screen2BFeed}
        options={{
          title: '02B. Feed',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/musical-notes-outline"
              size={25}
              color={
                focused ? theme.colors._01Primary : theme.colors._03Disabled
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Screen2AShare"
        component={Screen2AShare}
        options={{
          tabBarVisible: true,
          title: '02A. Share',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/add-circle-outline"
              size={25}
              color={
                focused ? theme.colors._01Primary : theme.colors._03Disabled
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Screen3AProfileSelf"
        component={Screen3AProfileSelf}
        options={{
          title: '03A. Profile - Self',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/md-person-outline"
              size={25}
              color={
                focused ? theme.colors._01Primary : theme.colors._03Disabled
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="card"
        headerMode="none"
        initialRouteName="LaunchScreen"
        screenOptions={{
          cardStyle: {
            backgroundColor: theme.colors['06 Secondary'],
          },
        }}
      >
        <Stack.Screen
          name="Screen1Launch"
          component={Screen1Launch}
          options={{ title: '01. Launch' }}
        />
        <Stack.Screen
          name="Screen1ASignIn"
          component={Screen1ASignIn}
          options={{ title: '01A. Sign In' }}
        />
        <Stack.Screen
          name="Screen4BFeedback"
          component={Screen4BFeedback}
          options={{ title: '04B. Feedback' }}
        />
        <Stack.Screen
          name="Screen4ASettings"
          component={Screen4ASettings}
          options={{ title: '04A. Settings' }}
        />
        <Stack.Screen
          name="TTAccountScreen"
          component={TTAccountScreen}
          options={{ title: 'TT. Account' }}
        />
        <Stack.Screen
          name="Screen4EDonate"
          component={Screen4EDonate}
          options={{ title: '04E. Donate' }}
        />
        <Stack.Screen
          name="Screen4DSecurity"
          component={Screen4DSecurity}
          options={{ title: '04D. Security' }}
        />
        <Stack.Screen
          name="Screen1BSignUp"
          component={Screen1BSignUp}
          options={{ title: '01B. Sign Up' }}
        />
        <Stack.Screen
          name="Screen4CAccount"
          component={Screen4CAccount}
          options={{ title: '04C. Account' }}
        />
        <Stack.Screen
          name="TTFeedairtablebackupScreen"
          component={TTFeedairtablebackupScreen}
          options={{ title: 'TT. Feed - airtable backup' }}
        />
        <Stack.Screen
          name="XXAllFollowersListwithProfilePicsScreen"
          component={XXAllFollowersListwithProfilePicsScreen}
          options={{ title: 'XX. All Followers List with Profile Pics' }}
        />
        <Stack.Screen
          name="Screen9"
          component={Screen9}
          options={{ title: '99. -----------' }}
        />
        <Stack.Screen
          name="TTFeedScreen"
          component={TTFeedScreen}
          options={{ title: 'TT. Feed' }}
        />
        <Stack.Screen
          name="TTFeedCheckboxplaygroundScreen"
          component={TTFeedCheckboxplaygroundScreen}
          options={{ title: 'TT. Feed - Checkbox playground' }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
