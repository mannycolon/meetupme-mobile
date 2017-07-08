import Expo, { AppLoading } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import EStylesheet from 'react-native-extended-stylesheet';

import Root from './src/root';

import Colors from './constants/Colors';
import { fontAssets } from './helpers';
import store from './src/redux/store';

EStylesheet.build(Colors);

class App extends React.Component {
  state = {
    fontLoaded: false,
  }

  componentDidMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    await Promise.all(fontAssets);
    this.setState({ fontLoaded: true });
  }
  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
