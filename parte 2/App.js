import React from 'react';
import {
  View,
  Button,
  Alert,
  StyleSheet,
  Modal,
  Image,
  AsyncStorage
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
  state = { modalVisible: false };
  changeModalVisibility = async () => {
    this.setState({ modalVisible: !this.state.modalVisible });
    await AsyncStorage.setItem("Data","El datoasdasdasdsa");
  };

  constructor(props) {
    super(props);
    this.getStorageData();
  }

  getStorageData = async () => {
    let data = await AsyncStorage.getItem("Data");
    Alert.alert("Data",data);
  }

  doSomething = () => {
    Alert.alert("The title", "Some text....", [
      { text: "Button 1", onPress: () => { Alert.alert("Button 1...") } },
      { text: "Button 2", onPress: () => { Alert.alert("Button 2...") } }
    ]);
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: 'gray' }]}>
        <Modal
          transparent={true}
          visible={this.state.modalVisible}
          animationType="slide"
        >
          <View style={[styles.container, { backgroundColor: 'cyan', margin: 70 }]}>
            <Button title="Modal Button" onPress={this.changeModalVisibility} />
          </View>
        </Modal>
        <Button title="Show..." onPress={this.changeModalVisibility} />
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" }}
          style={{ width: 193, height: 110 }}
        />
        <Image
          source={require("./assets/icon.png")}
          style={{ width: 193, height: 110 }}
        />
      </View>
    );
  }
}