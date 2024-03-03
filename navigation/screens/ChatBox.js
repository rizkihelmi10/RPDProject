import * as React from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ChatBox() {
return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri:'http://radioppiduniachat.chatango.com/'}}
      />
    </View>
  );
}