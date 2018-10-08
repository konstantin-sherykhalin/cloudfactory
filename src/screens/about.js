// Экран "О приложении"

import React,{Component} from 'react';
import {StyleSheet,Text,View,TextInput,TouchableNativeFeedback} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
	},
});

export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>About</Text>
			</View>
		);
	}

}
