import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/Main'

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#272B33' }}>
        <Text style={{ color: '#fff' }}>Profile!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home-sharp" color={tintColor} size={24} />
    }
  },
  Profile: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="person-circle-sharp" color={tintColor} size={24} />
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: '#278B62',
    inactiveTintColor: 'gray',
    pressColor: '#3498db',
    swipeEnabled: false,
    style: {
      backgroundColor: '#1E2026',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5,
    }
  }
});

export default createAppContainer(TabNavigator);