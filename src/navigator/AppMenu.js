import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppTab from './AppTab';
import SignUp from '../components/SignUp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

function AppMenu() {
  return (
    <Drawer.Navigator
      initialRouteName="主頁面"
      screenOptions={({route}) => ({
        drawerType: 'slide',
        drawerActiveTintColor: '#fff',
        drawerActiveBackgroundColor: '#1dd1a1',
        overlayColor: '#1dd1a1',
        drawerIcon: ({focused}) => {
          let IconName;
          const color = focused ? '#fff' : '#222';

          if (route.name === '主頁面') IconName = 'home';
          if (route.name === '註冊') IconName = 'user-edit';

          return <FontAwesome5 name={IconName} size={30} color={color} />;
        },
        drawerLabelStyle: {fontSize: 20},
      })}>
      <Drawer.Screen
        name="主頁面"
        component={AppTab}
        options={{
          title: '首頁',
        }}
      />
      <Drawer.Screen name="註冊" component={SignUp} />
    </Drawer.Navigator>
  );
}

export default AppMenu;
