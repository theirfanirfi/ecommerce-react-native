import React, { Component, createRef } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import { VideoBox } from '../components/VideoBox';
import { Subscribe } from 'unstated';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavigation, {
    FullTab
} from 'react-native-material-bottom-navigation';
import RBSheet from "react-native-raw-bottom-sheet";
import { AuthContainer } from '../store/auth';
import HTML from 'react-native-render-html';
import { bicons } from '../components/Icons';

const { Inbox } = bicons

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#0c0c13',
        flex: 1
    },
    wrapperListAndText: {
        marginHorizontal: 15,
    },
    flatListContainer: {
        // marginVertical: 10
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'black',
        // backgroundColor: 'red',
        height: 40
    },
    item: {
        color: 'white',
        fontFamily: "Roboto-Regular"
    },
    addedTitleText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        // marginVertical: 15,
        marginTop: 15,
        marginBottom: 13,
        padding: 5,
        fontFamily: "Roboto-Bold"
    },
    exampleText: {
        fontSize: 16,
        color: 'white',
        padding: 5,
        lineHeight: 25,
        fontFamily: "Roboto-Regular"
    },
    signUpBtn: {
        backgroundColor: '#DD0000',
        width: 180,
        height: 56,
        justifyContent: 'center',
        borderRadius: 5
    },
    signUpBtnContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 33,
    },
    signUpBtnText: {
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Roboto-Bold",
        fontSize: 15
    },

    container: {
        flex: 1,
        marginTop: 20,
    },
    list: {
        paddingHorizontal: 17,
        backgroundColor: "#0c0c13",
    },
    separator: {
        marginTop: 10,
    },
    /******** card **************/
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginVertical: 8,
        backgroundColor: "#0c0c13"
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        backgroundColor: "#EEEEEE",
    },
    cardImage: {
        flex: 1,
        height: 150,
        width: null,
    },
    /******** card components **************/
    title: {
        fontSize: 18,
        flex: 1,
        color: 'red'
    },
    description: {
        fontSize: 15,
        color: "#888",
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
    },
    time: {
        fontSize: 13,
        color: "#808080",
        marginTop: 5
    },
    icon: {
        width: 25,
        height: 25,
    },
    iconData: {
        width: 15,
        height: 15,
        marginTop: 5,
        marginRight: 5
    },
    timeContainer: {
        flexDirection: 'row'
    },
    /******** social bar ******************/
    socialBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    socialBarSection: {
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    socialBarlabel: {
        marginLeft: 8,
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    socialBarButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});



class Home extends Component {
    state = {
        activeTab: 'account',
        RBSheetView: null,
        posts: [],

    }

    constructor(props) {
        super(props);
        // console.log('constructor called')
    }

    tabs = [
        {
            key: 'account',
            icon: 'user',
            label: 'Account',
            barColor: 'lightgray',
            pressColor: 'lightgray'
        },
        {
            key: 'chat',
            icon: 'comments',
            label: 'Chat',
            barColor: '#B71C1C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'profile',
            icon: 'user',
            label: 'Profile',
            barColor: '#E64A19',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'inbox',
            icon: "inbox",
            label: 'inbox',
            barColor: '#E64A19',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        }
        ,
        {
            key: 'cart',
            icon: 'shopping-cart',
            label: 'cart',
            barColor: '#E64A19',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        }
    ]

    renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="black" name={icon} />
    )

    renderTab = ({ tab, isActive }) => (
        <FullTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            labelStyle={{ color: 'black' }}
            renderIcon={this.renderIcon(tab.icon)}
        />
    )
    accountTabLinks() {
        return (
            <View style={{
                justifyContent: 'center',
                marginTop: 22, alignItems: 'center',
            }}>
                <Text onPress={() => this.props.navigation.navigate('WebViewScreen',
                    { url: "https://illumenium.veebispetsid.com/my-account/orders/" })} style={{ fontSize: 20, marginTop: 8, borderBottomWidth: 3, borderColor: 'black' }}>Orders</Text>
                <Text onPress={() => this.props.navigation.navigate('WebViewScreen',
                    { url: "https://illumenium.veebispetsid.com/my-account/members-area/" })}
                    style={{ fontSize: 20, marginTop: 8, borderBottomWidth: 3, borderColor: 'black' }}>Memberships</Text>
                <Text onPress={() => this.props.navigation.navigate('WebViewScreen',
                    { url: "https://illumenium.veebispetsid.com/my-account/subscriptions/" })}
                    style={{ fontSize: 20, marginTop: 8, borderBottomWidth: 3, borderColor: 'black' }}>Subscriptions</Text>
                <Text onPress={() => this.props.navigation.navigate('WebViewScreen',
                    { url: "https://illumenium.veebispetsid.com/my-account/downloads/" })}
                    style={{ fontSize: 20, marginTop: 8, borderBottomWidth: 3, borderColor: 'black' }}>Downloads</Text>
            </View>
        )
    }

    profileTabLinks() {
        return (
            <View style={{
                justifyContent: 'center',
                marginTop: 22, alignItems: 'center',
            }}>
                <Text onPress={() => this.props.navigation.navigate('WebViewScreen',
                    { url: "https://illumenium.veebispetsid.com/members/hanno/profile/" })}
                    style={{ fontSize: 20, marginTop: 8, borderBottomWidth: 3, borderColor: 'black' }}>Profile</Text>
                <Text onPress={() => this.props.navigation.navigate('WebViewScreen',
                    { url: "https://illumenium.veebispetsid.com/members/hanno/friends/" })}
                    style={{ fontSize: 20, marginTop: 8, borderBottomWidth: 3, borderColor: 'black' }}>Friends</Text>
                <Text onPress={() => this.props.navigation.navigate('WebViewScreen',
                    { url: "https://illumenium.veebispetsid.com/activity/" })}
                    style={{ fontSize: 20, marginTop: 8, borderBottomWidth: 3, borderColor: 'black' }}>Activity</Text>
                <Text onPress={() => this.props.navigation.navigate('WebViewScreen',
                    { url: "https://illumenium.veebispetsid.com/members/hanno/settings/" })}
                    style={{ fontSize: 20, marginTop: 8, borderBottomWidth: 3, borderColor: 'black' }}>Settings</Text>
            </View>
        )
    }

    tabClicked = tab => {
        if (tab == 'account') {
            this.setState({
                RBSheetView: this.accountTabLinks()
            }, () => {
                this.RBSheet.open();
            })
        } else if (tab == "chat") {

        } else if (tab == "profile") {
            this.setState({
                RBSheetView: this.profileTabLinks()
            }, () => {
                this.RBSheet.open();
            })
        } else if (tab == "inbox") {
            this.props.navigation.navigate('WebViewScreen', { url: "https://illumenium.veebispetsid.com/members/hanno/messages/" })
        }
    }
    componentDidMount() {
        const url = "https://illumenium.veebispetsid.com/wp-json/wp/v2/posts?_embed"
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if (res.length > 0) {
                    this.setState({
                        posts: res
                    })
                }
                console.log("length = " + res.length)
            })
        return this.props.authStore.checkAuthentication()
    }
    renderBlogPostImage(post) {
        if (post.featured_media > 0) {
            console.log("featured image = " + post._embedded['wp:featuredmedia'][0].link)
            return (
                <Image style={styles.cardImage} source={{ uri: post._embedded['wp:featuredmedia'][0].link }} />
            )
        }
    }


    render() {
        const { posts } = this.state;

        return (
            <View style={styles.root}>
                <View style={styles.container}>
                    <FlatList style={styles.list}
                        data={posts}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        ItemSeparatorComponent={() => {
                            return (
                                <View style={styles.separator} />
                            )
                        }}
                        renderItem={(post) => {
                            const item = post.item;
                            return (
                                <View style={styles.card}>
                                    {this.renderBlogPostImage(item)}
                                    <View style={styles.cardHeader}>
                                        <View>
                                            <Text style={styles.title}>{item.title.rendered}</Text>
                                            {/* <Text style={styles.description}>{item.excerpt.rendered}</Text> */}
                                            <HTML tagsStyles={{ p: { color: 'white' } }} html={item.excerpt.rendered} imagesMaxWidth={Dimensions.get('window').width} />
                                            <View style={styles.timeContainer}>
                                                <Text style={styles.time}>{item.date}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        }} />
                </View>

                <BottomNavigation
                    activeTab={this.state.activeTab}
                    onTabPress={newTab => this.tabClicked(newTab.key)}
                    renderTab={this.renderTab}
                    tabs={this.tabs}
                    style={{ color: 'black' }}
                />

                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    openDuration={250}
                    animationType="slide"
                    closeOnDragDown={true}
                >
                    <View>
                        {this.state.RBSheetView}
                    </View>
                </RBSheet>
            </View>
        )
    }
}


const HomeScreen = (props) => <Subscribe to={[AuthContainer]}>
    {
        authStore => <Home {...props} authStore={authStore} />
    }
</Subscribe>
export { HomeScreen }