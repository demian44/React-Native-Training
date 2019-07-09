import React from 'react';
import {
  Text,
  ScrollView,
  View,
  FlatList,
  SectionList,
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
  state = {
    isLoading: true,
    loadingText: " Loading...",
    users: []
  };

  render() {
    const { isLoading, users } = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <Text>
            {this.state.loadingText}
          </Text>
        </View>
      );
    }

    return (
      <View>
        <FlatList
          data={users}
          renderItem={({ item }) => <Text style={{ fontSize: 40 }}>{item.name}</Text>}
        />
      </View>
    );

    return (returnHardcodedView());
  }

  constructor(props) {
    super(props);
    this.fetchUsers();
  }

  returnHardcodedView() {
    return <View style={{}}>
      {/* <FlatList
          data={this.hardCodeData()}
          renderItem={({ item }) => <Text style={{ fontSize: 40 }}>{item.name + ` - index: ${item.key}`}
          </Text>}
        /> */}
      <SectionList
        style={styles.sectionList}
        sections={this.hardCodeListData()}
        renderItem={({ item }) => <Text style={{ fontSize: 25, textAlign: "center" }} onPress={this.pressText}>{item.name}</Text>}
        renderSectionHeader={
          ({ section }) =>
            <Text style={{ fontSize: 30, backgroundColor: "gray", textAlign: "center" }}>
              {section.title}
            </Text>
        }
      />
    </View>
  }

  hardCodeData() {
    let data =
      [
        { name: "Marito" },
        { name: "Marito2" },
        { name: "Marito3" },
        { name: "Marito4" },
        { name: "Marito5" },
        { name: "Marito6" },
        { name: "Marito7" },
        { name: "Marito8" },
        { name: "Marito9" },
        { name: "Marito10" },
        { name: "Marito11" },
        { name: "Marito12" },
        { name: "Marito13" },
        { name: "Marito14" },
      ];

    this.addKeys(data);
    return data;
  }

  hardCodeListData() {
    let data =
      [
        {
          title: "Before 10",
          data: [
            { name: "Marito" },
            { name: "Marito2" },
            { name: "Marito3" },
            { name: "Marito4" },
            { name: "Marito5" },
            { name: "Marito6" },
            { name: "Marito7" },
            { name: "Marito8" },
            { name: "Marito9" },
          ]
        },
        {
          title: "After 10",
          data: [
            { name: "Marito11" },
            { name: "Marito12" },
            { name: "Marito13" },
            { name: "Marito14" },
            { name: "Marito15" },
            { name: "Marito16" },
            { name: "Marito17" },
          ]
        },
      ];

    this.addKeys(data);
    data.forEach(element => {
      this.addKeys(element.data);
    });

    return data;
  }

  fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const users = data.map(x => ({ ...x, key: String(x.id) }));
    console.log(users);
    this.setState({ users, isLoading: false });
    this.state.isLoading = false;
  }

  addKeys = (data) => {
    let index = 0;
    data.forEach(element => {
      element.key = (index++).toString(); // Asigno un valor y luego aumento en uno.
    });
  }
}