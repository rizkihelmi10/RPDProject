import * as React from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ChatBox() {
    const injectJavaScript = `
    document.body.style.backgroundColor = '#000'; // Set background color to black
    document.body.style.color = '#fff'; // Set text color to white
  `;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'http://radioppiduniachat.chatango.com/' }}
        injectedJavaScript={injectJavaScript} // Inject JavaScript to set background color
      />
    </View>
  );
}