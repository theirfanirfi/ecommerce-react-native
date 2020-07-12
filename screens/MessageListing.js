import React, { Component } from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import { Subscribe } from "unstated";
import { ChatContainer } from "../store/chat";
import { getAllMessages } from "../apis";

class MessageListing extends Component {



    state = {
        users: []
    }
    componentDidMount() {
        const { store: { getAllMembers } } = this.props
        return getAllMembers()
    }


    static getDerivedStateFromProps(props, state) {
        const { store: { state: { users } } } = props
        if (users.length !== state.users.length) {
            return {
                users,
            }
        }
        return null
    }
    render() {
        const { users } = this.state
        const { navigation } = this.props
        return (

            <View style={{ flex: 1, backgroundColor: '#f1f5f7' }}>

                <FlatList
                    contentContainerStyle={{ paddingBottom: 10 }}
                    data={users}
                    renderItem={({ item }) => <List item={item} navigation={navigation} />}
                    keyExtractor={item => item.id}
                />
            </View>



        )
    }
}


function List({ item, onPress, navigation }) {
    return (
        <TouchableOpacity

            onPress={() => navigation.navigate("Messenger", { member_id: item.id })}
            style={{
                flexDirection: 'row',
                height: 80,
                paddingHorizontal: 20,
                borderBottomWidth: 1,
                borderColor: '#D3D3D3',
                backgroundColor: '#FAFAFA',
            }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View>
                    <Image style={{ width: 45, height: 45 }} source={{ uri: `https:${item.avatat}` }} />
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 16 }}>
                <Text style={{ fontSize: 16 }}>{item.name}</Text>
            </View>
            <TouchableOpacity style={{ justifyContent: 'center' }}>
                <View style={{
                    height: 35,
                    width: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 100,
                }}>

                    <View style={{ height: 10, width: 10, backgroundColor: item.memberstatus === "chat_offline" ? "grey" : "lime", borderRadius: 5 }} />
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}


const MessageListingWrapper = (props) => {
    return (
        <Subscribe to={[ChatContainer]}>
            {
                (chatStore) => {
                    return (
                        <MessageListing {...props} store={chatStore} />
                    )
                }
            }
        </Subscribe>
    )
}
export { MessageListingWrapper as MessageListing }