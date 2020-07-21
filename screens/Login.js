import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Subscribe } from "unstated"
import { CheckBox, Button } from 'native-base';
import { CustomTextInput } from '../components/CustomTextInput';
import { TouchableText } from '../components/TouchableText';
import { CustomModal } from '../components/CustomModal';
import { Toast } from '../components/Toast';
import { AuthContainer } from '../store/auth';

import { login } from "../apis"

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        backgroundColor: '#000000',
    },
    inputContainer: {
        height: Dimensions.get("window").height / 3,
        marginHorizontal: 20,
        justifyContent: 'space-around'
    },
    containerTitle: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        // marginBottom: 20,
    },
    loginTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: "Roboto-Regular"
        // marginTop: 25,
    },
    rememberText: {
        color: 'white',
        paddingLeft: 20
    },
    checkBoxContainer: {
        marginLeft: 20,
        flexDirection: 'row'
    },
    checkBox: {
        borderColor: 'white',
    },
    loginBtnContainer: {
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 5,
    },
    loginBtn: {
        width: 180,
        height: 60,
        backgroundColor: 'red',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    loginBtnText: {
        color: 'white',
        fontSize: 18,
        justifyContent: 'center',
        fontFamily: "Roboto-Bold",
        alignItems: 'center'
    },
    passwordLostText: {
        color: 'white',
        marginTop: 10
    },
    // registerHereRoot: {
    //     alignItems: 'flex-end',
    //     height: '100%',
    // },
    registerHereContainer: {
        // backgroundColor: "red", 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "flex-end",
        height: Dimensions.get("window").height * 0.2

    },
    noAccount: {
        color: 'white',
    },
    registerHereText: {
        color: 'white',
        textDecorationLine: 'underline',
    },
    modalContentContainer: {
        // width: 0.6
        marginHorizontal: 15
    },
    lostPasswordModalText: {
        color: 'white',
        marginTop: 15,
        marginBottom: 15
    }
});


class Login extends Component {
    state = {
        email: "a123@gmail.com",
        password: "gorak50",
        rememberMe: false,
        loginSubmit: false,
        registerNow: false,
        passwordLost: false,
        loading: false,
        lostPasswordEmail: "",
    }

    onChangeRemember = () => {
        this.setState({ rememberMe: !this.state.rememberMe })
    }

    loginSubmit = async () => {
        this.setState({ loading: true })
        const { email, password } = this.state
        const response = await login(email, password)
        this.setState({ loading: false })
        Toast(response.message?.message || "Something went wrong", response.status ? 0 : 2)
        if (response.status) {
            const { message: { data } } = response;
            console.log(data);
            await AsyncStorage.setItem("user", JSON.stringify(data))
            this.props.authStore.checkAuthentication()
            return this.props.navigation.navigate("Home")
        }
    }

    onPasswordLostHere = () => {
        this.setState({ passwordLost: true });
    }

    onRegisterHere = () => {
        this.props.navigation.navigate("Registration")
    }


    render() {
        const { email, password, rememberMe, passwordLost, loading } = this.state;
        const { navigation } = this.props
        const disable = Boolean(!email || !password)
        return (
            <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>

                    <View style={styles.containerTitle}>
                        <Text style={styles.loginTitle}>Login</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <CustomTextInput
                            title="Username or email address *"
                            value={email}
                            keyboardType={"email-address"}
                            handleTextFieldChange={(text) => { this.setState({ email: text }) }}
                            // inputStyles={styles.input}
                            maxLength={40}
                        />
                        <CustomTextInput
                            title="Password *"
                            value={password}
                            secureTextEntry={true}
                            type={"password"}
                            keyboardType={"default"}
                            handleTextFieldChange={(text) => { this.setState({ password: text }) }}
                            // inputStyles={styles.input}
                            maxLength={40}
                        />
                    </View>

                    <TouchableOpacity style={styles.checkBoxContainer} onPress={this.onChangeRemember}>
                        <CheckBox style={styles.checkBox} checked={rememberMe} onPress={this.onChangeRemember} />
                        <Text style={styles.rememberText}>Remember me</Text>
                    </TouchableOpacity>

                    <View style={styles.loginBtnContainer}>
                        <Button style={[styles.loginBtn, disable && { backgroundColor: "#DD000051" }]} activeOpacity={0} onPress={() => { !disable && this.loginSubmit() }}>{
                            loading ? <ActivityIndicator color="#fff" size="small" /> :
                                <Text style={styles.loginBtnText}>LOG IN</Text>

                        }</Button>
                        <TouchableText text="Lost your password?"
                            handleOnPress={this.onPasswordLostHere}
                            customTextStyles={{ fontFamily: "Roboto-Medium" }}
                        />
                    </View>

                    <View style={styles.registerHereRoot}>
                        <View style={styles.registerHereContainer}>
                            <Text style={styles.noAccount}>Don't have an account? </Text>
                            <TouchableText text="Register here"
                                handleOnPress={this.onRegisterHere}
                                customTextStyles={{ textDecorationLine: 'underline', }}
                            />
                            {/* <Text style={styles.registerHereText}>Register here</Text> */}
                        </View>
                    </View>

                    {/* <CustomModal 
                title="Illiminum"
                visible={} 
                handleOnClose={} 
                contentText="Lost your password?"
                /> */}

                    <CustomModal
                        visible={passwordLost}
                        // content={this.loginModalContent()}
                        content={<View style={styles.modalContentContainer}>
                            <Text style={styles.lostPasswordModalText}>Lost your password? Please enter your username or email address.You will receive a link to create a new password via email.</Text>

                            <CustomTextInput
                                title="Username or email address *"
                                value={this.state.lostPasswordEmail}
                                keyboardType={"email-address"}
                                handleTextFieldChange={(text) => { this.setState({ lostPasswordEmail: text }) }}
                                inputStyles={{ backgroundColor: 'black', }}
                                maxLength={40}
                            />
                        </View>}
                        modalBackgroundColor={{ backgroundColor: '#0F0F17', borderWidth: 1, borderColor: 'white', borderRadius: 0 }}
                        buttonBackgroundColor={{ backgroundColor: '#DD0000' }}
                        buttonText="Reset Password"

                        // contentText="Lost your password? Please enter your username or email address.You will receive a link to create a new password via email."
                        // title={"Oh no!"}
                        // message={"No Benefits found for your filter options"}
                        // request={"Please contact"}
                        // contact={"app@hamburgerding.de"}
                        handleOnClose={() => {
                            this.setState({ passwordLost: false })
                            // setshowAlert(false)
                        }}
                    />
                    {/* 
                {
                    <Modal
                    animationType="slide"
                    // transparent={true}
                    visible={modalVisible}
                    visible={true}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >

                </Modal>
                } */}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


const LoginScreen = (props) => <Subscribe to={[AuthContainer]}>
    {
        authStore => <Login {...props} authStore={authStore} />
    }
</Subscribe>

export { LoginScreen }


