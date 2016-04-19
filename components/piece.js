import React, {
  AppRegistry,
  Component,
  Dimensions,
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';

var PieceDetail = require('./piece-detail');

var Piece = React.createClass({

  render(){

    let piece = this.props.piece;

    var pieceTitleTruncate = function(title){
      if (title.length > 60) {
        return title.substring(0,60)+'...'
      } else {
        return title
      }
    };

    return <View className="piece" style={styles.piece}>
      <View className = "piece-banner" style={styles.pieceBanner}>
        <Image style={styles.artistImage} source={{uri: `https://buylocalart.herokuapp.com${piece.artist.photo_url}` }} />
        <Text style={styles.artist} numberOfLines={2}>
        &nbsp; {piece.artist.shop_name.toLowerCase() + '\n'}
        &nbsp; {piece.artist.city_state.toLowerCase()}
        </Text>
      </View>
      <View style={styles.pieceImageBox}>
        <Image style={styles.pieceImage} source={{uri: `https://buylocalart.herokuapp.com${piece.photo_url}` }} />
        <Text style={styles.piecePrice}>{piece.price_formatted}</Text>
        <TouchableHighlight onPress={ () => this._navigate(piece) }  underlayColor='#dddddd'>
          <Text style={styles.pieceTitle}>
            {pieceTitleTruncate(piece.title.toLowerCase())}
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  },

  _navigate(){
    this.props.navigator.push({
      name: 'PieceShow',
      passProps: {
        piece: piece
      }
    })
  }

});

var width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  piece: {
    marginBottom: 30,
  },
  pieceBanner: {
    width: width,
    flexDirection: 'row',
    padding: 4,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'rgba(51, 51, 51, 0.5)',
  },
  artistImage: {
    width: 30,
    height: 30,
    paddingRight: 4,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 15,
  },
  artist: {
    fontSize: 15,
    color: '#333',
    textAlign: 'left',
    fontFamily: 'Avenir Next Condensed Ultra Light',
    margin: 0,
    lineHeight: 15,
  },
  pieceImageBox: {
    position: 'relative',
  },
  piecePrice: {
    position: 'absolute',
    top: 4,
    right: 4,
    fontSize: 16,
    padding: 4,
    backgroundColor: 'rgba(51, 51, 51, 0.5)',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Avenir Next Condensed Ultra Light',
  },
  pieceImage: {
    width: 400,
    height: 400,
  },
  pieceTitle: {
    fontSize: 16,
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Avenir Next Condensed Ultra Light',
  }
});

module.exports = Piece;
