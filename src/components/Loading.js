import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export default () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#059CF5" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 32,
  },
});
