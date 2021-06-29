import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/Provider';

const Square = ({ text }) => (
  <View style={styles.square}>
    <Text style={{ color: '#fff' }}>{text}</Text>
  </View>
)

class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <AppNavContainer>
          <View style={styles.container}>
            <View style={styles.row}>
              <Square text="A" />
              <Square text="B" />
              <Square text="C" />
            </View>
            <View style={styles.row}>
              <Square text="D" />
              <Square text="E" />
              <Square text="F" />
            </View>
            <View style={styles.row}>
              <Square text="G" />
              <Square text="H" />
              <Square text="I" />
            </View>
          </View>
        </AppNavContainer>
      </GlobalProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7cb48f',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  square: {
    backgroundColor: '#7ca1b4',
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row'
  }
})

export default App;
