import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableHighlight,
  AsyncStorage }
  from 'react-native';

const ACCESS_TOKEN = 'access_token';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  static navigationOptions = {
    title: 'SignIn Page'
  }

  async storeToken(accessToken) {
    try { AsyncStorage.setItem('token', response.data.token).then(() => {
        // this.props.navigate('Content'); *Dont Need Calling it line 67
      })
    } catch (error) {
      console.log('Something went wrong')
    }
  }

  async getToken(accessToken) {
    try {
      AsyncStorage.getItem('token').then((token) => { // retrieve the token from "localStorage"
        axios.get('https://mobile-server-ii.herokuapp.com/users', {
          headers: {
            authorization: token, // attach the token as a header
          }
        }).then((response) => {
          // Update state in here
        });
      });

      console.log("Token is: " + token)
    } catch (error) {
      console.log("Something went wrong")
    }
  }

  async onPressButton() {
    try {
      let response = await fetch('https://mobile-server-ii.herokuapp.com/signin', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      });

      let res = await response.text();
      if (response.status >= 200 && response.status < 300) {
        // Handle success
        this.setState({ error: "" });
        let accessToken = res;
        this.storeToken(accessToken)
        this.props.navigation.navigate('Content');
        console.log("res token: " + accessToken);
      } else {
        // Handle error
        let error = res;
        throw error;
      }
    } catch (error) {
      console.log(error);
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
          title={'Sign In'}
          onPress={() => {
            this.props.navigation.navigate('Content');
          }} /> */}
        <TouchableHighlight onPress={this.onPressButton.bind(this)}>
          <Text>Sign in</Text>
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