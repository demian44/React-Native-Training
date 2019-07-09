import React from 'react';
import {
  View,
  ActivityIndicator,
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
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
        size="large"
        color="#0000ff"
        />
        
      </View >
    );

  }
}