'use strict';

import React, {
  AppRegistry,
  Component,
  Dimensions,
  Image,
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 75,
    alignItems: 'center'
  },
  image: {
    width: 107,
    height: 165,
    padding: 10
  },
  description: {
    padding: 10,
    fontSize: 15,
    color: '#656565'
  }
});

class PieceDetailPage extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'PieceDetailPage', name: 'PieceShow'}}
        renderScene={this.renderScene}
      />
    );
  }

  renderScene(route, navigator) {
    var piece = this.props.piece;
    var imageURI = (typeof piece.photo_url !== 'undefined') ? piece.photo_url : '';
    var description = (typeof piece.description !== 'undefined') ? piece.description : '';
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: imageURI}} />
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

module.exports = PieceDetailPage;
