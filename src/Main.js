import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

import { Appbar } from 'react-native-paper';

import Feeds from './Feeds';
import Data from './Data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header dark={true}>
          <Appbar.Content title="Facts" color="#278B62" titleStyle={styles.headerTitle} />
        </Appbar.Header>

        <FlatList 
          data={Data}
          renderItem={({ item, index }) => <Feeds item={item} />}
          keyExtractor={item => item.id + ''}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  container: {
    flex: 1,
    backgroundColor: '#272B33'
  }
})

export default App;