import React from "react";
import Dialog, {
    DialogContent,
    FadeAnimation,
    DialogFooter
} from "react-native-popup-dialog";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

// import { colors } from './data'
// import { images } from './Images'
// import { IconButton } from './Btn'

// const { NotFound } = images
const CustomModal = ({ title,
    message,
    request,
    contact,
    text,
    image,
    visible,
    handleOnClose,
    closeIconBtn,
    content,
    modalBackgroundColor,
    buttonBackgroundColor,
    buttonText
}) => {
    return (
        <Dialog
            visible={visible}
            onTouchOutside={handleOnClose}
            width={0.8}
            // dialogStyle={styles.modalBackground}
            dialogStyle={modalBackgroundColor}
            dialogAnimation={
                // new SlideAnimation({
                //     slideFrom: "bottom",
                //     useNativeDriver: true
                // })
                new FadeAnimation({
                    initialValue: 0,
                    animationDuration: 250,
                    useNativeDriver: true,
                })
            }
            footer={
                <DialogFooter style={styles.dialogFooter}>
                    {[<TouchableOpacity
                        key="ok"
                        // style={styles.actionBtn}
                        style={[styles.actionBtn, { ...buttonBackgroundColor, borderRadius: 5 }]}
                        onPress={handleOnClose}
                    >
                        <Text style={styles.btnText}>{buttonText}</Text>
                    </TouchableOpacity>]}
                </DialogFooter>
            }
        >
            <DialogContent style={styles.Wrapper}>
                {closeIconBtn && <View style={styles.header}>
                    {title && <View style={styles.title}>
                        <Text style={styles.headerText}>
                            {title}
                        </Text>
                    </View>}
                    <IconButton
                        name="close"
                        type="EvilIcons"
                        onPress={handleOnClose}
                        btnStyle={styles.headerIconContainer}
                        iconStyle={styles.headerIcon}
                    />
                </View>}

                <View>
                    {content}
                </View>
                {/* <View style={styles.messageView}>
                    <Text style={styles.text}>
                        {message}
                    </Text>
                </View>
                <View style={styles.imageView}>
                    <Image
                        source={NotFound}
                        style={{ width: '100%', height: '100%', }}
                    />
                </View>
                <View style={styles.footer}>
                    <Text style={styles.request}>{request}</Text>

                    <TouchableOpacity>
                        <Text style={styles.contact}>{contact}</Text>
                    </TouchableOpacity>
                </View> */}

            </DialogContent>

        </Dialog >
    );
}

const styles = StyleSheet.create({
    dialogFooter: {
        justifyContent: 'center',
        borderTopWidth: 0,
        borderColor: 'white'
    },
    modalBackground: {
    },
    Wrapper: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerIconContainer: {
        height: 27,
        width: 27,
        borderRadius: 27,
        marginRight: 7,
        marginTop: 7,
        backgroundColor: 'black',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    headerIcon: {
        textAlign: "center",
        fontWeight: "bold",
        color: 'white',
        fontSize: 17,
    },
    headerText: {
        color: 'white',
        // fontFamily: "AzoSans-Black",
        fontSize: 14,
        textTransform: "uppercase",
        textAlign: 'center',
    },
    title: {
        paddingLeft: 138,
        marginTop: 13,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        // marginVertical: 20,
        textTransform: "uppercase",
        // fontFamily: "AzoSans-Black",
        fontSize: 14,
    },
    messageView: {
        marginBottom: 10,
        paddingHorizontal: 30,
    },
    imageView: {
        width: '60%',
        height: 230,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10
    },
    content: {
        // padding: 0,
        // height: "100%",
        // flexDirection: "column",
        // justifyContent: 'space-between',
        // backgroundColor: colors.text,
    },
    footer: {
        width: "100%",
        justifyContent: 'center',
        alignItems: "center",
    },
    actionBtn: {
        height: 52,
        width: '60%',
        // backgroundColor: 'black',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        // marginVertical: 12
        marginBottom: 15,
        marginTop: -10
    },
    btnText: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Roboto-Bold',
        fontWeight: '600'
    },
    request: {
        color: 'white',
        // fontFamily: 'AzoSans-Regular',
    },
    contact: {
        textDecorationLine: 'underline',
        // fontFamily: 'AzoSans-Regular',
    }
});

CustomModal.propTypes = {
    // title: PropTypes.string.isRequired,
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.any,
    handleOnClose: PropTypes.func.isRequired,
}

CustomModal.defaultProps = {
    text: '',
    image: '',
}

export { CustomModal };
