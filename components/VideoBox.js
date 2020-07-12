import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Input } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';

const styles = StyleSheet.create({
    title: {
        color: 'white',
    }
});

const VideoBox = ({ songName, text, customTextStyles, customTouchableStyles, handleOnPress }) => {

    return (
        <View style={{ backgroundColor: 'red', display: 'flex', flexDirection: 'row', width: '100%' }}>
            <View style={{ backgroundColor: 'white', width: '35%', }}>
                <ImageBackground
                    style={{ width: 140, height: 100 }}
                    source={{
                        uri: 'https://illumenium.veebispetsid.com/wp-content/uploads/2020/03/ILLUMENIUM_netartwork2A.jpg',
                    }}
                >
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 35 }}>
                        <TouchableOpacity>
                            <Icon
                                // onPress={showMenu}width: 30 
                                name="playcircleo"
                                type="AntDesign"
                                style={{ color: 'white', }}
                            // style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

            </View>

            <View style={{ backgroundColor: '#202020', width: '65%' }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, borderBottomWidth: 1, borderBottomColor: 'gray', height: 45, }}>
                    <Text style={{ color: 'white', paddingLeft: 5, fontFamily: "Roboto-Regular" }}>{songName}</Text>
                    <TouchableOpacity>
                        <Icon
                            name="menu"
                            type="Entypo"
                            style={{ color: 'white', fontSize: 20, marginRight: 3 }}
                        />

                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 45, }}>
                    <TouchableOpacity>
                        <Icon
                            name="step-backward"
                            type="FontAwesome"
                            style={{ color: 'white', fontSize: 20, marginLeft: 10, marginRight: 10 }}
                        />

                    </TouchableOpacity>
                    <Text style={{ color: 'white' }}>----------------------------</Text>
                    {/* <View style={{ flex: 1, flexDirection: 'row' }}>
                        <RangeSlider
                            minValue={0}
                            maxValue={100}
                            tintColor={'#da0f22'}
                            handleBorderWidth={1}
                            handleBorderColor="#454d55"
                            selectedMinimum={20}
                            selectedMaximum={40}
                            style={{ flex: 1, height: 70, padding: 10, backgroundColor: '#ddd' }}
                            onChange={(data) => { console.log(data); }}
                        />
                    </View> */}

                    <TouchableOpacity>
                        <Icon
                            name="step-forward"
                            type="FontAwesome"
                            style={{ color: 'white', fontSize: 20, marginLeft: 10, marginRight: 10 }}
                        />

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon
                            name="md-share"
                            type="Ionicons"
                            style={{ color: 'white', fontSize: 20, marginLeft: 10, marginRight: 10, alignSelf: "flex-end" }}
                        />

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export { VideoBox }