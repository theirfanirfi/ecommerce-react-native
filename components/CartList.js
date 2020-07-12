import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

const styles = StyleSheet.create({
    wrapperCountContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 62,
        borderWidth: 1,
        borderColor: '#3E3E3E',
    },
    wrapperSign: {
        backgroundColor: '#383838',
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperCount: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sign: {
        color: 'white',
    },
    count: {
        color: 'white',
        fontSize: 12
    },
    closeIconContainer: {
        height: 20,
        width: 20,
        marginRight: 7,
        marginTop: 7,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    listHeaderContainer: {
        width: Dimensions.get("window").width,
        flexDirection: 'row',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#3E3E3E',
        borderTopWidth: 1,
        borderTopColor: '#3E3E3E',
    },
    productHeaderContainer: {
        width: '35%',
        height: 90,
        marginLeft: 3,
    },
    nameHeaderContainer: {
        height: 20,
    },
    wrapperImage: {
        height: 70
    },
    priceHeaderContainer: {
        width: '17%',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    quantityHeaderContainer: {
        width: '20%',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subTotalHeaderContainer: {
        width: '20%',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconHeaderContainer: {
        width: '7%',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: '100%',
        height: '100%',
    },
    subTotal: {
        color: 'white',
    },
    price: {
        color: 'white'
    },
    name: {
        color: 'white',
    },
});

const CartList = ({ imageUrl, productName, productPrice, id, quantity, addQuantityHandler, lessQuantityHandler, cancelItemHandler }) => {
    return (
        <View style={styles.listHeaderContainer}>
            <View style={styles.productHeaderContainer}>
                <View style={styles.wrapperImage}>
                    <Image
                        style={styles.img}
                        source={{
                            uri: imageUrl,
                        }}
                    />
                </View>
                <View style={styles.nameHeaderContainer}>
                    <Text style={styles.name} numberOfLines={1} >{productName}</Text>
                </View>
            </View>

            <View style={styles.priceHeaderContainer}><Text style={styles.price}>{productPrice + '€'}</Text></View>

            <View style={styles.quantityHeaderContainer}>
                <View style={styles.wrapperCountContainer}>
                    <TouchableOpacity onPress={() => lessQuantityHandler(id)} style={styles.wrapperSign}><Text style={styles.sign}>-</Text></TouchableOpacity>
                    <View style={styles.wrapperCount}><Text style={styles.count}>{quantity}</Text></View>
                    <TouchableOpacity onPress={() => addQuantityHandler(id)} style={styles.wrapperSign}><Text style={styles.sign}>+</Text></TouchableOpacity>
                </View>
            </View>

            <View style={styles.subTotalHeaderContainer}><Text style={styles.subTotal}>{(productPrice * quantity + '€')}</Text></View>

            <View style={styles.iconHeaderContainer}>
                <TouchableOpacity style={styles.closeIconContainer}>
                    <Icon
                        name="close"
                        type="EvilIcons"
                        onPress={() => cancelItemHandler(id)}
                        style={{ fontSize: 14, color: 'white', }}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export { CartList }