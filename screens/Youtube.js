
import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import * as Progress from 'react-native-progress';
import { WebView } from 'react-native-webview';

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

    separator: {
        marginTop: 10,
    },

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
});


const key = "AIzaSyCHhXBHZbqNpIx5v_5cXxXejPb-9JMCLpI";
const results_per_page = 300;
const channelId = "UCe4iyHIns9fptt9aa0E_vZg";
//const youtube_data_url = "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=" + channelId + "&maxResults=" + results_per_page + "&part=snippet%2CcontentDetails&key=" + key

//const youtube_channel_url = "https://www.googleapis.com/youtube/v3/channels?id=" + channelId + "&part=snippet%2CcontentDetails&key=" + key + "&maxResults=" + results_per_page
const youtube_channel_url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCHhXBHZbqNpIx5v_5cXxXejPb-9JMCLpI&channelId=UCe4iyHIns9fptt9aa0E_vZg&part=snippet,id&order=date&maxResults=20"
class Youtube extends Component {

    state = {
        youtube_videos: [],
    }
    componentDidMount() {
        fetch(youtube_channel_url)
            .then(res => res.json())
            .then(res => {
                this.setState({ youtube_videos: res.items });
            })
    }

    webViewLoading() {
        return (
            <Progress.Circle size={50} indeterminate={true} />
        );
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.youtube_videos}
                    keyExtractor={(video) => {
                        return video.index;
                    }}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={styles.separator} />
                        )
                    }}
                    renderItem={(video) => {
                        if (video.item.id.kind == "youtube#video") {
                            return (
                                <View style={styles.card} >
                                    <TouchableOpacity onPress={() => {
                                        // const link = item._links.self[0].href
                                        // this.props.navigation.navigate('ViewBlogPost', { url: link })
                                    }} >

                                        <View style={styles.cardHeader}>
                                            <Text style={{ color: 'red', fontSize: 18 }}>{video.item.snippet.title}</Text>
                                        </View>
                                        <View>
                                            <WebView style={{ width: '100%', height: 200 }} source={{ uri: "https://youtube.com/embed/" + video.item.id.videoId }} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    }} />
            </View>
        )
    }
}
export { Youtube };


