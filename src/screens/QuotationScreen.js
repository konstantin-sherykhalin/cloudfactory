import React from 'react';
import { StyleSheet, Text, View , TextInput, TouchableNativeFeedback} from 'react-native';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
		<View style={styles.container}>
			<Text>Quotation</Text>
		</View>
		);
	}
	
}

const styles = StyleSheet.create({
  container: {
	  flex: 1,
	  flexDirection: 'column',
	  alignItems: 'center',
	  justifyContent: 'center',
  }
});

export default () => <App/>