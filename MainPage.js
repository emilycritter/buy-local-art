'use strict';

var React = require('react-native');
var {
  ActivityIndicatorIOS,
  Component,
  Image,
  ListView,
  Navigator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} = React;

import Piece from './components/piece';

var REQUEST_URL = 'https://buylocalart.herokuapp.com/api/pieces.json';

var MainPage = React.createClass ({
  getInitialState(){
    return {
      pieces: [],
      isLoading: true
    }
  },

  componentDidMount(){
    this.fetchData();
  },

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          pieces:  responseData.pieces,
          isLoading: false
        });
      })
      .done();
  },

  render() {
    return (
      <Navigator
          renderScene={this.renderScene}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={styles.navigatorBar}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  },
  renderScene(route, navigator) {
    if (this.state.isLoading) {
      return this.renderLoadingView();
    }
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    var rows = dataSource.cloneWithRows(this.state.pieces);


    return <ScrollView style={styles.scrolly}>
        <ListView
           dataSource={rows}
           renderRow={
             (piece) =>
             <TouchableHighlight onPress={this.gotoPieceDetailPage} piece={piece}>
               <View>
                 <Piece piece={piece} key={piece.id} />
               </View>
             </TouchableHighlight>
           }
           enableEmptySections={true}
         />
      </ScrollView>;
  },
  renderLoadingView(){
    return (
      <View style={styles.loading}>
        <ActivityIndicatorIOS
            size='large'/>
        <Text>
            Loading art...
        </Text>
      </View>
    );
  },
  gotoPieceDetailPage() {
    this.props.navigator.push({
      id: 'PieceDetailPage',
    });
  }
})

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={styles.navigatorBarText}>
          back
        </Text>
      </TouchableOpacity>
    );
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
  scrolly: {
    flex: 1,
    marginTop: 64,
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
  navigatorBarContents: {
    flex: 1,
    justifyContent: 'center'
  },
  navigatorBarText: {
    color: '#fff',
    margin: 10,
    fontSize: 16,
    fontFamily: 'Avenir Next Condensed Ultra Light',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

module.exports = MainPage;
