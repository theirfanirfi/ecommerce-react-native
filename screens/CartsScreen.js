import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Subscribe } from 'unstated';
import { CartList } from '../components/CartList';
import { images } from '../components/Images';
import { CartContainer } from '../store/cart';


const { Visa, MasterCard, Maestro, Discover, Amex } = images

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#0F0F17',
        flex: 1
    },
    listHeaderContainer: {
        width: Dimensions.get("window").width,
        flexDirection: 'row',
    },
    productHeaderContainer: {
        width: '35%',
    },
    priceHeaderContainer: {
        width: '17%',
    },
    quantityHeaderContainer: {
        width: '20%',
    },
    subTotalHeaderContainer: {
        width: '20%',
    },
    iconHeaderContainer: {
        width: '7%',
    },
    listHeaderTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    listHeaderProductTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cartTotalRoot: {
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#3E3E3E',
    },
    promotionalCodeRoot: {
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#3E3E3E',
        marginBottom: 10
    },
    CouponCodeApplyBtnContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 15,
    },
    cartTotalHeaderContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#3E3E3E',
        marginTop: 10,
    },
    cartTotalHeader: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    subTotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10

    },
    shippingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#3E3E3E',
        marginTop: 10

    },
    ByPostContainer: {
        marginBottom: 10
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    cartTotalListText: {
        color: 'white',
    },
    cartTotalPriceText: {
        color: 'red'
    },
    btnContainer: {
        alignItems: 'flex-end'
    },
    updateCartBtn: {
        width: 122,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DD0000',
        marginTop: 20,
        marginBottom: 10
    },
    updateCartBtnText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    proceedCheckOutBtn: {
        width: 170,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DD0000',
    },
    proceedCheckOutBtnText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    payPalBtn: {
        width: '100%',
        height: 45,
        backgroundColor: '#FFC439',
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    pPayPalImageContainer: {},
    pPayPalImage: {
        width: 90,
        height: 22,
    },
    payPalImageContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25
    },
    paPalImage: {
        width: 65,
        height: 25,
    },
    poweredBy: {
        color: 'white',
    },
    payBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    visaBtn: {
        // width: 60,
        // height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aqua',
        marginRight: 5
    },
    visa: {
        width: 50,
        height: 22,
    },
    masterCardBtn: {
        // width: 60,
        // height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3E3939',
        marginRight: 5
    },
    masterCard: {
        width: 50,
        height: 28,
    },
    amexBtn: {
        // width: 60,
        // height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1477BE',
        marginRight: 5
    },
    amex: {
        width: 50,
        height: 22,
    },
    DiscouverBtn: {
        // width: 60,
        // height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aqua',
        marginRight: 5
    },
    discouver: {
        width: 50,
        height: 22,
        backgroundColor: 'green',
        color: 'red'
    },
    field: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        borderWidth: 1,
        borderColor: "#2E2E30",
        height: 40,
        paddingLeft: 10,
        width: 185,
    },
    couponBtn: {
        width: 122,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DD0000',
        marginLeft: 10,
    },
    couponBtnText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

class CartsScreen extends Component {
    state = {
        quickModalVisible: false,
        modalData: {},
        addCount: 1,
        promotionalCode: '',
    }

    addQuantityHandler = (id) => {
        // let getCartListData = this.state.cartListData;
        const findAddItem = this.state.cartListData.find((item) => item.id === id)
        console.log({ findAddItem })
        // alert("Add quantity.")
        // let localCount = this.state.addCount;
        // this.setState({ addCount: this.state.addCount + 1 })
    }

    lessQuantityHandler = () => {
        // alert("Less quantity.")
        // let localCount = this.state.addCount;
        // if (localCount !== 0) {
        //     this.setState({ addCount: localCount - 1 })
        // }
    }

    cancelItemHandler = () => {
        // alert("Cancel this item.")
    }
    updateCart = () => {
        // alert('Goto Update Cart')
    }

    proceedToCheckOut = () => {
        this.props.navigation.navigate("Checkout")

    }

    payPal = cart => {
        // alert('Goto Paypal Checkout')
        // console.log(cart)
        // let orders = [];
        // cart.map((item, index) => {
        //     orders.push({ product_id: item.id, quantity: item.quantity });
        // });

        this.props.navigation.navigate("Checkout");

    }

    payVisa = () => {
        // alert('Goto Visa')
    }

    payMasterCard = () => {
        // alert('Goto MasterCard')
    }

    payAmex = () => {
        // alert('Goto Amex')
    }

    payDiscouver = () => {
        // alert('Goto Discover')
    }

    couponApply = () => {
        // alert("Your Apply Faild")
    }

