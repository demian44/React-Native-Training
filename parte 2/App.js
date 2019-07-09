import React from 'react';
import {
  View,
  Picker,
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
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.value || 'id_1'}
          style={{ height: 70, width: 250 }}
          onValueChange={(value, index) => {
            this.setState({ value });
          }}
        >
          <Picker.Item label="Chanchito Feliz" value="id_1" />
          <Picker.Item label="Fluffly" value="id_2" />
        </Picker>
      </View >
    );

  }
}