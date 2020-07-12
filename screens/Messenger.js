

import React from 'react'
import { View, TouchableWithoutFeedback, Keyboard } from "react-native"
import AsyncStorage from '@react-native-community/async-storage';
import { Icon } from "native-base"
import { Subscribe } from "unstated"
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'
import { ChatContainer } from '../store/chat'
import { getAllMessages, sendMessage } from "../apis/index"


class Messenger extends React.Component {
    state = {
        messages: [],
        member_id: null,
        user_id: null
    }
    timer = null
    async componentDidMount() {
        await this.getMessages()
        this.timer = setInterval(() => this.getMessages(), 2000);

    }
    componentWillUnmount() {
        return clearInterval(this.timer)
    }
    getMessages = async () => {
        const { params: { member_id } } = this.props.route
        const user = await AsyncStorage.getItem("user");
        const parsedUser = JSON.parse(user || {});
        const { user_id } = parsedUser;
        this.setState({ member_id, user_id })
        const { status, message } = await getAllMessages(member_id, user_id)
        if (status) {
            const { data } = message;
            const messages = data.map(({ msg_id, msg, msg_sender_id }) => {
                return ({
                    _id: msg_id,
                    text: msg,
                    createdAt: new Date(),
                    user: msg_sender_id != user_id ? {
                        _id: user_id,
                    } : {
                            _id: member_id,
                        }
                })
            })
            return this.setState({ messages })
        }
    }
    async onSend(messages = []) {
        const { text } = messages[0]
        const { member_id, user_id } = this.state
        await sendMessage(user_id, member_id, text)
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))


    }



    renderBubble(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: "#DD0000",
                    },
                    left: {
                    }
                }}
            />
        )
    }

    renderSend(props) {
        return (
            <Send
                {...props}
            >
                <View style={{ marginRight: 10, marginBottom: 10 }}>
                    <Icon name="md-send" type="Ionicons" style={{ color: "red" }} />
                </View>
            </Send>
        );
    }

    render() {
        const { user_id } = this.state
        return (


            <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: user_id,
                    }}
                    renderAvatar={null}
                    messagesContainerStyle={{ backgroundColor: "#000000" }}
                    renderBubble={this.renderBubble}
                    renderSend={this.renderSend}

                />

            </TouchableWithoutFeedback>
        )
    }
}



const MessengerWrapper = (props) => {
    return (
        <Subscribe to={[ChatContainer]}>
            {
                (chatStore) => <Messenger {...props} store={chatStore} />
            }
        </Subscribe>
    )
}
export { MessengerWrapper as Messenger }