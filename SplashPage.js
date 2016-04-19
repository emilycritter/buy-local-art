'use strict';

var React = require('react-native');
var {
  Component,
  View,
  Text,
  StyleSheet,
} = React;

class SplashPage extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'LoginPage',
      });
    }, 1000);
  }
  render() {
    return (
      <View style={styles.splash}>
        <Text style={styles.splashText }>buy.local.art</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  splashText: {
    fontFamily: 'Avenir Next Condensed Ultra Light',
    color: '#fff',
    fontSize: 32
  }
});

module.exports = SplashPage;
