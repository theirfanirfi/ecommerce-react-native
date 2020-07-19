import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthStack } from "./AuthStack"
import { HomeStack } from "./HomeStack"
import { MessengerStack } from "./MessengerStack"
import { MerchStack } from "./MerchStack"
import { SubscriptionStack } from "./SubscriptionStack"
import { SideBar } from "../components/SideBar"
import { PayPalScreen, Youtube } from '../screens';
import Logout from './Logout';
const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (

        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <SideBar {...props} />} >
            <Drawer.Screen name="Login" component={AuthStack} />
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="Messenger" component={MessengerStack} />
            <Drawer.Screen name="Merch Deals" component={MerchStack} />
            <Drawer.Screen name="Subscription" component={SubscriptionStack} />
            <Drawer.Screen name="Youtube" component={Youtube} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    );
}