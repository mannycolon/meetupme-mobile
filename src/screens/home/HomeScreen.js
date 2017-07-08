import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import { LoadingScreen } from '../../commons';
import { MyMeetupsList } from './components';

import { fetchMyMeetups } from './actions';
import Colors from '../../../constants/Colors';
import styles from './styles/HomeScreen';

@connect(
  state => ({
    myMeetups: state.home.myMeetups,
  }),
  { fetchMyMeetups }
)
export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    // headerTitleStyle:{ color: 'green'},
    headerStyle: { backgroundColor: Colors.redColor },
    headerRight:
      <TouchableOpacity
        style={styles.iconAdd}
        onPress={() => navigation.navigate('CreateMeetup')}
      >
        <MaterialIcons
          name="add-circle"
          size={30}
          color={Colors.whiteColor}
        />
      </TouchableOpacity>,
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome
        name="home"
        size={25}
        color={tintColor}
      />
    ),
  });

  componentDidMount() {
    this.props.fetchMyMeetups();
  }

  render() {
    const {
      myMeetups: {
        isFetched,
        data,
        error,
      },
    } = this.props;
    if (!isFetched) {
      return <LoadingScreen />;
    } else if (error.on) {
      return (
        <View>
          <Text>{error.message}</Text>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <MyMeetupsList meetups={data} />
        </View>
      </View>
    );
  }
}

/**
 * import { Button, Icon } from 'native-base';

 * <Button
        transparent
        onPress={() => navigation.navigate('CreateMeetup')}
      >
        <Icon
          name="md-add-circle"
          style={{
            fontSize: 30,
            color: Colors.whiteColor
          }}
        />
      </Button>,
 */
