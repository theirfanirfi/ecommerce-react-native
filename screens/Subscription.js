import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

const styles = StyleSheet.create({
    root: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        backgroundColor: '#000000',
    },
    img: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 2,
    },
    container: {
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#3E3E3E',
        marginTop: 10
    },
    subsc: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 5
    },
    wrapperPriceText: {
        flexDirection: 'row',
        marginBottom: 15
    },
    price: {
        color: 'red',
    },
    month: {
        color: 'white',
    },
    service: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 15
    },
    buyBtn: {
        width: '100%',
        height: 45,
        backgroundColor: '#FFC439',
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    buyNow: {
        fontWeight: 'bold',
    },
    quantityHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    wrapperCountContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#3E3E3E',
    },

    wrapperSign: {
        backgroundColor: '#383838',
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperCount: {
        width: 35,
        height: 35,
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
    signUpBtn: {
        width: 107,
        height: 37,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },
    signUpNow: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
    },
    addToWishlistBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 125,
        marginBottom: 5
    },
    addWish: {
        color: 'white',
        marginLeft: 10
    },
    wrapperCategory: {
        flexDirection: 'row',
        marginBottom: 10
    },
    category: {
        color: 'white'
    },

});


class SubscriptionScreen extends Component {
    state = {
        quantity: 1,
    }

    addQuantityHandler = (id) => {
        this.setState({ quantity: this.state.quantity + 1 })
    }

    lessQuantityHandler = () => {
        if (this.state.quantity !== 0) {
            this.setState({ quantity: this.state.quantity - 1 })
        }
    }

    buyNowHandler = () => {
        this.props.navigation.navigate("PlayList")
    }

    signUpNowHandler = () => {
        // alert('Goto Sign Up Now')
    }

    subscriptionCategoryHandler = () => {
        // alert('Subscription Category Successfuly')
    }

    addToWishListHandler = () => {
        // alert('Add Wish List Successfuly')
    }

    render() {
        const { quantity } = this.state;
        return (
            <View style={styles.root}>
                <Image
                    style={styles.img}
                    source={{
                        uri: "https://illumenium.veebispetsid.com/wp-content/uploads/2020/02/89474164_675431089874059_401256834297495552_n-scaled.jpg",
                    }}
                />

                <View style={styles.container}>

                    <Text style={styles.subsc}>Subscription</Text>
                    <View style={styles.wrapperPriceText}>
                        <Text style={styles.price}>5.00€</Text>
                        <Text style={styles.month}> / month</Text>
                    </View>
                    <Text style={styles.service}>Sign up to subscribe to our streaming service and listen to the newest ILLUMENIUM sound craft!</Text>

                    <TouchableOpacity onPress={this.buyNowHandler} style={styles.buyBtn}>
                        <Text style={styles.buyNow}>Buy Now</Text>
                    </TouchableOpacity>

                    <View style={styles.quantityHeaderContainer}>
                        <View style={styles.wrapperCountContainer}>
                            <TouchableOpacity onPress={this.lessQuantityHandler} style={styles.wrapperSign}><Text style={styles.sign}>-</Text></TouchableOpacity>
                            <View style={styles.wrapperCount}><Text style={styles.count}>{quantity}</Text></View>
                            <TouchableOpacity onPress={this.addQuantityHandler} style={styles.wrapperSign}><Text style={styles.sign}>+</Text></TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={this.signUpNowHandler} style={styles.signUpBtn}>
                            <Text style={styles.signUpNow}>SIGN UP NOW</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={this.addToWishListHandler} style={styles.addToWishlistBtn}>
                        <Icon
                            name="hearto"
                            type="AntDesign"
                            style={{ fontSize: 14, color: 'white', }}
                        />
                        <Text style={styles.addWish}>Add to wishlist</Text>
                    </TouchableOpacity>

                    <View style={styles.wrapperCategory}>
                        <Text style={styles.category}>Category: </Text>
                        <TouchableOpacity onPress={this.subscriptionCategoryHandler}><Text style={styles.category}>Subscription</Text></TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}

export { SubscriptionScreen }