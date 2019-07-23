import React, { Fragment, Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class Profile extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Profile',
        headerStyle: { backgroundColor: 'white' },
        headerTintColor: 'black',
        headerBackTitle: null,
    });

    render() {
        return (
            <View style={styles.style1}>
                <View style={styles.style1}>
                    <Text>This is profile page</Text>
                </View>
                <View style={styles.style1}>
                    <TouchableOpacity>
                        <Text>Go to home page</Text>
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