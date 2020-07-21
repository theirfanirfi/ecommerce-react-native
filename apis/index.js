const endpoint = "https://illumenium.veebispetsid.com/wp-json/api"


export const login = async (username, password) => {
    try {
        const params = `username=${username}&password=${password}`
        const url = `${endpoint}/login?${params}`
        console.log(url);
        const response = await fetch(url, { method: "GET" });
        const responseJson = await response.json()
        if (responseJson.status === "success") {
            console.log(responseJson)
            return {
                status: true,
                message: responseJson
            }
        }
        return {
            status: false,
            message: responseJson,
        }
    } catch (err) {
        return {
            status: false,
            err
        }
    }

}

export const signup = async (username, fullName, email, password) => {
    try {
        const params = `username=${username}&fullname=${fullName}&email=${email}&password=${password}`
        const url = `${endpoint}/register?${params}`
        console.log("Registeration url = " + url);
        const response = await fetch(url, { method: "GET" });
        const responseJson = await response.json()
        if (responseJson.status === "success") {
            return {
                status: true,
                message: responseJson
            }
        }
        return {
            status: false,
            message: responseJson,
        }
    } catch (err) {
        return {
            status: false,
            err
        }
    }

}

export const getProducts = async () => {
    try {
        const url = `https://illumenium.veebispetsid.com/wp-json/api/get-cpt-data?post_type=product&meta_keys[]=_regular_price`
        const response = await fetch(url, { method: "GET" });
        const responseJson = await response.json()
        if (responseJson.status === "success") {
            return {
                status: true,
                message: responseJson
            }
        }
        return {
            status: false,
            message: responseJson,
        }
    } catch (err) {
        return {
            status: false,
            err
        }
    }
}

export const getPosts = async () => {
    const url = "https://illumenium.veebispetsid.com/wp-json/wp/v2/posts"
    try {
        const response = await fetch(url, { method: "GET" });
        const responseJson = await response.json()

    } catch (err) {

    }
}

export const getAllMessages = async (member_id, user_id) => {
    try {
        const url = `https://illumenium.veebispetsid.com/wp-json/api/bp-load-all-chat?member_id=${member_id}&user_id=${user_id}`
        const response = await fetch(url, { method: "GET" });
        const responseJson = await response.json()
        if (responseJson.status === "success") {
            return {
                status: true,
                message: responseJson
            }
        }
        return {
            status: false,
            message: responseJson,
        }
    } catch (err) {
        return {
            status: false,
            err
        }
    }
}


export const getUsersList = async (user_id) => {
    try {
        const url = `https://illumenium.veebispetsid.com/wp-json/api/bp-get-friends?user_id=${user_id}`
        const response = await fetch(url, { method: "GET" });
        const responseJson = await response.json()
        if (responseJson.status === "success") {
            return {
                status: true,
                message: responseJson
            }
        }
        return {
            status: false,
            message: responseJson,
        }
    } catch (err) {
        return {
            status: false,
            err
        }
    }
}


export const sendMessage = async (user_id, reciever_id, msg) => {
    try {
        const url = `https://illumenium.veebispetsid.com/wp-json/api/bp-send-message?messageContent=${msg}&receiverUserId=${reciever_id}&senderUserId=${user_id}`
        const response = await fetch(url, { method: "GET" });
        const responseJson = await response.json()
        if (responseJson.status === "success") {
            return {
                status: true,
                message: responseJson
            }
        }
        return {
            status: false,
            message: responseJson,
        }
    } catch (err) {
        return {
            status: false,
            err
        }
    }
}