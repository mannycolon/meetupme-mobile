import React from 'react';
import { StackNavigator } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Colors from '../../constants/Colors';
import HomeNavigator from './HomeNavigator';

import {
  CreateMeetupScreen,
} from '../screens';

const CloseButton = styled(TouchableOpacity)`
  marginLeft: 10;
`;

export default StackNavigator({
  Home: { screen: HomeNavigator },
  CreateMeetup: {
    screen: CreateMeetupScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Create a new Meetup',
      headerStyle: {
        backgroundColor: Colors.redColor,
      },
      headerTitleStyle: {
        color: Colors.whiteColor,
      },
      headerLeft:
        <CloseButton onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="close"
            size={30}
            color="#fff"
          />
        </CloseButton>,
    }),
  },
}, {
  mode: 'modal',
});
