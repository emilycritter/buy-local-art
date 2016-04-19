'use strict';

var React = require('react-native');
var {
  Component,
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} = React;

class LoginPage extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigationBar={
            <Navigator.NavigationBar style={styles.navigatorBar}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={styles.login}>
        <Text style={styles.loginText}>Username:____________</Text>
        <Text style={styles.loginText}>Password:____________</Text>
        <Text style={styles.loginText}></Text>
        <TouchableHighlight
            onPress={this.gotoNext.bind(this)}>
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText}>log in</Text>
            </View>
        </TouchableHighlight>
      </View>
    );
  }
  gotoNext() {
    this.props.navigator.push({
      id: 'MainPage',
      email: 'usersemail',
    });
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={styles.navigatorBarContents}>
        <Text style={styles.navigatorBarText}>
          buy.local.art
        </Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  navigatorBar: {
    backgroundColor: '#333',
    alignItems: 'center'
  },
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginText: {
    color: '#333',
    fontFamily: 'Avenir Next Condensed Ultra Light',
  },
  loginButton: {
    borderWidth: 1,
    padding: 2,
  },
  loginButtonText: {
    color: '#333',
    fontFamily: 'Avenir Next Condensed Ultra Light',
    fontSize: 24,
  },
  navigatorBarContents: {
    flex: 1,
    justifyContent: 'center'
  },
  navigatorBarText: {
    color: '#fff',
    margin: 10,
    fontSize: 16,
    fontFamily: 'Avenir Next Condensed Ultra Light',
  }
});

module.exports = LoginPage;
