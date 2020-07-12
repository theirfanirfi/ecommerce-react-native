import * as React from 'react';
import { TouchableOpacity } from "react-native"
import { Icon } from "native-base"
import { createStackNavigator } from '@react-navigation/stack';
import { SubscriptionScreen, PlayList } from "../screens"

const Stack = createStackNavigator();

export const SubscriptionStack = () => (
    <Stack.Navigator

        initialRouteName="SubscriptionScreen"
    >
        <Stack.Screen
            options={({ navigation }) => {
                return (
                    {
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                        headerTintColor: "#fff",
                        headerTitle: "Subscription",
                        headerLeft: () => <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => navigation.openDrawer()}>
                            <Icon name="menuunfold" type="AntDesign" size={100} style={{ color: "#fff" }} />
                        </TouchableOpacity>


                    }
                )
            }}




            name={"SubscriptionScreen"} component={SubscriptionScreen} />
        <Stack.Screen options={{
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTitle: "Play List",
            headerTintColor: "#fff"
        }} name={"PlayList"} component={PlayList} />
    </Stack.Navigator>
)