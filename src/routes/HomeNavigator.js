import { TabNavigator } from 'react-navigation';
import Colors from '../../constants/Colors';

import {
  HomeScreen,
  NotificationsScreen,
  ProfileSreen
} from '../screens';

export default TabNavigator({
  Home: {
    screen: HomeScreen
  },
  Notifications: {
    screen: NotificationsScreen
  },
  ProfileSreen: {
    screen: ProfileSreen
  }
}, {
  swipeEnabled: true,
  animationEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    showIcon: true, // android doenst show it automatically.
    inactiveTintColor: Colors.blackBlueColor,
    activeTintColor: Colors.redColor,
    pressColor: Colors.redColor,
    indicatorStyle: {
      backgroundColor: Colors.redColor
    },
    style: {
      backgroundColor: Colors.whiteColor
    }
  }
});
