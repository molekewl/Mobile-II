import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';

export default class Async extends React.Component {
  constructor(props) {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      this.setState({
        posts: response
      });
    });
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.posts}
          renderItem={({ item }) => {
            return <Text>{item.title}</Text>
          }} />
      </View>
    );
  }
}