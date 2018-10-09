import React						from 'react';
import {StatusBar,View}				from 'react-native';
import {createBottomTabNavigator}	from 'react-navigation';
import {Provider}					from 'react-redux';

import AboutScreen		from './screens/about';
import QuotationScreen	from './screens/quotation';

import store from './redux';

StatusBar.setBarStyle('dark-content',true);
const Root = createBottomTabNavigator(
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
		},
	},
);

export default () => <Provider store={store}><View style={{height:'100%',paddingTop:20}}><Root/></View></Provider>
