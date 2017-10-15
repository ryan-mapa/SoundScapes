import React, { Component } from 'react';
import Text from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class TabBar extends React.Component {
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
        title="One"
        badgeText="1">
        {'item one'}
        </TabNavigator.Item>

        <TabNavigator.Item
        title="Two"
        badgeText="2">
        {'item two'}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
