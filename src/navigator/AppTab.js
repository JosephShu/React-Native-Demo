import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from '../components/Home';
import Info from '../components/Infomation';

const Tab = createBottomTabNavigator();

function AppTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          size = focused ? 30 : 25;
          color = focused ? '#1dd1a1' : '#222';

          if (route.name === '首頁') {
            iconName = 'home';
          }
          if (route.name === 'API') {
            iconName = 'book-open';
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {height: 60, paddingTop: 5},
        tabBarLabelStyle: {fontSize: 20},
      })}>
      <Tab.Screen name="首頁" component={Home} options={{header: () => null}} />
      <Tab.Screen name="API" component={Info} options={{header: () => null}} />
    </Tab.Navigator>
  );
}

export default AppTab;
