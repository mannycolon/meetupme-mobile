import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { LoadingScreen } from '../../commons';
import { MyMeetupsList } from './components';

import { fetchMyMeetups } from './actions';
import Colors from '../../../constants/Colors';
import styles from './styles/HomeScreen';

@connect(null, { fetchMyMeetups })
export default class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: Colors.redColor },
    // headerTitleStyle:{ color: 'green'},
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome
        name="home"
        size={25}
        color={tintColor}
      />
    )
  }

  componentDidMount() {
    this.props.fetchMyMeetups();
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <MyMeetupsList meetups={this.state.meetups} />
        </View>
      </View>
    );
  }
}
