
import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import axios from 'axios';
import * as Progress from 'react-native-progress';
import { WebView } from 'react-native-webview';
const key = "AIzaSyCHhXBHZbqNpIx5v_5cXxXejPb-9JMCLpI";
class Youtube extends Component {

    state = {
        url: null,
    }
    componentDidMount() {

    }

    webViewLoading() {
        return (
            <Progress.Circle size={50} indeterminate={true} />
        );
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
            </View>
        )
    }
}
export { Youtube };


