import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
    img: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 2,
    },
    wrapperAddQuickText: {
        height: Dimensions.get("window").height / 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addCart: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 35,
    },
    quickView: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },

    wrapperAddQuickText1: {
        width: Dimensions.get("window").width,
        backgroundColor: 'rgba(0,0,0,0.7)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
    },
    addCart1: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        paddingLeft: 5,
        // marginBottom: 35,
    },
    quickView1: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        paddingRight: 5
    },
    wrapperNamePrice: {
        marginTop: 15,
        marginBottom: 5
    },
    name: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    price: {
        textAlign: 'center',
        color: '#DD0000',
        fontSize: 30,
        fontWeight: 'bold'
    },
    root: {
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
});

const ProductCard = ({ imageUrl, id, customTextStyles, addToCartHandler, quickViewHandler, productName, productPrice }) => {

    return (
        <View style={styles.root}>
            <View>
                <ImageBackground
                    style={styles.img}
                    source={{
                        // uri: 'https://illumenium.veebispetsid.com/wp-content/uploads/2020/03/ILLUMENIUM_netartwork2A.jpg',
                        uri: imageUrl,
                    }}
                >
                    {/* <View style={styles.wrapperAddQuickText}>
                        <TouchableOpacity onPress={addToCartHandler}>
                            <Text style={styles.addCart}>ADD TO CART</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={quickViewHandler}>
                            <Text style={styles.quickView}>QUICK VIEW</Text>
                        </TouchableOpacity>
                    </View> */}

                    <View style={styles.wrapperAddQuickText1}>
                        <TouchableOpacity onPress={addToCartHandler}>
                            <Text style={styles.addCart1}>ADD TO CART</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => quickViewHandler(id)}>
                            <Text style={styles.quickView1}>QUICK VIEW</Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>

            {(productName || productPrice) ?
                <View style={styles.wrapperNamePrice}>
                    {productName ? <Text style={styles.name}>{productName}</Text> : null}
                    {productPrice ? <Text style={styles.price}>{productPrice}</Text> : null}
                </View> : null}

        </View>
    )
}

export { ProductCard }