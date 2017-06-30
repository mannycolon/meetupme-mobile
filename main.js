import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import EStylesheet from 'react-native-extended-stylesheet';

import Root from './src/root';

import Colors from './constants/Colors';
import { cachedFonts } from './helpers';
import store from './src/redux/store';

EStylesheet.build(Colors);

class App extends React.Component {
  state = {
    fontLoaded: false
  }

  componentDidMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    const fontAssets = cachedFonts([
      {
        montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
      },
      {
        montserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
      },
      {
        montserratLight: require('./assets/fonts/Montserrat-Light.ttf'),
      },
      {
        montserratMed: require('./assets/fonts/Montserrat-Medium.ttf'),
      }
    ]);
    await Promise.all(fontAssets);
    this.setState({ fontLoaded: true });
  }
  render() {
    if (!this.state.fontLoaded) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
