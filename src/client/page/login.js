import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Button } from '@ant-design/react-native';
import LoginInput from '../component/login_input';
import { login, loginFailed } from '../../server/actions/login';
import { connect } from 'react-redux';

class Login extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         usernameError: false,
    //         passwordError: false,
    //         username: '',
    //         password: '',
    //         toast_key: null,
    //         bottom_img_margin: 0,
    //     }
    // }

    _loginSuccess = () => {
        this.props.dispatch(login())
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white', paddingTop: 80 }}>
                <View style={{ width: '80%', marginTop: 20, alignItems: 'center' }}>
                    <Text>{this.props.loginStatus.pending ? '正在登陆' : ''}</Text>
                </View>
                <View style={{ width: '80%', marginTop: 20, alignItems: 'center' }}>
                    <Text style={{ color: 'red' }}>{this.props.loginStatus.error == null ? '' : this.props.loginStatus.error}</Text>
                </View>
                <View style={{ width: '80%', marginTop: 20 }}>
                    <LoginInput icon={<Text>&#xe66b;</Text>} placeholder='' secureTextEntry={false} onChange={(value) => this._usernameOnChange(value)}></LoginInput>
                </View>
                <View style={{ width: '80%', marginTop: 20 }}>
                    <LoginInput icon={<Text>&#xe639;</Text>} placeholder='' secureTextEntry={true} onChange={(value) => this._passwordOnChange(value)}></LoginInput>
                </View>
                <View style={{ width: '80%', marginTop: 20, backgroundColor: '#54aaf9', height: 50, borderRadius: 8 }}>
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => this._loginSuccess()}
                    >
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        loginStatus: state.loginReducer,
    };
};

export default connect(mapStateToProps)(Login);