import React, {
  AppRegistry,
  Component,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

import PieceList from './piece-list';

var SearchPage = React.createClass ({
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello!!!! Search Page!</Text>
        <PieceList style={styles.pieceList}/>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
  },
  pieceList: {
    flex: 1,
  },
});

module.exports = SearchPage;
