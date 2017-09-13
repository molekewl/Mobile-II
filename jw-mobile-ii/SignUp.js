import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, AsyncStorage } from 'react-native';
import axios from 'axios';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  static navigationOptions = {
    title: 'Sign Up'
  }


  async onPressButton() {
    try {
      // let response = await AsyncStorage.getItem('token').then((token) => { // retrieve the token from "localStorage"
      //   axios.get('https://mobile-server-ii.herokuapp.com/users', {
      //     headers: {
      //       authorization: token, // attach the token as a header
      //     }
      //   }).then((response) => {
      //     // Update state in here
      //     console.log(response);
      //   });
      // });

      let response = await fetch('https://mobile-server-ii.herokuapp.com/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      });

      let res = await response.text();
      console.log("res is: " + res);

    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter your email address:</Text>
        <TextInput
          style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email} />
        <Text>Enter your password:</Text>
        <TextInput
          style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Password"
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          secureTextEntry={true} />
        {/* <Button
          title={'Sign Up'}
          onPress={() => {
            this.props.navigation.navigate('Content')
          }} /> */}
        <TouchableHighlight onPress={this.onPressButton.bind(this)}>
          <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});