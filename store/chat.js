import { Container } from "unstated"
import AsyncStorage from '@react-native-community/async-storage';
import { Toast } from '../components/Toast'
import { getAllMessages, getUsersList } from "../apis"


class ChatContainer extends Container {
    state = {
        message: {},
        users: []
    };


    setAllMessages = async (member_id) => {
        const user = await AsyncStorage.getItem("user");
        const parsedUser = JSON.parse(user || {});
        const { user_id } = parsedUser;
        const { status, message } = await getAllMessages(member_id, user_id);
        console.log(message)

    }


    getAllMembers = async () => {

        const user = await AsyncStorage.getItem("user");
        const parsedUser = JSON.parse(user || {});
        const { user_id } = parsedUser;
        const { status, message } = await getUsersList(user_id);
        if (status) {
            const { data } = message;
            return this.setState({ users: data })
        }
    }


}

export { ChatContainer }