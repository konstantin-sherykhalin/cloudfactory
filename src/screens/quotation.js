// Экран "Котировки"

import React,{Component} from 'react';
import {StyleSheet,Text,View,TextInput,TouchableNativeFeedback} from 'react-native';

import QuotationContainer from '../containers/quotation';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default class Quotation extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<View style={styles.container}>
				<QuotationContainer/>
			</View>
		);
	}
}
