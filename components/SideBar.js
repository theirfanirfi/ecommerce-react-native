import React from "react";
import { View } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import { Subscribe } from "unstated"
import { AuthContainer } from "../store/auth"
const routes = ["Login", "Home", "Messenger", "Merch Deals", "Youtube", "Subscription"];
export class SideBar extends React.Component {

    render() {
        const { state: { index }, navigation } = this.props
        return (
            <Subscribe to={[AuthContainer]}>
                {
                    (authStore) => {
                        const { state: { userName, isAuthenticated } } = authStore
                        if (isAuthenticated && !routes.includes("Logout")) {
                            // routes.pop("Login")
                            routes.shift();

                            routes.push("Logout")
                        } else if (!isAuthenticated && routes.includes("Logout")) {
                            routes.pop("Logout")
                            routes.splice(0, 0, "Login")

                        }
                        return (
                            <Container >
                                <Content style={{ backgroundColor: "#000000", borderRightColor: "#FFF", borderRightWidth: 0.5 }}>
                                    <View style={{ height: 70, padding: 20 }}>
                                        <Text style={{ color: "#fff", fontFamily: "Roboto-Regular", fontSize: 20 }}>{`Welcome, ${userName || `Guest!`}`}</Text>
                                    </View>
                                    {/* <Image
                        source={{
                            uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
                        }}
                        style={{
                            height: 120,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            alignItems: "center"
                        }}> */}
                                    {/* <Image
                            square
                            style={{ height: 80, width: 70 }}
                            source={{
                                uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
                            }}
                        /> */}
                                    {/* </Image> */}
                                    <List
                                        dataArray={routes}
                                        renderRow={(data, id, itemIndex) => {
                                            console.log(id)
                                            return (
                                                <ListItem
                                                    button
                                                    onPress={() => {
                                                        if (data === "Login" && isAuthenticated)
                                                            this.props.navigation.navigate("Home")
                                                        else if (data === "Messenger" && !isAuthenticated) {
                                                            this.props.navigation.navigate("Login")
                                                        }
                                                        else {
                                                            this.props.navigation.navigate(data)
                                                        }

                                                    }}>
                                                    <Text style={{ color: itemIndex === index ? "#DD0000" : "#fff", fontSize: 20, fontFamily: "Roboto-Regular", padding: 8 }}>
                                                        {data}

                                                    </Text>
                                                </ListItem>
                                            );
                                        }}
                                    />
                                </Content>
                            </Container>
                        )
                    }
                }

            </Subscribe>
        );
    }
}
