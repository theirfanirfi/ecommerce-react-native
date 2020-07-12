import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { CustomTextInput } from '../components/CustomTextInput';
import { images } from '../components/Images';
import { Subscribe } from 'unstated';
import { CartContainer } from '../store/cart';

const { P_PayPal, Visa, MasterCard, Amex, Discouver, PayPal } = images

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        backgroundColor: '#000000',
    },
    wrapperBillingCard: {
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#3E3E3E",
        marginBottom: 20
    },
    wrapperInputField: {
        height: 670,
        justifyContent: 'space-around',
        marginBottom: 5
    },
    billingTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        borderBottomColor: '#3E3E3E',
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginBottom: 5,
        marginTop: 10
    },
    input: {
        borderColor: '#3E3E3E'
    },
    img: {
        width: '100%',
        height: '100%',
    },
    wrapperImage: {
        width: 70,
        height: 60,
    },
    wrapperItemCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 6,
        marginBottom: 15,
        borderBottomColor: '#3E3E3E',
        borderBottomWidth: 1,
    },
    wrapperNameImage: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    wrapperNameCount: {
        flexDirection: 'row',
    },
    color: {
        color: 'white'
    },
    NameSubTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    wrapperSubTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#3E3E3E',
        borderBottomWidth: 1,
    },
    productTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 10
    },
    productName: {
        width: 140,
        paddingLeft: 6,
        color: 'white'
    },
    count: {
        color: 'white',
        marginLeft: 2
    },
    wrapperTotalPrice: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        borderBottomColor: '#3E3E3E',
        borderBottomWidth: 1,

    },
    wrapperSubTotal: {
        flexDirection: 'row',
        marginBottom: 10
    },
    subTotalTitle: {
        color: 'white',
        width: 90,
    },
    totalPrice: {
        width: 140,
        color: 'white',
        textAlign: 'right'
    },
    totalPrice1: {
        width: 140,
        color: 'red',
        textAlign: 'right'
    },
    wrapperPaymentMethod: {
        marginTop: 15,
    },
    payPalBtn: {
        width: '100%',
        height: 45,
        backgroundColor: '#FFC439',
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    pPayPalImageContainer: {},
    payWithText: {
        fontSize: 16
    },
    pPayPalImage: {
        width: 80,
        height: 20,
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
        width: 60,
        height: 30,
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
        width: 60,
        height: 30,
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
        width: 60,
        height: 30,
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
        width: 60,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aqua',
    },
    discouver: {
        width: 50,
        height: 22,
        backgroundColor: 'green',
        color: 'red'
    },
    promotionalCodeRoot: {
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#3E3E3E',
        marginBottom: 20
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
    proceedCheckOutBtn: {
        width: "80%",
        height: 80,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DD0000',
        marginHorizontal: "10%",
        marginBottom: 20,

    },
    proceedCheckOutBtnText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },

});


class CheckoutScreen extends Component {
    state = {
        shippingCharges: 15.50,
        totalPriceOrder: 0,
        promotionalCode: "",
        cart: [],
        orderList: [
        ],
        firstNmae: "irfan",
        lastName: "ullah",
        companyName: "options",
        country: "pk",
        streetAddress: "street address",
        apartment: "209",
        postCode: "9999",
        townCity: "pk",
        phoneNumber: "222",
        email: "email@email.com",
        order: [],
        order_id: ''
    }

    componentDidMount = () => {

        let totalPriceOrder = 0;
        // this.setState({cart: CartContai})
        this.state.orderList.map((order, index) => {
            console.log("oderders: " + order);
            totalPriceOrder = totalPriceOrder + (order.productPrice) * (order.quantity)
        })
        this.setState({ totalPriceOrder: totalPriceOrder })
    }

    payPal = () => {
        alert('Goto Pay With Paypal')
    }

    payVisa = () => {
        alert('Goto Visa')
    }

    payMasterCard = () => {
        alert('Goto MasterCard')
    }

    payAmex = () => {
        alert('Goto Amex')
    }

    payDiscouver = () => {
        alert('Goto Discover')
    }

    couponApply = () => {
        alert("Your Apply Faild")
    }

