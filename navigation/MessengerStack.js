import * as React from 'react';
import { TouchableOpacity } from "react-native"
import { Icon } from "native-base"
import { createStackNavigator } from '@react-navigation/stack';
import { Messenger, MessageListing } from "../screens"

const Stack = createStackNavigator();

export const MessengerStack = () => (
    <Stack.Navigator

        initialRouteName="MessageListing"
    >
        <Stack.Screen
            options={({ navigation }) => {
                return (
                    {
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                        headerTitle: "Messenger",
                        headerTintColor: "#fff",


                    }
                )
            }}




            name={"Messenger"} component={Messenger} />
        <Stack.Screen
            options={({ navigation }) => {
                return (
                    {
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                        headerTitle: "Members",
                        headerTintColor: "#fff",
                        headerLeft: () => <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => navigation.openDrawer()}>
                            <Icon name="menuunfold" type="AntDesign" size={100} style={{ color: "#fff" }} />
                        </TouchableOpacity>


                    }
                )
            }}




            name={"MessageListing"} component={MessageListing} />
    </Stack.Navigator>
)