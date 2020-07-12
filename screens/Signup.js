import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, KeyboardAvoidingView, ActivityIndicator, Keyboard, TouchableOpacity } from 'react-native';
import { CheckBox, Button } from 'native-base';
import { CustomTextInput } from '../components/CustomTextInput';
import { TouchableText } from '../components/TouchableText';
import { signup } from "../apis"
import { Toast } from '../components/Toast';

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        backgroundColor: '#000000',
    },
    root: {
        marginHorizontal: 20,
    },
    title: {
        color: 'white',
        fontSize: 20
    },
    header: {
        backgroundColor: '#000000'
    },
    inputContainer: {
        // backgroundColor: 'red',
        height: Dimensions.get("window").height / 2.1,
        // marginHorizontal: 20,
        justifyContent: 'space-around'
    },
    passwordLenth: {
        color: 'white',
        fontSize: 20,
        // paddingTop: 5,
        // paddingBottom: 5,
    },
    readPolicy: {
        color: 'white',
        fontFamily: "Roboto-Medium"
    },
    policyPasswordLenthContainer: {
        height: Dimensions.get("window").height / 5.5,
        backgroundColor: "red",
        marginTop: -5

    },
    checkBoxPrivacyContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    privacyContainer: {
        marginLeft: 30,
    },

    checkBox: {
        borderColor: 'white',
        // backgroundColor: 'white',
        // color: '#000000',
    },
    scroll: {
        marginBottom: 40
    },
    signUpBtn: {
        backgroundColor: '#DD0000',
        width: 180,
        height: 60,
        justifyContent: 'center',
        borderRadius: 5,

    },
    signUpBtnContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 33,
    },
    signUpBtnText: {
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Roboto-Bold",
        fontSize: 16,
    },
});

const strongPasswordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

class SignupScreen extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        name: "",
        agreed: false,
        loading: false
    }

    onChangePassword = (text) => {
        console.log(text);
        this.setState({ password: text })

    }

    onChangeAgreed = () => {
        this.setState({ agreed: !this.state.agreed })
    }
    signUpSubmit = async () => {
        Keyboard.dismiss();
        this.setState({ loading: true })
        const { username, email, password, name } = this.state;
        const response = await signup(username, name, email, password);
        this.setState({ loading: false })
        Toast(response.message?.message || "Something went wrong", response.status ? 0 : 2)
        if (response.status) {
            return this.props.navigation.navigate("Login")

        }
    }
    render() {
        const { username, email, password, name, agreed, loading } = this.state;
        const disable = Boolean(!username || !email || !password || !name || !agreed);
        return (


            <View style={styles.container}>
                <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={50}>
                    <ScrollView style={styles.scroll}>
                        <View style={styles.root}>

                            <View style={styles.inputContainer}>
                                <CustomTextInput
                                    title="Username *"
                                    value={username}
                                    keyboardType={"email-address"}
                                    handleTextFieldChange={(text) => { this.setState({ username: text }) }}
                                    maxLength={40}
                                />
                                <CustomTextInput
                                    title="Email Address *"
                                    value={email}
                                    keyboardType={"email-address"}
                                    handleTextFieldChange={(text) => { this.setState({ email: text }) }}
                                    maxLength={40}
                                />
                                <CustomTextInput
                                    title="Choose a password *"
                                    value={password}
                                    secureTextEntry={true}
                                    keyboardType={"default"}
                                    handleTextFieldChange={this.onChangePassword}
                                    maxLength={40}
                                />
                            </View>
                            {/* <View style={styles.policyPasswordLenthContainer}>
                            <Text style={styles.passwordLenth}>Weak</Text>
                            <Text style={styles.readPolicy}>Hint: The password should be at least 12 character long.
                            To make it stronger, use upper and lower case letters,numbers and symbols like !"?$% &).
                    </Text>
                        </View> */}
                            <View>
                                <CustomTextInput
                                    title="Name *"
                                    // placeholderTextColor="#CFCFCF"
                                    // placeholder="e.g. yourname@something.com"
                                    value={name}
                                    // textContentType={"emailAddress"}
                                    keyboardType={"email-address"}
                                    handleTextFieldChange={(text) => { this.setState({ name: text }) }}
                                    // inputStyles={styles.input}
                                    maxLength={40}
                                />
                                <Text style={styles.readPolicy}>
                                    This field may be seen by:Everyone
                            </Text>
                            </View>

                            <TouchableOpacity style={styles.checkBoxPrivacyContainer} onPress={this.onChangeAgreed}>
                                <View>
                                    <CheckBox style={styles.checkBox} checked={agreed} onPress={this.onChangeAgreed} />
                                </View>
                                <View style={styles.privacyContainer}>
                                    <Text style={styles.readPolicy}>I have read and agree to the</Text>
                                    <TouchableText text="privacy policy"
                                        handleOnPress={this.onPasswordLostHere}
                                        customTextStyles={{ textDecorationLine: 'underline', color: 'red', fontFamily: "Roboto-Regular" }}
                                    />
                                </View>
                            </TouchableOpacity>

                            <View style={styles.signUpBtnContainer}>
                                <Button style={[styles.signUpBtn, disable && { backgroundColor: "#DD000051" }]} onPress={() => { !disable && this.signUpSubmit() }}>

                                    {
                                        loading ? <ActivityIndicator color="#fff" size="small" /> : <Text style={styles.signUpBtnText}>Complete Sign Up</Text>
                                    }


                                </Button>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

export { SignupScreen }