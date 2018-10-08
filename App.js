import React,{Component} from 'react';
import {AppLoading,Font} from 'expo';

import Router from './src/router';

import Bold		from './assets/fonts/Roboto/Roboto-Bold.ttf';
import Medium	from './assets/fonts/Roboto/Roboto-Medium.ttf';
import Light	from './assets/fonts/Roboto/Roboto-Light.ttf';

export default class App extends Component {
	state = {
		ready: false,
	};

	cache_resources = async () => Font.loadAsync({
		'Bold': Bold,
		'Medium': Medium,
		'Light': Light,
	});

	render() {
		const ready = this.state.ready;

		if(ready) {
			return <Router/>
		} else {
			return (
				<AppLoading
					startAsync={this.cache_resources}
					onFinish={_=>this.setState({ready:true})}
					onError={console.warn}
				/>
			)
		}
	}
}
