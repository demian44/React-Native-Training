import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';

export default class MyText extends React.Component {
  state = {};
  handleChange = (text) => {
    this.setState({ text });
    console.log(text);
  }

  handlePress = () => {
    alert(`Tu nombre es ${this.state.text}`);
  }

  render() {
    const { text } = this.state;
    console.log("this.state: ", JSON.stringify(this.state));
    return (
      <View style={styles.container}>
        {/* <Text style={styles.text}>      Yo no entendí bien la pelicula</Text>*/}

        <TextInput style={styles.text2} onChangeText={this.handleChange} placeholder="Set your name..." />
        {/* {<MyText />} */}
        <Text>
          {text && `Mi nombre es: ${text}`}
        </Text>
        <Button title="Aceptar" onPress={this.handlePress} />
        <TouchableHighlight style={styles.button} onPress={this.handlePress}>
          <Text>Aceptar</Text>
        </TouchableHighlight>
        <TouchableOpacity onPress={this.handlePress}>
          <Text>Aceptar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "cyan",
    height: 50,
    padding: 15
  },
  text: {
    // flex:3,
    color: "red",
    backgroundColor: "brown",
    height: 80,
    width: 100,
  },
  text2: {
    // flex:2,
    marginTop: 30,
    // color: "red",
    // backgroundColor: "yellow",
    // height: 80,
    // width: 100,
  },
  text3: {
    // flex:4,
    color: "red",
    backgroundColor: "orange",
    height: 80,
    width: 100,
  },
  container: {
    // flexDirection: 'row', 
    flexDirection: 'column',
    // justifyContent: "flex-start",
    // justifyContent: "space-around",
    //justifyContent: "space-between",
    justifyContent: 'center',
    //justifyContent: "space-evenly",
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: "flex-start",
    // alignItems: "flex-end",

    alignItems: 'center',
  },
});