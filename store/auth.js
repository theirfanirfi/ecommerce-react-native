import { Container } from "unstated"
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions } from "@react-navigation/native";
const Stack = createStackNavigator();


class AuthContainer extends Container {
    state = {
        isAuthenticated: false,
        authToken: "",
        userId: null,
        userName: ""
    };

    checkAuthentication = async () => {
        const user = await AsyncStorage.getItem("user");
        if (user) {
            const parsedUser = JSON.parse(user);
            const { auth_token, user_id, user_login } = parsedUser;
            return this.setState(
                {
                    isAuthenticated: true,
                    authToken: auth_token,
                    userId: user_id,
                    userName: user_login

                })
        }
        return this.setState({ isAuthenticated: false })
    }

    logoutUser = async (props) => {
        AsyncStorage.removeItem("user");
        this.setState(
            {
                isAuthenticated: false,
                authToken: "",
                userId: null,
                userName: ""

            })
        return this.checkAuthentication()


    }

}

export { AuthContainer }