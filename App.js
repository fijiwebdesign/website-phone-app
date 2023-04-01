import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview'

export default function App() {
  return (
    <WebView
        originWhitelist={['*']}
        source={{
          uri: "https://seedess.com"
        }}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
