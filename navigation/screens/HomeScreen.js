import React from 'react';
import { View, StyleSheet } from 'react-native';
import VostcastPlayer from '../screens/VostcastPlayer'; // Corrected import path
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
    return (
        <View style={{ flex: 1 }}>
            <WebView
                originWhitelist={['file://*']}
                source={{
                    html: `<!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body {
                                background-color: black;
                                margin: 0;
                                padding: 0;
                            }
                    
                            .container {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                flex-direction: column; /* Added */
                                height: 100vh;
                                width: 100vw;
                            }
                    
                            .poster {
                                margin-bottom: 20px; 
                            }
                    
                            .player-container {
                                width: 100%;
                                height: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                flex-direction: column; /* Changed */
                            }
                    
                            .player {
                                width: 150px; /* Adjusted */
                                height: 30px; /* Adjusted */
                            }
                    
                            .player-name {
                                color: white; /* Added */
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="poster">
                            <img src=${require('../../navigation/screens/image0.jpeg')} alt="Poster Image" width="200" height="300">
                            </div>
                            <div class="player-container">
                                <div class="player-name">Your Player Name Here</div> <!-- Added -->
                                <iframe src="https://cdn.voscast.com/player/player.php?host=s1.voscast.com&port=8080&mount=/stream&autoplay=true&icecast=false" width="150" height="30" frameborder="0" scrolling="no" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </body>
                    </html>
                    
                    `
                }}
            />
        </View>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
