import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator } from 'react-navigation';

import AboutScreen from './src/screens/AboutScreen';
import QuotationScreen from './src/screens/QuotationScreen';

const TabNavigator = createBottomTabNavigator({
	About: AboutScreen,
	Quotation: QuotationScreen,
},
{
	tabBarPosition: 'top',
	tabBarOptions: {
		activeTintColor: 'yellow',
		activeBackgroundColor: 'green',
		labelStyle: {
			padding: 15,
			fontSize: 16,
		}
	}
});

export default () => <TabNavigator/>
