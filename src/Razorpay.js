import { View, Text ,StyleSheet  ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';


const RazorpayScreen = (props) => {
    const src = props.route.params.params.source
    console.log(props.route.params.params.source)

    return (
      <WebView
        source={src}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    );
  };
export default RazorpayScreen
