/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/store';

import ProfileView from './src/screens/ProfileView';

StatusBar.setBackgroundColor('#059CF5');
StatusBar.setBarStyle('light-content');

const App = () => {
  return (
    <Provider store={store}>
      <ProfileView />
    </Provider>
  );
};

export default App;
