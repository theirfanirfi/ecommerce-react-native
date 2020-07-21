import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Icon } from 'native-base';
import { Subscribe, } from "unstated"
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { CustomModal } from '../components/CustomModal';
import { getProducts } from '../apis';
import { CartContainer } from '../store/cart';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#0F0F17'
    },
    img: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 2,
    },
    detailContainer: {
        height: Dimensions.get("window").height / 4 - 20,
    },
    name: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    price: {
        textAlign: 'center',
        color: '#DD0000',
        fontSize: 24,
    },
    detail: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
    },
    wrapperCountContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 122,
        borderWidth: 1,
        borderColor: '#3E3E3E',
        marginLeft: 10,
        marginBottom: 8,
    },
    wrapperSign: {
        backgroundColor: '#383838',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperCount: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sign: {
        color: 'white',
    },
    count: {
        color: 'white',
    },
    addToCartBtn: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DD0000',
        marginRight: 10,
        borderRadius: 5,
    },
    addToCartBtnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "Roboto-Bold",
        paddingHorizontal: 10
    },
    wrapperCountAddCartBtnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    closeIconRoot: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "flex-end",
        marginRight: 20,
    },
    closeIconContainer: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        height: 27,
        width: 27,
        borderRadius: 27,
        marginRight: 7,
        marginTop: 7,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    basketIcon: {
        // fontSize: 30,
        color: 'red',
    },
    basketIconRoot: {
        position: 'absolute',
        left: 5,
        zIndex: 1,
        top: Dimensions.get("window").height / 1.35
    },
    basketIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#bebebe',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    basketCountContainer: {
        justifyContent: 'center',
        width: 25,
        height: 25,
        borderRadius: 12.5,
        backgroundColor: 'red',
        alignItems: 'center',
        left: 35,
        top: 13,
        zIndex: 1,
    },
    basketCount: {
        color: 'white',
        fontSize: 12,
        fontFamily: "Roboto-Bold"
    },
});

class ProductsScreen extends Component {
    state = {
        productsList: [],
        quickModalVisible: false,
        modalData: {},
        addCount: 1,
        loading: true
    }


    async componentDidMount() {
        const { status, message } = await getProducts()
        if (status) {
            this.setState({ productsList: message.data })
        }
        this.setState({ loading: false })

    }
    addToCartHandler = () => {
        alert('Pakistan Zindabad')
    }

    quickViewHandler = (id) => {
        let dataModal = this.state.productsList.find((item => item.id === id))
        this.setState({ quickModalVisible: true, modalData: dataModal })
    }

    addCart = () => {
        let localCount = this.state.addCount;
        this.setState({ addCount: this.state.addCount + 2 })
    }

    lessCart = () => {
        let localCount = this.state.addCount;
        if (localCount !== 0) {
            this.setState({ addCount: localCount - 1 })
        }
    }

    addToCart = () => {
        alert("This Item is add to cart.")
    }

