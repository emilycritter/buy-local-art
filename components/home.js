import React, {
  AppRegistry,
  Component,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

import PieceList from './piece-list';

var HomePage = React.createClass ({

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleBar}>
          buy.local.art
        </Text>
        <PieceList style={styles.pieceList}/>
        <View style={styles.navigationBar}>
          <Text style={styles.navIcon}>
            1
          </Text>
          <Text style={styles.navIcon}>
            2
          </Text>
          <Text style={styles.navIcon}>
            3
          </Text>
          <Text style={styles.navIcon}>
            4
          </Text>
          <Text style={styles.navIcon}>
            5
          </Text>
        </View>
      </View>
    );
  }
})

var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
  },
  titleBar: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#333',
    color: '#fff',
    fontFamily: 'Avenir Next Condensed Ultra Light',
    height: 50,
    overflow: 'hidden',
  },
  pieceList: {
    flex: 1,
  },
  navigationBar: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#333',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    width: width,
    height: 50,
  },
  navIcon: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'Avenir Next Condensed Ultra Light',
    flex: 1,
    color: '#fff'
  },
});

module.exports = HomePage;
