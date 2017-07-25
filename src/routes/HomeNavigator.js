import React from 'react';
import { TabNavigator } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Colors from '../../constants/Colors';

import {
  HomeScreen,
  NotificationsScreen,
  ProfileSreen,
} from '../screens';

const AddButton = styled(TouchableOpacity)`
  marginRight: 10;
`;

export default TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: Colors.redColor,
      },
      headerRight: (
        <AddButton onPress={() => navigation.navigate('CreateMeetup')}>
          <MaterialIcons
            name="add-circle"
            size={30}
            color={Colors.whiteColor}
          />
        </AddButton>
      ),
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome
          name="home"
          size={25}
          color={tintColor}
        />
      ),
    }),
  },
  Notifications: {
    screen: NotificationsScreen,
    navigationOptions: () => ({
      headerStyle: { backgroundColor: Colors.redColor },
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
          name="notifications"
          size={25}
          color={tintColor}
        />
      ),
    }),
  },
  ProfileSreen: {
    screen: ProfileSreen,
    navigationOptions: () => ({
      headerStyle: { backgroundColor: Colors.redColor },
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
          name="account-circle"
          size={25}
          color={tintColor}
        />
      ),
    }),
  },
}, {
  swipeEnabled: true,
  animationEnabled: false,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    showIcon: true, // android doesn't show it automatically.
    inactiveTintColor: Colors.blackBlueColor,
    activeTintColor: Colors.redColor,
    pressColor: Colors.redColor,
    indicatorStyle: {
      backgroundColor: Colors.redColor,
    },
    style: {
      backgroundColor: Colors.whiteColor,
    },
  },
});
