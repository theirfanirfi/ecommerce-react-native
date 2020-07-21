import React from "react";
import { View, Text, Button } from "react-native";
import { Subscribe } from "unstated";
import { AuthContainer } from "../store/auth";
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions, NavigationActions } from 'react-navigation';
class Logout extends React.Component {
    componentDidMount() {
        // var obj = new AuthContainer();
        // const { navigation } = this.props
        // obj.logoutUser(navigation);
        // this.props.navigation.navigate("Login")
        // console.log('logout');
        // alert('Logout successful')
    }

    render() {
        const { navigation } = this.props

        return (
            <Subscribe to={[AuthContainer]}>
                {
                    (authStore) => {
                        const { state: { userName, isAuthenticated = false }, logoutUser } = authStore
                        return (
                            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                <Text >Do you surely want to logout?</Text>
                                <Button title="Logout" onPress={() => {
                                    logoutUser(navigation);

                                    navigation.navigate('Login')
                                }} />
                            </View>
                        )
                    }
                }
            </Subscribe>
        )
    }
}

export { Logout };