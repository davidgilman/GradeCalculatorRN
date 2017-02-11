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
  tabIconDefault: '#888',
  tabIconSelected: '#fefefe',
  tabBar: '#34495e',
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
                    renderIcon={isSelected => this._renderIcon('briefcase', isSelected)}
                    >
                    <StackNavigation initialRoute='weighted' />
                </TabNavigationItem>
                <TabNavigationItem
                    id='gpa'
                    renderIcon={isSelected => this._renderIcon('university', isSelected)}
                    >
                    <StackNavigation initialRoute='gpa' />
                </TabNavigationItem>
                <TabNavigationItem
                    id='final'
                    renderIcon={isSelected => this._renderIcon('graduation-cap', isSelected)}
                    >
                    <StackNavigation initialRoute='final' />
                </TabNavigationItem>
            </TabNavigation>
        );
    }
     _renderIcon(name, isSelected) {
      return (
        <FontAwesome
          name={name}
          size={20}
          color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
      );
    }
}
