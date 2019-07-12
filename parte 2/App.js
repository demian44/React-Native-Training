import React from 'react';
import { View, Button, Alert, StyleSheet, Modal, Text, Image, AsyncStorage } from 'react-native';
import { MapView } from "expo";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignContent: 'flex-end',
    justifyContent: "flex-end"
  }
});

export default class MyText extends React.Component {
  render() {
    return <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -34.604097,
          longitude: -58.432796,
          latitudeDelta: 0.09,
          longitudeDelta: 0.09
        }}
      />

    </View>

  }
}