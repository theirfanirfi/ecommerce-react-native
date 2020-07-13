
import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import axios from 'axios';
import * as Progress from 'react-native-progress';
import { WebView } from 'react-native-webview';
class WebViewScreen extends Component {


    state = {
        url: null,
    }
    componentDidMount() {
        this.setState({ url: this.props.route.params.url })
    }

    webViewLoading() {
        return (
            <Progress.Circle size={50} indeterminate={true} />
        );
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <WebView style={{ width: '100%' }} source={{ uri: this.state.url }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                />
            </View>
        )
    }
}
export { WebViewScreen };


