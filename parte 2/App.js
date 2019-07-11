import React from 'react';
import { View, Button, Alert, StyleSheet, Modal, Text, Image, AsyncStorage } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  },
  button: {
    margin: 100,
  }
});

export default class MyText extends React.Component {
  state = {
    location: null,
    errorMessage: null
  }

  getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status != 'granted') {
      this.setState({ errorMessage: "Permssions no accepted" });
    }

    const location = await Location.getCurrentPositionAsync();
    this.setState({ location })
    console.log('Location: ', location);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.location != null ? this.state.location.coords.latitude : ""}</Text>
        <Button
          style={styles.button}
          title="Sol Permissions"
          onPress={this.getLocation}
        />
      </View>
    );
  }
}