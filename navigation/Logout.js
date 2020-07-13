import React from "react";
import { View, Text } from "react-native";
import { Subscribe } from "unstated";
import { AuthContainer } from "../store/auth";
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions, NavigationActions } from 'react-navigation';
class Logout extends React.Component {
    componentDidMount() {
        var obj = new AuthContainer();
        const { navigation } = this.props
        obj.logoutUser(navigation);
        this.props.navigation.navigate("Home")
    }

    render() {
        const { navigation } = this.props
        return (
            <Text onPress={() => {

            }}>Logging out...</Text>
        )
    }
}

export default Logout;