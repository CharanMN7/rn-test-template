import '~/globals.css';

import { Ionicons } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, Theme, ThemeProvider } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform } from 'react-native';
import { useColorScheme } from '~/hooks/useColorScheme';
import { NAV_THEME } from '~/lib/constants';

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export default function RootLayout() {
  const hasMounted = React.useRef(false);
  const { colorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) {
      return;
    }

    if (Platform.OS === 'web') {
      // Adds the background color to the html element to prevent white background on overscroll.
      document.documentElement.classList.add('bg-background');
    }
    setIsColorSchemeLoaded(true);
    hasMounted.current = true;
  }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: isDarkColorScheme ? NAV_THEME.dark.primary : NAV_THEME.light.primary,
          tabBarInactiveTintColor: isDarkColorScheme ? NAV_THEME.dark.text : NAV_THEME.light.text,
          tabBarStyle: {
            backgroundColor: isDarkColorScheme ? NAV_THEME.dark.card : NAV_THEME.light.card,
            borderTopColor: isDarkColorScheme ? NAV_THEME.dark.border : NAV_THEME.light.border,
          },
          headerStyle: {
            backgroundColor: isDarkColorScheme ? NAV_THEME.dark.card : NAV_THEME.light.card,
          },
          headerTintColor: isDarkColorScheme ? NAV_THEME.dark.text : NAV_THEME.light.text,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="components"
          options={{
            title: 'Components',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="grid-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="forms"
          options={{
            title: 'Forms',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="create-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}

const useIsomorphicLayoutEffect =
  Platform.OS === 'web' && typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;