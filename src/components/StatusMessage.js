import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default ({title, subtitle, imageSrc}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSrc} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 32,
  },
  image: {
    height: 176,
    width: 176,
  },
  title: {
    fontSize: 21,
    color: '#172A3C',
    marginTop: 8,
  },
  subtitle: {
    color: '#B2B9BE',
    marginTop: 4,
  },
});