    proceedToCheckOut = cart => {
        let that = this;
        let orderDetails = {
            "payment_method": "braintree_paypal",
            "payment_method_title": "PayPal",
            "set_paid": false
        };
        orderDetails['billing'] = {
            "first_name": this.state.firstNmae,
            "last_name": this.state.lastName,
            "address_1": this.state.streetAddress,
            "address_2": this.state.streetAddress,
            "city": this.state.townCity,
            "state": "",
            "postcode": this.state.postCode,
            "country": this.state.country,
            "email": this.state.email,
            "phone": this.state.phoneNumber
        }

        orderDetails['shipping'] = {
            "first_name": this.state.firstNmae,
            "last_name": this.state.lastName,
            "address_1": this.state.streetAddress,
            "address_2": this.state.streetAddress,
            "city": this.state.townCity,
            "state": "",
            "postcode": this.state.postCode,
            "country": this.state.country,
            "email": this.state.email,
            "phone": this.state.phoneNumber
        }
        let orders = [];
        let total_price = 0;
        cart.map((item, index) => {
            orders.push({ product_id: item.id, quantity: item.quantity });
            total_price = parseInt(total_price) + parseInt(item._regular_price);
        });

        total_price = parseInt(total_price) + parseFloat(this.state.shippingCharges);


        console.log("price: " + parseInt(total_price));
        orderDetails['line_items'] = orders;
        orderDetails['shipping_lines'] = [
            {
                "method_id": "flat_rate",
                "method_title": "Flat Rate",
                "total": total_price.toString()
            }
        ]
        var url = "https://illumenium.veebispetsid.com/wp-json/wc/v3/orders";
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Basic Y2tfYjM3YjRjODRlNmJmYTIyYjA1ZDI5ZmFiYjQxYWRlNzVkMTJlODZjMDpjc19lYTY2YmE4ZTgzZjhlNDIwOTU0M2IzODI1ZTU3YjY5NmExM2U1Nzcw"
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(res => {
                this.setState({ order_id: res.id });
                that.props.navigation.navigate("PayPalScreen", { oid: res.id, totalPrice: total_price });
            })
            .finally(() => {

            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { firstNmae, lastName, companyName, country, streetAddress, apartment, postCode, townCity, phoneNumber, email, orderList, totalPriceOrder, shippingCharges, promotionalCode } = this.state;
        return (

            <Subscribe to={[CartContainer]}>
                {
                    (cartStore) => {
                        const { state: { cart }, addToCart, increaseCount, decreaseCount, removeFromCart, cartTotalAmount, getCart } = cartStore
                        const total = cartTotalAmount();
                        return (
                            <View style={styles.container}>
                                <ScrollView>

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

                                    <View style={styles.wrapperBillingCard}>
                                        <Text style={styles.billingTitle}>Billing & Shipping</Text>

                                        <View style={styles.wrapperInputField}>

                                            <CustomTextInput
                                                title="First name *"
                                                value={firstNmae}
                                                keyboardType={"email-address"}
                                                handleTextFieldChange={(text) => { this.setState({ firstNmae: text }) }}
                                                inputStyles={styles.input}
                                                maxLength={40}
                                            />

                                            <CustomTextInput
                                                title="Last name *"
                                                value={lastName}
                                                keyboardType={"email-address"}
                                                handleTextFieldChange={(text) => { this.setState({ lastName: text }) }}
                                                inputStyles={styles.input}
                                                maxLength={40}
                                            />

                                            <CustomTextInput
                                                title="Company name (optional) *"
                                                value={companyName}
                                                keyboardType={"email-address"}
                                                handleTextFieldChange={(text) => { this.setState({ companyName: text }) }}
                                                inputStyles={styles.input}
                                                maxLength={40}
                                            />

                                            <CustomTextInput
                                                title="Street address *"
                                                value={streetAddress}
                                                keyboardType={"email-address"}
                                                handleTextFieldChange={(text) => { this.setState({ streetAddress: text }) }}
                                                inputStyles={styles.input}
                                                maxLength={40}
                                                placeholder="House number and street name"
                                                placeholderTextColor='white'
                                            />

                                            <CustomTextInput
                                                // title="First name *"
                                                value={apartment}
                                                keyboardType={"email-address"}
                                                handleTextFieldChange={(text) => { this.setState({ apartment: text }) }}
                                                inputStyles={styles.input}
                                                maxLength={40}
                                                placeholder="Apartment, suite, unit etc. (optional)"
                                                placeholderTextColor="white"
                                            />

                                            <CustomTextInput
                                                title="Postcode / ZIP *"
                                                value={postCode}
                                                keyboardType={"email-address"}
                                                handleTextFieldChange={(text) => { this.setState({ postCode: text }) }}
                                                inputStyles={styles.input}
                                                maxLength={40}
                                            />

                                            <CustomTextInput
                                                title="Town / City *"
                                                value={townCity}
                                                keyboardType={"email-address"}
                                                handleTextFieldChange={(text) => { this.setState({ townCity: text }) }}
                                                inputStyles={styles.input}
                                                maxLength={40}
                                            />

                                            <CustomTextInput
                                                title="Phone *"
                                                value={phoneNumber}
                                                keyboardType={"number"}
                                                handleTextFieldChange={(text) => { this.setState({ phoneNumber: text }) }}
                                                inputStyles={styles.input}
                                                maxLength={40}
                                            />

                                            <CustomTextInput
                                                title="Email address *"
                                                value={email}
                                                keyboardType={"email-address"}
                                                handleTextFieldChange={(text) => { this.setState({ email: text }) }}
                                                inputStyles={styles.input}
                                                maxLength={40}
                                            />
                                        </View>
                                    </View>

                                    <View style={styles.wrapperBillingCard}>
                                        <Text style={styles.billingTitle}>Your Order</Text>

                                        <View style={styles.wrapperSubTitle}>
                                            <Text style={styles.productTitle}>Product</Text>
                                            <Text style={styles.productTitle}>Subtotal</Text>
                                        </View>

                                        <View>
                                            <FlatList
                                                data={Object.values(cart)}
                                                keyExtractor={item => item.id}
                                                renderItem={({ item, index }) => {
                                                    return (
                                                        <View style={styles.wrapperItemCard}>
                                                            <View style={styles.wrapperNameImage}>
                                                                <View style={styles.wrapperImage}>
                                                                    <Image
                                                                        style={styles.img}
                                                                        source={{
                                                                            uri: item.img,
                                                                        }}
                                                                    />
                                                                </View>

                                                                <View style={styles.wrapperNameCount}>
                                                                    <Text style={styles.productName} numberOfLines={1}>{item.title}</Text>
                                                                    <Text style={styles.count}> × {item.quantity}</Text>
                                                                </View>
                                                            </View>

                                                            <Text style={styles.color}>{(item._regular_price * item.quantity)}€</Text>

                                                        </View>
                                                    )
                                                }}
                                            />
                                        </View>

                                        <View style={styles.wrapperTotalPrice}>

                                            <View style={styles.wrapperSubTotal}>
                                                <Text style={styles.subTotalTitle}>Subtotal</Text>
                                                <Text style={styles.totalPrice}>{total}€</Text>
                                            </View>

                                            <View style={styles.wrapperSubTotal}>
                                                <Text style={styles.subTotalTitle}>Shipping</Text>
                                                <Text style={styles.totalPrice}>By post: {shippingCharges}€</Text>
                                            </View>

                                            <View style={styles.wrapperSubTotal}>
                                                <Text style={styles.subTotalTitle}>Total</Text>
                                                <Text style={styles.totalPrice1}>{(total + shippingCharges)}€</Text>
                                            </View>

                                        </View>


                                        <View style={styles.wrapperPaymentMethod}>

                                            <TouchableOpacity onPress={() => this.proceedToCheckOut(getCart())} style={styles.proceedCheckOutBtn}>
                                                <Text style={styles.proceedCheckOutBtnText}>Pay with PayPal</Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                </ScrollView>

                            </View>
                        )
                    }
                }

            </Subscribe>
        );
    }
}


export { CheckoutScreen }