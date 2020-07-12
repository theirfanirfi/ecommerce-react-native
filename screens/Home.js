import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, ScrollView, SafeAreaView, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'native-base';
import { VideoBox } from '../components/VideoBox';
import { Subscribe } from 'unstated';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavigation, {
    FullTab
} from 'react-native-material-bottom-navigation';
import { AuthContainer } from '../store/auth';

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#0F0F17',
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
});



class Home extends Component {
    state = {
        activeTab: 'games',
        musicList: [
            { name: "For My Old Friend (XIII)", duration: "3:40", id: 1 },
            { name: "Dream Destroyer", duration: "3:42", id: 2 },
            { name: "The Sick Letter (XIII)", duration: "3:47", id: 3 },
            { name: "Elysium (For Johannes Kuslap", duration: "3:33", id: 4 },
            { name: "For My Old Friend", duration: "3:52", id: 5 },
        ]

    }

    tabs = [
        {
            key: 'games',
            icon: 'gamepad-variant',
            label: 'Games',
            barColor: '#388E3C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'movies-tv',
            icon: 'movie',
            label: 'Movies & TV',
            barColor: '#B71C1C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'music',
            icon: 'music-note',
            label: 'Music',
            barColor: '#E64A19',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        }
    ]

    renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="white" name={icon} />
    )

    renderTab = ({ tab, isActive }) => (
        <FullTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
        />
    )
    componentDidMount() {
        return this.props.authStore.checkAuthentication()
    }
    render() {
        const { musicList } = this.state;
        return (
            <View style={styles.root}>
                <ScrollView>
                    <View style={{ marginBottom: 22 }}>
                        <ImageBackground
                            style={{ width: "100%", height: Dimensions.get("window").height / 1.4, }}
                            source={{
                                uri: 'https://illumenium.veebispetsid.com/wp-content/uploads/2020/03/ILLUMENIUM_netartwork2A.jpg',
                            }}
                        >

                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                                <Image
                                    style={{ width: 300, height: 300 }}
                                    source={{
                                        uri: 'https://illumenium.veebispetsid.com/wp-content/uploads/2020/02/layer-3-text.png',
                                    }}
                                />
                            </View>

                            <View style={styles.signUpBtnContainer}>
                                <Button style={styles.signUpBtn} onPress={this.signUpSubmit}><Text style={styles.signUpBtnText}>Order Albums Now</Text></Button>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={styles.wrapperListAndText}>
                        <View>
                            <VideoBox
                                songName="The song"
                            />
                        </View>
                        {/* <SafeAreaView style={styles.container}> */}
                        <View style={styles.flatListContainer}>
                            <FlatList
                                data={musicList}
                                keyExtractor={item => item.id}
                                renderItem={({ item, index }) => {
                                    return (
                                        // <TouchableWithoutFeedback>
                                        <View style={styles.list}>
                                            <Text style={styles.item}>{item.name}</Text>
                                            <Text style={styles.item}>{item.duration}</Text>
                                        </View>
                                        // </TouchableWithoutFeedback>
                                    )
                                }}
                            />
                        </View>
                        {/* </SafeAreaView> */}

                        <View>
                            <Text style={styles.addedTitleText}>The band's two styles can be distinguished quite easily - the hop-hip songs have XIII added to their titles.</Text>
                            <Text style={styles.exampleText}>For example, the title of the rock style For MY Friend reads ILLUMENIUN - For My Old Friend, while the hop-hip style one is called ILLUMENIUN (XIII) - FOr My Old Friend.Illumenium strated on Oct.8,2014, when the remaining members of the previous band Def Rage had their first rehearsal in Graz, Austria.</Text>
                        </View>

                    </View>

                </ScrollView>

                <BottomNavigation

                    activeTab={this.state.activeTab}
                    onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                    renderTab={this.renderTab}
                    tabs={this.tabs}
                />

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