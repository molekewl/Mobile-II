import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Content from './Content';
// import Async from './Async';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Home Page'
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={'Sign In'}
          onPress={() => {
            this.props.navigation.navigate('SignIn');
          }} />
        <Button
          title={'Sign Up'}
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Routes = StackNavigator({
  Home: { screen: Home },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  Content: { screen: Content }
  // Async: { screen: Async }
});

export default Routes;
