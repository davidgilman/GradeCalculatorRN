import React from 'react';
import {
    StackNavigation,
    TabNavigation,
    TabNavigationItem
} from '@exponent/ex-navigation';
import {
  FontAwesome,
} from '@exponent/vector-icons';

const Colors = {
  tintColor: '#2f95dc',
  tabIconDefault: '#888',
  tabIconSelected: '#fefefe',
  tabBar: '#34495e',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: '#2f95dc',
  noticeText: '#fff',
};

export default class RootNavigation extends React.Component {
    render() {
        return (
            <TabNavigation
                tabBarHeight={49}
                initialTab='weighted'
                tabBarColor={Colors.tabBar}
                >
                <TabNavigationItem
                    id='weighted'
                    renderIcon={isSelected => this._renderIcon('home', isSelected)}
                    >
                    <StackNavigation initialRoute='weighted' />
                </TabNavigationItem>
                <TabNavigationItem
                    id='other'
                    renderIcon={isSelected => this._renderIcon('user-circle', isSelected)}
                    >
                    <StackNavigation initialRoute='other' />
                </TabNavigationItem>
            </TabNavigation>
        );
    }
     _renderIcon(name, isSelected) {
      return (
        <FontAwesome
          name={name}
          size={32}
          color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
      );
    }
}
