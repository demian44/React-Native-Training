import React from 'react';
import {
  View,
  Button,
  Alert,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  sectionList:
  {
    height: 400,
    marginTop: 24
  },
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default class MyText extends React.Component {
  doSomething = () => {
    Alert.alert("The title", "Some text....", [
      { text: "Button 1", onPress: () => { Alert.alert("Button 1...") } },
      { text: "Button 2", onPress: () => { Alert.alert("Button 2...") } }
    ]);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="El Boton" onPress={this.doSomething} />
      </View>
    );

  }
}