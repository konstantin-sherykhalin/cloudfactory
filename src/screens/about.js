// Экран "О приложении"

import React,{Component} from 'react';
import {StyleSheet,TouchableOpacity,View,Text} from 'react-native';
import {withNavigation} from 'react-navigation';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		padding: 20,
	},
	title: {
		paddingBottom: 15,
		fontSize: 24, fontFamily: 'Light',
	},
	text: {
		paddingBottom: 10,
		fontSize: 16, fontFamily: 'Light',
	},
	link: {
		paddingTop: 2, paddingBottom: 0,
		color: '#0b7076',
	},
});

export default withNavigation((props) => (
	<View style={styles.container}>
		<Text style={styles.title}>Тестовое приложение от разработчиков</Text>
		<Text style={styles.text}>Приложение состоит из двух экранов.</Text>
		<Text style={[styles.text]}>
			Экран "О приложении", он содержит
			<TouchableOpacity onPress={_=>props.navigation.navigate('Котировки')}>
				<Text style={[styles.text,styles.link]}>элемент навигации, позволяющий перейти на экран Котировки</Text>
			</TouchableOpacity>
		</Text>
		<Text style={styles.text}>
			Экран "Котировки" содержит:{'\n'}
			Элемент навигации, позволяющий перейти на экран О приложении.{'\n'}
			Таблицу, содержащую котировки с биржи Полоникс, обновляемые в фоне.{'\n'}
			Данные в таблице обновляются по таймеру раз в 5 секунд.{'\n'}
			Данные не обновляются, когда экран не активен.{'\n'}
			В случае ошибки показывается ошибка.
		</Text>
		<Text style={styles.text}>Для навигации используется react-navigation.</Text>
		<Text style={styles.text}>Сборка, запуск и отладка на основе expo.</Text>
	</View>
));
