import * as React from 'react';
import { TouchableOpacity } from "react-native"
import { Icon } from "native-base"
import { createStackNavigator } from '@react-navigation/stack';
import { ProductsScreen, CartsScreen, CheckoutScreen, PayPalScreen } from "../screens"

const Stack = createStackNavigator();

export const MerchStack = () => (
    <Stack.Navigator

        initialRouteName="Products"
    >
        <Stack.Screen
            options={({ navigation }) => {
                return (
                    {
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                        headerTintColor: "#fff",
                        headerTitle: "Merch Deals",
                        headerLeft: () => <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => navigation.openDrawer()}>
                            <Icon name="menuunfold" type="AntDesign" size={100} style={{ color: "#fff" }} />
                        </TouchableOpacity>


                    }
                )
            }}




            name={"Products"} component={ProductsScreen} />
        <Stack.Screen options={{
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTitle: "Cart Details",
            headerTintColor: "#fff"
        }} name={"Carts"} component={CartsScreen} />
        <Stack.Screen options={{
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTitle: "Checkout",
            headerTintColor: "#fff"
        }} name={"Checkout"} component={CheckoutScreen} />

        <Stack.Screen options={{
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTitle: "Payment",
            headerTintColor: "#fff"
        }} name={"PayPalScreen"} component={PayPalScreen} />
    </Stack.Navigator>
)