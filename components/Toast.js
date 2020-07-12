import { Toast as NativeToast } from 'native-base';

const toastType = {
    0: "success",
    1: "warning",
    2: "danger"
}
export const Toast = (text, type) => {
    NativeToast.show({
        text,
        type: toastType[type],
        buttonText: 'Okay'
    })
}  