import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class Content extends React.Component {
  constructor(props) {
    super();
    this.state = {
      foods: [{ text: 'Pineapple' }, { text: 'Tomato' }]
    };
  }

  static navigationOptions = {
    title: 'Content Page'
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.foods}
          renderItem={({ item }) => {
            return <Text>{item.text}</Text>
          }}/>
      </View>
    );
  }
}