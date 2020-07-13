import * as React from 'react';
import { TouchableOpacity } from "react-native"
import { Icon } from "native-base"
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, WebViewScreen } from "../screens"

const Stack = createStackNavigator();

export const HomeStack = () => (
    <Stack.Navigator

        initialRouteName="Home"
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
            name={"Home"} component={HomeScreen} />
        <Stack.Screen options={{
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTitle: "illuminium",
            headerTintColor: "#fff"
        }} name={"WebViewScreen"} component={WebViewScreen} />
    </Stack.Navigator>
)