import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
export default class LoginInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            onEdit: false,
        }
    }

    onEditing() {
        this.setState({
            onEdit: true,
        });
    }

    unEdit() {
        this.setState({
            onEdit: false,
        });
    }

    render() {
        return (
            <View style={[this.state.onEdit ? self_style.editing : self_style.unedit, { flexDirection: 'row', height: 50, borderWidth: 2, borderRadius: 8, width: '100%' }]}>
                <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center', marginLeft: '2%' }} >
                    <Text style={[this.state.onEdit ? self_style.editing : self_style.unedit, { fontFamily: 'iconfont', fontSize: 24 }]}>
                        {this.props.icon}
                    </Text>
                </View>
                <View style={[this.state.onEdit ? self_style.editing : self_style.unedit, { width: '81%', marginLeft: '2%', borderLeftWidth: 2, marginTop: 6, marginBottom: 6 }]} >
                    <TextInput
                        style={{ width: '100%', height: '100%', fontSize: 20, paddingVertical: 0, color: '#696969', paddingLeft: 12 }}
                        secureTextEntry={this.props.secureTextEntry}
                        selectionColor='#54aaf9'
                        placeholder={this.props.placeholder}
                        clearButtonMode="always"
                        onBlur={() => this.unEdit()}
                        onFocus={() => this.onEditing()}
                        onChangeText={(value) => this.props.onChange(value)}
                    >
                    </TextInput>
                </View>
            </View >
        );
    }
}

const self_style = StyleSheet.create({
    editing: {
        color: '#54aaf9',
        borderColor: '#54aaf9'
    },
    unedit: {
        color: 'grey',
        borderColor: 'grey'
    },
});