    render() {
        const { promotionalCode } = this.state;

        return (
            <Subscribe to={[CartContainer]}>

                {
                    (cartStore) => {
                        const { state: { cart }, addToCart, increaseCount, decreaseCount, removeFromCart, cartTotalAmount, getCart } = cartStore
                        const total = cartTotalAmount();
                        if (!Object.keys(cart).length)
                            this.props.navigation.goBack()
                        // this.setState({ cart: getCart() });
                        // console.log("my cart: " + getCart());

                        return (
                            <View style={styles.root}>

                                <ScrollView>

                                    {/* <View style={styles.listHeaderContainer}>
                                    <View style={styles.productHeaderContainer}><Text style={styles.listHeaderProductTitle}>Product</Text></View>
                                    <View style={styles.priceHeaderContainer}><Text style={styles.listHeaderTitle}>Price</Text></View>
                                    <View style={styles.quantityHeaderContainer}><Text style={styles.listHeaderTitle}>Quantity</Text></View>
                                    <View style={styles.subTotalHeaderContainer}><Text style={styles.listHeaderTitle}>Subtotal</Text></View>
                                    <View style={styles.iconHeaderContainer}><Text style={styles.listHeaderTitle}></Text></View>
                                </View> */}

                                    <View>
                                        <FlatList
                                            data={Object.values(cart)}
                                            keyExtractor={item => item.id}
                                            renderItem={({ item, index }) => {
                                                return (
                                                    <CartList
                                                        imageUrl={item.img}
                                                        productName={item.title}
                                                        productPrice={item._regular_price || 0}
                                                        id={item.id}
                                                        quantity={item.quantity}
                                                        addQuantityHandler={() => increaseCount(item.id)}
                                                        lessQuantityHandler={() => item.quantity === 1 ? removeFromCart(item.id) : decreaseCount(item.id)}
                                                        cancelItemHandler={() => removeFromCart(item.id)}
                                                    />
                                                )
                                            }}
                                        />
                                    </View>

                                    <View style={styles.promotionalCodeRoot}>
                                        <View style={styles.cartTotalHeaderContainer}>
                                            <Text style={styles.cartTotalHeader}>Have A Promotional Code?</Text>
                                        </View>

                                        <View style={styles.CouponCodeApplyBtnContainer}>
                                            <TextInput
                                                style={styles.field}
                                                placeholderTextColor="white"
                                                placeholder="Coupon code"
                                                value={promotionalCode}
                                                onChangeText={(text) => { this.setState({ promotionalCode: text }) }}
                                                selectionColor="red"
                                            />

                                            <TouchableOpacity onPress={this.couponApply} style={styles.couponBtn}>
                                                <Text style={styles.couponBtnText}>APPLY COUPON</Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>

                                    <View style={styles.cartTotalRoot}>
                                        <View style={styles.cartTotalHeaderContainer}>
                                            <Text style={styles.cartTotalHeader}>Cart totals</Text>
                                        </View>

                                        <View style={styles.subTotalContainer}>
                                            <Text style={styles.cartTotalListText}>Subtotal</Text>
                                            <Text style={styles.cartTotalListText}>{`${total}€`}</Text>
                                        </View>

                                        <View style={styles.shippingContainer}>
                                            <View>
                                                <Text style={styles.cartTotalListText}>Shipping</Text>
                                            </View>
                                            <View style={styles.ByPostContainer}>
                                                <Text style={styles.cartTotalListText}>By post: 15.50€</Text>
                                                <Text style={styles.cartTotalListText}>Shipping option will be updated</Text>
                                                <Text style={styles.cartTotalListText}>durring checkout.</Text>
                                            </View>
                                        </View>

                                        <View style={styles.totalContainer}>
                                            <Text style={styles.cartTotalListText}>Total</Text>
                                            <Text style={styles.cartTotalPriceText}>{total + 15.50}€</Text>
                                        </View>

                                        <View style={styles.btnContainer}>
                                            <TouchableOpacity onPress={this.updateCart} style={styles.updateCartBtn}>
                                                <Text style={styles.updateCartBtnText}>UPDATE CART</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={this.proceedToCheckOut} style={styles.proceedCheckOutBtn}>
                                                <Text style={styles.proceedCheckOutBtnText}>PROCEED TO CHECKOUT</Text>
                                            </TouchableOpacity>
                                        </View>


                                        {/* <View style={styles.payBtnContainer}>
                                            <TouchableOpacity onPress={this.payVisa} style={styles.visaBtn}>
                                                <Visa />
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={this.payMasterCard} style={styles.masterCardBtn}>
                                                <MasterCard />
                                            </TouchableOpacity><TouchableOpacity onPress={this.payAmex} style={styles.amexBtn}>
                                                <Amex />
                                            </TouchableOpacity><TouchableOpacity onPress={this.payDiscouver} style={styles.DiscouverBtn}>
                                                <Discover />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={this.payDiscouver} style={styles.DiscouverBtn}>
                                                <Maestro />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={styles.payPalImageContainer}>
                                            <Text style={styles.poweredBy}>Powered by </Text>
                                            <Image
                                                style={styles.paPalImage}
                                                source={require("../Images/paypal.png")}
                                            />
                                        </View> */}

                                    </View>

                                </ScrollView>
                            </View>
                        )
                    }
                }

            </Subscribe>
        )
    }
}

export { CartsScreen }