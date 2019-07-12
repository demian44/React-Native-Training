import React from 'react';
import { View, Button, Alert, StyleSheet, Modal, Text, Image, AsyncStorage } from 'react-native';
import { Camera } from "expo";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignContent: 'flex-end',
    justifyContent: "flex-end"
  },
  button: {
    margin: 100,
    height: 100,
    width: 100
  }
});

export default class MyText extends React.Component {
  state = {
    perm: null,
    type: Camera.Constants.Type.back
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ perm: status === 'granted' });
  }

  flipCamera = () => {
    this.setState({
      type: this.state.type === Camera.Constants.Type.front
        ? Camera.Constants.Type.back
        : Camera.Constants.Type.front
    });
  }

  render() {
    const { perm } = this.state;
    if (perm === null) {
      return <View />;
    }
    else if (perm === false) {
      return (
        <View style={styles.container}>
          <Text>Dame permisos!!! D:</Text>
        </View>
      );
    }
    else {
      return <View style={styles.container}>
        <Camera
          style={{ flex: 1 }}
          type={this.state.type}
        >
          <View style={{
            ...styles.container,
            backgroundColor: 'transparent',
            flexDirection: 'row',

          }}>
            <Button
              title="Flip"
              onPress={this.flipCamera}
              style={styles.button}
            />
          </View>
        </Camera>
      </View>
    }
  }
}