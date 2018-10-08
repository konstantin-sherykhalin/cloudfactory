// Компонент отображения таблицы котировок

import React,{Component} from 'react';
import {StyleSheet,Text,View,TextInput,TouchableNativeFeedback} from 'react-native';

import config from '../config';

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

export default class Quotation extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		console.log(this.props);
		this.interval = setInterval(this.props.fetch_data,config.timeout);
	}
	componentDidUpdate() {
		console.log(this.props);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Quotes</Text>
			</View>
		);
	}

}