    render() {
        const { productsList, loading } = this.state;
        const { navigation } = this.props
        return (
            <Subscribe to={[CartContainer]}>
                {
                    (cartStore) => {
                        const { state: { cart }, addToCart, increaseCount, decreaseCount, removeFromCart } = cartStore
                        return (
                            <View style={styles.root}>
                                {
                                    loading ? <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                                        <ActivityIndicator size="large" color="#DD0000" />
                                    </View> : (

                                            <View style={{ flex: 1 }}>
                                                <View style={[styles.basketIconRoot, { opacity: Object.keys(cart).length ? 1 : 0 }]}>
                                                    <View style={styles.basketCountContainer}>
                                                        <Text style={styles.basketCount}>{Object.keys(cart).length}</Text>
                                                    </View>
                                                    <TouchableOpacity style={styles.basketIconContainer} onPress={() => { Object.keys(cart).length && navigation.navigate("Merch Deals", { screen: "Carts" }) }}>
                                                        <Icon
                                                            name="shopping-basket"
                                                            type="MaterialIcons"
                                                            size={100}
                                                        // style={styles.basketIcon}
                                                        />
                                                    </TouchableOpacity>
                                                </View>


                                                <ScrollView>

                                                    <View>
                                                        <FlatList
                                                            data={productsList}
                                                            keyExtractor={item => item.id}
                                                            renderItem={({ item, index }) => {
                                                                return (
                                                                    // <ProductCard
                                                                    //     imageUrl={item.imageUrl}
                                                                    //     productName={item.productName}
                                                                    //     productPrice={item.productPrice}
                                                                    //     id={item.id}
                                                                    //     addToCartHandler={this.addToCartHandler}
                                                                    //     quickViewHandler={this.quickViewHandler}
                                                                    // // customTextStyles={} 
                                                                    // />
                                                                    <Card style={{ marginTop: 10, backgroundColor: "#fff" }}>
                                                                        <CardImage
                                                                            source={{ uri: item.img }}
                                                                            // title={item.productName}
                                                                            style={{ color: "#000" }}

                                                                        />
                                                                        <CardContent text={item.title} />
                                                                        <CardTitle
                                                                            title={`Price: ${item._regular_price || 0}€`}
                                                                            style={{ marginTop: -20 }}
                                                                        />
                                                                        <CardAction
                                                                            separator={true}
                                                                            inColumn={false}>
                                                                            <CardButton
                                                                                onPress={() => { }}
                                                                                title="Quick View"
                                                                                color="#DD0000"
                                                                                style={{ fontWeight: "bold", fontSize: 20 }}
                                                                                onPress={() => this.quickViewHandler(item.id)}
                                                                            // style={{ backgroundColor: "#DD0000", borderRadius: 5 }}

                                                                            />
                                                                            <CardButton
                                                                                onPress={() => Boolean(cart[item.id]) ? removeFromCart(item.id) : addToCart(item)}
                                                                                title={Boolean(cart[item.id]) ? "Remove From Cart" : "Add To Cart"}
                                                                                color="#DD0000"
                                                                            // style={{ backgroundColor: "#DD0000", borderRadius: 5 }}
                                                                            />
                                                                        </CardAction>
                                                                    </Card>
                                                                )
                                                            }}
                                                        />
                                                    </View>

                                                    <View>
                                                        <CustomModal
                                                            visible={this.state.quickModalVisible}
                                                            content={<View style={styles.modalContentContainer}>
                                                                <ImageBackground
                                                                    style={styles.img}
                                                                    source={{
                                                                        uri: this.state.modalData.img,
                                                                    }}
                                                                >
                                                                    <View style={styles.closeIconRoot}>
                                                                        <TouchableOpacity style={styles.closeIconContainer}>
                                                                            <Icon
                                                                                name="close"
                                                                                type="EvilIcons"
                                                                                onPress={() => this.setState({ quickModalVisible: false })}
                                                                                style={{ color: 'white' }}
                                                                                size={30}
                                                                            />
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                </ImageBackground>

                                                                <View style={styles.detailContainer}>
                                                                    <Text style={styles.name}>{this.state.modalData.title}</Text>
                                                                    <Text style={styles.price}>{`${this.state.modalData._regular_price}€`}</Text>
                                                                    <Text style={styles.detail}>{this.state.modalData.detail}</Text>
                                                                </View>

                                                                <View style={styles.wrapperCountAddCartBtnContainer}>
                                                                    <View style={styles.wrapperCountContainer}>
                                                                        <TouchableOpacity onPress={() => decreaseCount(this.state.modalData.id)} style={styles.wrapperSign}><Text style={styles.sign}>-</Text></TouchableOpacity>
                                                                        <View style={styles.wrapperCount}><Text style={styles.count}>{cart[this.state.modalData.id]?.quantity || 0}</Text></View>
                                                                        <TouchableOpacity onPress={() => increaseCount(this.state.modalData.id)} style={styles.wrapperSign}><Text style={styles.sign}>+</Text></TouchableOpacity>
                                                                    </View>

                                                                    <TouchableOpacity onPress={() => Boolean(cart[this.state.modalData.id]) ? removeFromCart(this.state.modalData.id) : addToCart(this.state.modalData)} style={styles.addToCartBtn}>
                                                                        <Text style={styles.addToCartBtnText}>{Boolean(cart[this.state.modalData.id]) ? "Remove From Cart" : "Add To Cart"}</Text>
                                                                    </TouchableOpacity>

                                                                </View>

                                                            </View>}
                                                            customDialogWidth={'95%'}
                                                            customDialogHeight={'70%'}
                                                            modalBackgroundColor={{ backgroundColor: '#0F0F17', borderWidth: 1, borderColor: 'white', borderRadius: 0 }}
                                                            buttonBackgroundColor={{ backgroundColor: '#DD0000' }}

                                                            buttonText="Close"
                                                            // title={"Oh no!"}
                                                            handleOnClose={() => {
                                                                this.setState({ quickModalVisible: false })
                                                            }}
                                                        />
                                                    </View>

                                                </ScrollView>
                                            </View>
                                        )
                                }

                            </View >
                        )
                    }
                }

            </Subscribe>
        )
    }
}

export { ProductsScreen }