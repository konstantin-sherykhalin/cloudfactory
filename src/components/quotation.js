// Компонент отображения таблицы котировок

import React,{Component} from 'react';
import {StyleSheet,Text,Dimensions,View,TextInput,TouchableNativeFeedback} from 'react-native';

import config from '../config';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		marginTop: 50,
		justifyContent: 'flex-start',
	},
	hat: {
		width: Dimensions.get('window').width,
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: 'orange',
		padding: 10,
		borderWidth: 2,
		borderColor: 'black',
		margin: 10,
	},
	value: {
		width: Dimensions.get('window').width,
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: 'green',
		padding: 10,
		borderWidth: 2,
		borderColor: 'black',
		margin: 10,
	},
	text: {
	},
	ex: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	}
});

export default class Quotation extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		console.log(this.props.fetch_data);
		this.interval = setInterval(this.props.fetch_data,config.timeout);
	}
	componentDidUpdate() {
		console.log(this.props.fetch_data);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.hat}>
					<Text>Имя</Text>
					<Text>Last</Text>
					<Text>Hightest</Text>
					<Text>Percent</Text>
				</View>
				<View style={styles.value}>
					<Text>1</Text>
					<Text>1</Text>
					<Text>2</Text>
					<Text>3</Text>
				</View>
			</View>
		);
	}

}
