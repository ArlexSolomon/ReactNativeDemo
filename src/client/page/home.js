import React, { Fragment, Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Home',
        headerStyle: { backgroundColor: 'white' },
        headerTintColor: 'black',
        headerBackTitle: null,
    });

    go_to_page() {
        // alert('test')
        this.props.navigation.navigate('About')
    }

    render() {
        return (
            <View style={styles.style1}>
                <View style={styles.style1}>
                    <Text>This is home page</Text>
                </View>
                <View style={styles.style1}>
                    <TouchableOpacity onPress={() => this.go_to_page()}>
                        <Text>Go to about page</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    style1: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
});