'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Component,
  View,
  Text,
  Navigator,
  TouchableOpacity,
} = React;

class PieceDetailPage extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={styles.navigatorBar}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
            onPress={this.gotoNext.bind(this)}>
          <Text>Piece Details</Text>
        </TouchableOpacity>
      </View>
    );
  }
  gotoNext() {
    this.props.navigator.push({
      id: 'NoNavigatorPage',
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
    });
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, nextState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={styles.navigatorBarText}>
          back
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, nextState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.push({id: 'unknown'})}>
        <Text style={styles.navigatorBarText}>
          map
        </Text>
      </TouchableOpacity>
    );
  },
  Title(route, navigator, index, nextState) {
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

module.exports = PieceDetailPage;
