import React						from 'react';
import {StyleSheet,Text,View}		from 'react-native';
import {createBottomTabNavigator}	from 'react-navigation';
import {Provider}					from 'react-redux';

import AboutScreen		from './screens/about';
import QuotationScreen	from './screens/quotation';

import store from './redux';

const TabNavigator = createBottomTabNavigator(
	{
		'О приложении': AboutScreen,
		'Котировки': QuotationScreen,
	},
	{
		tabBarPosition: 'top',
		tabBarOptions: {
			activeTintColor: '#fff',
			activeBackgroundColor: '#0a6970',
			labelStyle: {
				padding: 15,
				fontSize: 16, fontFamily: 'Medium',
			}
		}
	}
);

export default () => <Provider store={store}><TabNavigator/></Provider>
