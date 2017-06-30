import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';

export default class ProfileSreen extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: Colors.redColor },
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcons
        name="account-circle"
        size={25}
        color={tintColor}
      />
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>ProfileSreen</Text>
      </View>
    );
  }
}
