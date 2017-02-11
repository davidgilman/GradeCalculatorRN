import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation
} from '@exponent/ex-navigation';
import Router from './navigation/Router';

class App extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <NavigationProvider router={Router}>
          <StackNavigation
            id='root'
            initialRoute={Router.getRoute('rootNavigation')} />
        </NavigationProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

Exponent.registerRootComponent(App);
