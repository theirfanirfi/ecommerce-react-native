import * as React from 'react';
import { TouchableOpacity } from "react-native"
import { Icon } from "native-base"
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, SignupScreen, PayPalScreen } from "../screens"

const Stack = createStackNavigator();

export const AuthStack = () => (
    <Stack.Navigator

        initialRouteName="Login"
    >
        <Stack.Screen
            options={({ navigation }) => {
                return (
                    {
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                        headerTitle: "",
                        headerLeft: () => <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => navigation.openDrawer()}>
                            <Icon name="menuunfold" type="AntDesign" size={100} style={{ color: "#fff" }} />
                        </TouchableOpacity>


                    }
                )
            }}




            name={"Login"} component={LoginScreen} />
        <Stack.Screen options={{
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTitle: "Register Your Account",
            headerTintColor: "#fff"
        }} name={"Registration"} component={SignupScreen} />

    </Stack.Navigator>
)