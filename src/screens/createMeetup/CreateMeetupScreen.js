import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'native-base';

import Colors from '../../../constants/Colors';

class CreateMeetupScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Create a new Meetup',
    headerStyle: { backgroundColor: Colors.redColor },
    headerTitleStyle: { color: Colors.whiteColor },
    headerLeft:
      <Button
        transparent
        onPress={() => navigation.goBack()}
      >
        <Icon
          name="md-close"
          style={{
            fontSize: 30,
            color: Colors.whiteColor
          }}
        />
      </Button>
  });
  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}

export default CreateMeetupScreen;
